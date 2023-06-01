module ApplicationHelper
  def link_to_add_fieldsx(name, f, type)
    new_object = f.object.send "build_#{type}"
    id = "new_#{type}"
    fields =
      f.send("#{type}_fields", new_object, child_index: id) do |builder|
        render(type.to_s + '_fields', f: builder)
      end
    link_to(
      name,
      '#',
      class: 'add_fields',
      data: {
        id: id,
        fields: fields.gsub("\n", '')
      }
    )
  end

  def copyright_notice_year_range(start_year)
    # In case the input was not a number (nil.to_i will return a 0)
    start_year = start_year.to_i

    # Get the current year from the system
    current_year = Time.new.year

    # When the current year is more recent than the start year, return a string
    # of a range (e.g., 2010 - 2012). Alternatively, as long as the start year
    # is reasonable, return it as a string. Otherwise, return the current year
    # from the system.
    if current_year > start_year && start_year > 2000
      "#{start_year} - #{current_year}"
    elsif start_year > 2000
      "#{start_year}"
    else
      "#{current_year}"
    end
  end

  def menu?(a)
    case a
    when 'user'
      ['roles', 'users', 'messages'].include?(controller.controller_name)
    when 'basic'
      ['regions', 'campuses', 'zones', 'woredas', 'schools', 'school_levels'].include?(controller.controller_name)
    when "general"
      ['grades', 'subjects', 'sections', 'semesters', 'academic_years', 'class_rooms', 'rooms'].include?(controller.controller_name)

    when "academic"
      ['curriculum_subjects', 'available_sescions', 'academic_semesters'].include?(controller.controller_name)

    when "curriculum"
      ['curriculum_subjects', 'curriculums', 'students', 'applicants'].include?(controller.controller_name)
    when 'staff'
      ['staffs', 'teacher_assignments'].include?(controller.controller_name)
    else
      false
      # We use string interpolation "#{key}" here to access the CSS classes we are going to create.
    end
  end

  def bg_c(i)

    if [0, 4, 8].include?(i)
      'bg-success'
    elsif [1, 5, 9].include?(i)
      'bg-warning'
    elsif [2, 6, 10].include?(i)
      'bg-danger'
    elsif [3, 7, 11].include?(i)
      'bg-info'
    else
      'bg-warning'
    end
  end

  def is_general?

    current_page?(controller: 'grades')

    # We use string interpolation "#{key}" here to access the CSS classes we are going to create.
  end

  def active_link?(key, c)
    "#{key}" if controller.controller_name == c
  end

  def current?(key, path)

    "#{key}" if current_page? path
    # We use string interpolation "#{key}" here to access the CSS classes we are going to create.
  end

  def render_modal(partial:, locals: {}, title:, submit_text: "Save")
    locals[:submit_text] = submit_text
    locals[:dom_id] = "modal-#{SecureRandom.hex(5)}"
    locals[:title] = title

    submit_button = button_tag(submit_text, class: "btn btn-primary")

    render partial: "shared/modal", locals: { partial: partial, locals: locals, submit_button: submit_button }

  end
end
