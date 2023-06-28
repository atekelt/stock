# frozen_string_literal: true

class Ability
  include CanCan::Ability

  def initialize(user)

    user ||= User.new # guest user (not logged in)
    current_role = user.role

    if current_role == "Admin"
      can :manage, :all
      # cannot :show_for_grade,TeacherAssignment

    end
    if current_role == "Student"
      can :read, Enrollment
      can :read, Parent
      can :read, Schedule
      can :read, Score
      can :read, StudentGrade
      can :read, Student
      can :assessments_list, Assessment
      can :read, AssessmentResult
      can :read, Announcement
      can :read, LessonPlan

    end
    if current_role == "Teacher"
      can :manage, Assessment
      can :manage, Attendance
      can :manage, AssessmentResult
      can :manage, LessonPlan
      can :my_class, Supervisor
      can :manage, TotalGrade
      can :switch_role, Role
      can :manage, Message
      can :student_info, Student
      can :manage, Student
      can :manage, Parent, user_id: user.id
      can :read, Announcement
      can :manage, Score
    end
    if current_role == "Finance"

      can :manage, Penalty
      can :switch_role, Role

      can :student_info, Student

      can :read, Announcement
      can :manage, Parent, user_id: user.id
      can %i[index dashboard], :home
      can :manage, [Student, Penalty, Bill, PaymentType, BillingPeriod, Payment, PenaltyLog, SmsNotification, Message]

    end
    if current_role == "Parent"
      can :switch_role, Role
      can :student_info, Student
      can :read, Student
      can :assessment_detail, Assessment
      can :attendance_report_detail, Attendance
      can :manage, Message
      can :manage, Message
      can :manage, Student
      can :manage, Parent, user_id: user.id
      can :read, Announcement
    end

    # Define abilities for the user here. For example:
    #
    #   return unless user.present?
    #   can :read, :all
    #   return unless user.admin?
    #   can :manage, :all
    #
    # The first argument to `can` is the action you are giving the user
    # permission to do.
    # If you pass :manage it will apply to every action. Other common actions
    # here are :read, :create, :update and :destroy.
    #
    # The second argument is the resource the user can perform the action on.
    # If you pass :all it will apply to every resource. Otherwise pass a Ruby
    # class of the resource.
    #
    # The third argument is an optional hash of conditions to further filter the
    # objects.
    # For example, here the user can only update published articles.
    #
    #   can :update, Article, published: true
    #
    # See the wiki for details:
    # https://github.com/CanCanCommunity/cancancan/blob/develop/docs/define_check_abilities.md
  end
end
