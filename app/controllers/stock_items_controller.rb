class StockItemsController < ApplicationController
  before_action :set_stock_item, only: [:show, :edit, :update, :destroy]

  respond_to :html

  def index
    @stock_items = StockItem.all
    respond_with(@stock_items)
  end

  def show
    @stock_ins = StockIn.where(stock_item_id:@stock_item.id)
    @stock_outs = StockOut.where(stock_item_id:@stock_item.id)
    @all = []

    @stock_ins.each do |stock|
      @all << stock
    end
    @stock_outs.each do |stock|
      @all << stock
    end
    @all = @all.sort_by(&:created_at)

    respond_with(@stock_ins, @stock_outs, @all)
  end

  def new
    @stock_item = StockItem.new
    respond_with(@stock_item)
  end

  def edit
  end

  def create
    @stock_item = StockItem.new(stock_item_params)
    @stock_item.qty = 0
    @stock_item.cost = 0
    @stock_item.total = 0
    flash[:notice] = 'StockItem was successfully created.' if @stock_item.save
    redirect_to stock_items_path
  end

  def update
    flash[:notice] = 'StockItem was successfully updated.' if @stock_item.update(stock_item_params)
    redirect_to stock_items_path
  end

  def destroy
    @stock_item.destroy
    redirect_to stock_items_path
  end

  private
    def set_stock_item
      @stock_item = StockItem.find(params[:id])
    end

    def stock_item_params
      params.require(:stock_item).permit(:name, :location_id, :reference, :company_id, :qty, :qty_type_id, :cost, :total, :image)
    end
end
