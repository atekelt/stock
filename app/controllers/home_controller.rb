class HomeController < ApplicationController
  before_action :authenticate_user!

  def index
    @stock_items = StockItem.all.count
    @stock_ins = StockIn.all.count
    @stock_outs = StockOut.all.count
    @companies = Company.all.count
    @stocks = StockItem.limit(5)
    
  end

  def filter
    if params[:report][:merchant_id].present?
      selected_merchant = Merchant.find(params[:report][:merchant_id])
      if selected_merchant.present?
        report =
          ReportGenerator.new(
            merchant: selected_merchant,
            start_date: Date.today,
            end_date: Date.today,
          )
        @payments_by_date, @payments_by_bank_id = report.charts
        @stat = report.call
      end
    end
  end

  def dashboard
    if params[:date].present?
      @date = Date.new(params[:date][:year].to_i, params[:date][:month].to_i)
      start_date = @date.beginning_of_month
      end_date = @date.end_of_month
    end

    report = ReportGenerator.new(
      merchant: current_merchant,
      start_date: start_date,
      end_date: end_date,
    )
    @payments_by_date, @payments_by_grade = report.charts rescue []
    @stat = report.call rescue []

  end

  def bank_report
    @merchants = Merchant.accessible_by(current_ability)
  end

  def filter_dashboard
    if params[:report][:merchant_id].present?
      selected_merchant = Merchant.find(params[:report][:merchant_id])
      start_date = params[:report][:from_date].to_date || Date.today
      end_date = params[:report][:to_date].to_date || Date.today

      if selected_merchant.present?
        report =
          ReportGenerator.new(
            merchant: selected_merchant,
            start_date: start_date,
            end_date: end_date,
          )
        @payments_by_date, @payments_by_bank_id = report.charts
        @stat = report.call
      end
    end
  end

  def details
    @candidate = Candidate.find(params[:c])
  end

  def search
    if request.post?
      @q = params[:member][:customer_no].strip.to_i
      unless @q.blank?
        @member = Member.where('customer_no=?', @q).last
        unless @member.blank?
          if @member.active_vote.blank?
            @candidates =
              Candidate
                .joins(:member)
                .where('members.woreda_id=?', @member.woreda_id)
            if @candidates.blank?
              redirect_to home_index_path, alert: 'በወረዳዎ ተወካይ አልተመዘገበም፡፡'
            end
          else
            redirect_to home_index_path,
                        alert: 'ዉድ አባላችን ከዚህ በፊት ስለመረጡ በድጋሚ መምረጥ አይችሉም'
          end
        else
          redirect_to home_index_path, alert: 'እባክዎ የደምበኛ ቁጥር አስተካክለው ያስገቡ'
        end
      else
        redirect_to home_index_path,
                    alert:
                      'እባክዎ የደምበኛ ቁጥር አስተካክለው ያስገቡእባክዎ የደምበኛ ቁጥር አስተካክለው ያስገቡ'
      end
    end
  end

  def vote
    @candidate = Candidate.find(params[:c])
    @member = Member.find(params[:m])
    @election = Election.active_election
    @vote = Vote.where(election_id: @election.id, member_id: @member.id).first
    unless @vote.blank?
      redirect_to home_index_path,
                  alert: 'ዉድ አባላችን ከዚህ በፊት ስለመረጡ በድጋሚ መምረጥ አይችሉም!'
    end
  end

  def set_vote
    candidate = Candidate.find(params[:a][:candidate_id])
    member = Member.find(params[:a][:member_id])
    mobile = params[:a][:mobile_no].strip rescue nil
    election = Election.active_election
    if mobile.blank?
      redirect_to home_index_path, alert: 'ዉድ አባላችን ስልክ ቁጥርዎን በትክክል ያስገቡ'

    else
      if member.mobile_no == mobile
        vote = Vote.where(election_id: election.id, member_id: member.id).first
        if vote.blank?
          vote =
            Vote.create(
              candidate_id: candidate.id,
              member_id: member.id,
              election_id: election.id
            )
          redirect_to home_index_path, notice: 'ዉድ አባላችን ተወካይዎትን ስለመረጡ እናመሰግናለን!'
        else
          redirect_to home_index_path,
                      alert: 'ዉድ አባላችን ከዚህ በፊት ስለመረጡ በድጋሚ መምረጥ አይችሉም!'
        end
      else
        redirect_to home_index_path, alert: 'ዉድ አባላችን ያስገቡት ስልክ ቁጥር የተሳሳተ ነው!'

      end
    end

  end

  private

  def user_should_be_guest
    redirect_to root_url if user_signed_in?
  end
end
