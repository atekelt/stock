 # frozen_string_literal: true

class UsersController < ApplicationController
  before_action :authenticate_user!
  load_and_authorize_resource
  before_action :set_user, only: %i[show edit update destroy]

  # GET /users
  # GET /users.json
  def index
    @roles = Role.all

    if params[:user_name]
      search_type = params[:logged_as]
      @users = User.where('user_name=?', search_type)
    end
  end

  def search
    if params[:query].present?
      @users = User.where("user_name LIKE ? OR email LIKE ?", "%#{params[:query]}%", "%#{params[:query]}%")




    end
    render layout: false
    # render json: @users
  end



  def show; end

  def new
    @user = User.new
  end

  def edit; end

  def create
    @user = User.new(user_params)
    # @user.approved = true
    respond_to do |format|
      if @user.save
        format.html { redirect_to @user, notice: 'User was successfully created.' }
        format.json { render :show, status: :created, location: @user }
      else
        format.html { render :new }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    if params[:user][:password].blank?
      params[:user].delete(:password)
      params[:user].delete(:password_confirmation)
    end

    respond_to do |format|
      if @user.update(user_params)
        format.html { redirect_to @user, notice: "User was successfully updated." }
        format.json { render :show, status: :ok, location: @user }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @user.destroy
    respond_to do |format|
      format.html { redirect_to users_url, notice: 'User was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def toggle_status
    set_user
    @user.approved = @user.approved? ? false : true
    @user.save(validate: false)

  end

  # def activate
  #   set_user
  #   @user.last_activity_at = Time.now
  #   @user.save(:validate => false)
  #   flash[:notice] = "#{@user} successfully activated"
  #   redirect_back(fallback_location: root_path)
  # end
  def toggle_lock
    set_user
    not_locked = @user.valid_for_authentication?
    if not_locked
      @user.lock_access!
    else
      @user.unlock_access!
    end
    @user.save(validate: false)

  end

  def reset_password
    set_user
    password = SecureRandom.hex(3)
    @user.password = password
    @user.password_confirmation = password

    if @user.save(validate: false)
      # @user.confirm!
      @passw =  password
      if Rails.env.production?
        message = "Reset password\n\n"
        message += "User: #{@user}\n"
        message += "Reset by: #{current_user.person.full_name}(#{current_role})\n\n"
        message += "Time: #{@user.updated_at.to_s(:long)}"
        TelegramMailer.group_message(message).deliver_later
      end
    else
      @error = "Password ain't reset!"
    end

  end


  def manage_roles
    set_user
    @roles = Role.all
  end



  private

  # Use callbacks to share common setup or constraints between actions.
  def set_user
    @user = User.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def user_params

    param =
      unless current_user.admin?
        params
          .require(:user)
          .permit(:user_name, :email, :password, :password_confirmation, role_ids: [])
      else
        params.require(:user)
              .permit(:user_name, :email, :password, :password_confirmation, role_ids: [])
      end

  end
end


