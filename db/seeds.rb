# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
u = User.new(user_name: "admin", email: "admin@wsc.com", password: 'exit')

u.save(validate: false)
# p = u.build_staff
# p.save(validate: false)

# 100.times.each do |i|
#   u = User.new(user_name: "Student#{i}", email: "Student#{i}@wsc.com", password: 'exit', current_role: 'student')

#   u.save(validate: false)
#   s = u.build_student

#   s.attributes = ({
#     first_name: "TestStudent #{i}",
#     father_name: "Father Name #{i}",
#     grand_father_name: "G father name #{i}",
#     sex: "F",
#     nationality: "Ethiopian",

#     academic_year_id: AcademicYear.first.id,
#     emergency_contact_full_name: "Name #{i}",
#     emergency_contact_relation: "test",
#     emergency_contact_telephone: "0929934343244#{i}",

#     campus_id: Campus.first.id })
#   s.save(:validate => false)
# end

# s.each do |r|
#   @subjects = CurriculumSubject.where(grade_id: '88fe259e-dd76-4332-bc10-e9085e20dc13')

#   rr = Registration.create(student_id: r.id, grade_id: "88fe259e-dd76-4332-bc10-e9085e20dc13", section_id: Section.first.id, academic_year_id: r.academic_year_id)
#   if rr.save!(validate: false)
#     Enrollment.build_enroll("88fe259e-dd76-4332-bc10-e9085e20dc13" , rr.id, @subjects)
#   end
# end