class QtyTypesController < ApplicationController
  before_action :set_qty_type, only: [:show, :edit, :update, :destroy]

  respond_to :html

  def index
    @qty_types = QtyType.all
    respond_with(@qty_types)
  end

  def show
    respond_with(@qty_type)
  end

  def new
    @qty_type = QtyType.new
    respond_with(@qty_type)
  end

  def edit
  end

  def create
    @qty_type = QtyType.new(qty_type_params)
    flash[:notice] = 'QtyType was successfully created.' if @qty_type.save
    respond_with(@qty_type)
  end

  def update
    flash[:notice] = 'QtyType was successfully updated.' if @qty_type.update(qty_type_params)
    respond_with(@qty_type)
  end

  def destroy
    @qty_type.destroy
    respond_with(@qty_type)
  end

  private
    def set_qty_type
      @qty_type = QtyType.find(params[:id])
    end

    def qty_type_params
      params.require(:qty_type).permit(:name)
    end
end
