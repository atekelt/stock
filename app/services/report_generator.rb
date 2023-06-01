require 'webirr/bill'
require 'webirr/client'

class ReportGenerator
  def initialize(merchant:, start_date: Date.today, end_date: Date.today)
    @merchant = merchant
    @start_datetime = start_date.beginning_of_day.strftime('%F %T') rescue nil
    @end_datetime = end_date.end_of_day.strftime('%F %T') rescue nil
    @webirr_client = Webirr::Client.new(merchant.api_key, false)
  end

  def charts
    ActiveRecord.default_timezone = :utc

    by_date =
      Payment
        .by_merchant(@merchant)
        .by_date_range(@start_datetime, @end_datetime)
        .group_by_day(:payment_date)
        .count

    by_grade =
      Bill
        .by_merchant(@merchant)
        .by_date_range(@start_datetime, @end_datetime)
        .joins(bill: [student: [last_registration: :grade]])
        .where(confirmed: true)
        .group('grades.name')
        .count
    ActiveRecord.default_timezone = :local

    return by_date, by_grade
  end

  def call
    resp =
      @webirr_client.get_stat(
        date_from: @start_datetime,
        date_to: @end_datetime,
      )
    percentage =
      ((resp['res']['nBillsPaid'].to_f / resp['res']['nBills']) * 100.0).round(
        2,
      )
    if resp['error'].blank? && !resp['res'].blank?
      {
        merchant: @merchant.name,
        number_of_paid_bills: resp['res']['nBillsPaid'],
        bills_amount: resp['res']['amountBills'],
        paid_bills_amount: resp['res']['amountPaid'],
        number_of_bills: resp['res']['nBills'],
        percentage: percentage.nan? ? '0%' : "#{percentage}%",
      }
    end
  end
end
