class StockOutsController < ApplicationController
  before_action :set_stock_out, only: [:show, :edit, :update, :destroy]

  respond_to :html

  def index
    @stock_outs = StockOut.all
    respond_with(@stock_outs)
  end

  def show
    respond_with(@stock_out)
  end

  def new
    @stock_out = StockOut.new
    respond_with(@stock_out)
  end

  def edit
  end

  def create
    @stock_out = StockOut.new(stock_out_params)
    stock_item = StockItem.find(@stock_out.stock_item.id)
    if stock_item.qty >= @stock_out.qty
      @stock_out.total = @stock_out.qty * @stock_out.cost
      flash[:notice] = 'StockIn was successfully created.' if @stock_out.save
      stock_item.qty -= @stock_out.qty
      stock_item.save
      redirect_to stock_outs_path
    else
      redirect_to stock_outs_path, alert:"Stock Out request denied!!!"      
    end
    
  end

  def update
    old_qty = @stock_out.qty
    stock_item = StockItem.find(@stock_out.stock_item.id)
    @stock_out.update(stock_out_params)
    
    if ((stock_item.qty + old_qty) - @stock_out.qty) >= 0
      total = @stock_out.qty * @stock_out.cost
      @stock_out.update(total:total)
      
      new_qty = (stock_item.qty + old_qty) - @stock_out.qty
      stock_item.update(qty: new_qty)
      redirect_to stock_outs_path, notice:'StockOut was successfully updated.'
    else
      @stock_out.update(qty:old_qty)
      redirect_to stock_outs_path, alert:"Stock Out Update request denied!!!"
    end

  end

  def destroy
    @stock_out.destroy
    redirect_to stock_outs_path
  end

  private
    def set_stock_out
      @stock_out = StockOut.find(params[:id])
    end

    def stock_out_params
      params.require(:stock_out).permit(:stock_item_id, :qty, :qty_type_id, :cost, :total)
    end
end
