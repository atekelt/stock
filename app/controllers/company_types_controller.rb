class CompanyTypesController < ApplicationController
  before_action :set_company_type, only: [:show, :edit, :update, :destroy]

  respond_to :html

  def index
    @company_types = CompanyType.all
    respond_with(@company_types)
  end

  def show
    respond_with(@company_type)
  end

  def new
    @company_type = CompanyType.new
    respond_with(@company_type)
  end

  def edit
  end

  def create
    @company_type = CompanyType.new(company_type_params)
    flash[:notice] = 'CompanyType was successfully created.' if @company_type.save
    redirect_to company_types_path
  end

  def update
    flash[:notice] = 'CompanyType was successfully updated.' if @company_type.update(company_type_params)
    respond_with(@company_type)
  end

  def destroy
    @company_type.destroy
    respond_with(@company_type)
  end

  private
    def set_company_type
      @company_type = CompanyType.find(params[:id])
    end

    def company_type_params
      params.require(:company_type).permit(:name)
    end
end
