json.extract! stock_in, :id, :stock_item_id, :qty, :qty_type_id, :cost, :total, :created_at, :updated_at
json.url stock_in_url(stock_in, format: :json)
