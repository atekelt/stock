class StockInsController < ApplicationController
  before_action :set_stock_in, only: [:show, :edit, :update, :destroy]

  respond_to :html

  def index
    @stock_ins = StockIn.all
    respond_with(@stock_ins)
  end

  def show
    respond_with(@stock_in)
  end

  def new
    @stock_in = StockIn.new
    respond_with(@stock_in)
  end

  def edit
  end

  def create
    @stock_in = StockIn.new(stock_in_params)
    @stock_in.total = @stock_in.qty * @stock_in.cost
    flash[:notice] = 'StockIn was successfully created.' if @stock_in.save
    stock_item = StockItem.find(@stock_in.stock_item.id)
    stock_item.qty += @stock_in.qty
    stock_item.save
    redirect_to stock_ins_path
  end

  def update
    old_qty = @stock_in.qty
    flash[:notice] = 'StockIn was successfully updated.' if @stock_in.update(stock_in_params)
    total = @stock_in.qty * @stock_in.cost
    @stock_in.update(total:total)
    stock_item = StockItem.find(@stock_in.stock_item.id)
    new_qty = (stock_item.qty - old_qty) + @stock_in.qty
    stock_item.update(qty: new_qty)
    redirect_to stock_ins_path
  end

  def destroy
    @stock_in.destroy
    redirect_to stock_ins_path
  end

  private
    def set_stock_in
      @stock_in = StockIn.find(params[:id])
    end

    def stock_in_params
      params.require(:stock_in).permit(:stock_item_id, :qty, :qty_type_id, :cost, :total, :stock_type)
    end
end
