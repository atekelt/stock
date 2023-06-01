class DateRangeInput < SimpleForm::Inputs::Base
  def input(wrapper_options = nil)
    merged_input_options = merge_wrapper_options(input_html_options, wrapper_options)

    # Generate two date fields with appropriate names
    start_date_field = @builder.text_field(attribute_name, merged_input_options.merge(id: "#{attribute_name}_start"))
    end_date_field = @builder.text_field(attribute_name, merged_input_options.merge(id: "#{attribute_name}_end"))

    # Combine the two fields into a single input group
    template.content_tag(:div, class: 'input-group date-range-picker') do
      template.concat(start_date_field)
      template.concat(end_date_field)
    end
  end
end
