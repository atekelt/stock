require "application_responder"

class ApplicationController < ActionController::Base

  before_action :authenticate_user!
  # before_action :configure_permitted_parameters, if: :devise_controller?
  before_action :set_paper_trail_whodunnit
  before_action :turbo_frame_request_variant
  before_action :set_cache_buster
  protect_from_forgery with: :exception, prepend: true
  helper_method :current_merchant
  helper_method :current_role
  # set_current_tenant_by_subdomain_or_domain(:school, :subdomain, :domain)

  rescue_from ActionController::InvalidAuthenticityToken do |_exception|
    Devise.sign_out_all_scopes ? sign_out : sign_out(resource_name)
    redirect_to root_path
  end
  # before_action do
  #   binding.irb
  # end
  rescue_from CanCan::AccessDenied do |exception|
    redirect_to root_url, alert: exception.message
  end

  rescue_from ActiveRecord::InvalidForeignKey do |exception|
    controller_name = Rails.application.routes.recognize_path(request.referrer)[:controller]
    redirect_back fallback_location: root_path, alert: "You can not delete already used #{controller_name}!"
  end

  rescue_from ActiveRecord::RecordNotFound do |exception|
    redirect_back fallback_location: root_path, alert: 'Not Found, Please follow proper URL links!'
  end

  def current_merchant
    @current_merchant ||= Merchant.first

  end

  # def current_role
  #   @current_role ||= current_user.current_role

  # end

  #
  # rescue_from CanCan::AccessDenied do |exception|
  #   redirect_to root_url, alert: exception.message
  # end
  # rescue_from ActiveRecord::InvalidForeignKey do |_exception|
  #   redirect_to root_url,
  #               alert:
  #                 'The record you are trying to delete has dependent records!'
  # end
  #
  # rescue_from ActiveRecord::StatementInvalid do |_exception|
  #   redirect_to root_url,
  #               alert:
  #                 'Invalid Form data...make sure to fill date and numeric fields properly'
  # end

  # rescue_from ActiveRecord::RecordNotFound do |_exception|
  #   redirect_to root_url, notice: 'Not Found, Please follow proper URL links!'
  # end
  if Rails.env == 'production'
    include ExceptionLogger::ExceptionLoggable # loades the module
    rescue_from Exception, with: :log_exception_handler # tells rails to forward the 'Exception' (you can change the type) to the handler of the module
  end

  private

  def turbo_frame_request_variant
    request.variant = :turbo_frame if turbo_frame_request?
  end

  protected

  def after_sign_out_path_for(scope)
    root_path
  end

  def info_for_paper_trail
    # Save additional info
    # { ip: request.remote_ip, whodunnit: current_user.try(:id) }
  end

  def user_for_paper_trail
    # Save the user responsible for the action
    user_signed_in? ? current_user.id : nil
  end

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(
      :sign_in,
      keys: %i[user_name email password remember_me]
    )
  end

  def set_cache_buster
    response.headers['Cache-Control'] =
      'no-cache, no-store,max-age=0, must-revalidate'
    response.headers['Pragma'] = 'no-cache'
    response.headers['Expires'] = 'Fri, 01 Jan 1990 00:00:00 GMT'
  end
end
