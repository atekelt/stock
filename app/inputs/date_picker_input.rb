# frozen_string_literal: true

class DatePickerInput < SimpleForm::Inputs::StringInput
  def input(wrapper_options)
    set_html_options
    set_value_html_option

    template.content_tag :div, class: 'input-group date' do
      input = super(wrapper_options)
      input + input_button
    end
  end

  def input_html_classes
    super.push('form-control')
  end

  private

  def input_button
    template.content_tag :button, type: 'button', class: 'btn btn-outline-secondary' do
      template.content_tag :i, '', class: 'bi bi-calendar'
    end
  end

  def set_html_options
    input_html_options[:type] = 'text'
    input_html_options[:data] ||= {}
    input_html_options[:data].merge!(date_options: date_options)
  end

  def set_value_html_option
    return unless value.present?

    input_html_options[:value] ||= I18n.localize(value, format: display_pattern)
  end

  def value
    object.public_send(attribute_name) if object.respond_to?(attribute_name)
  end

  def display_pattern
    I18n.t('datepicker.dformat', default: '%d/%m/%Y')
  end

  def picker_pattern
    I18n.t('datepicker.pformat', default: 'dd/mm/yyyy')
  end

  def date_options_base
    {
      format: picker_pattern,
      weekStart: 1,
      autoclose: true,
      todayHighlight: true
    }
  end

  def date_options
    custom_options = input_html_options[:data][:date_options] || {}
    date_options_base.merge!(custom_options)
  end
end
