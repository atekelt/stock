json.extract! stock_out, :id, :stock_item_id, :qty, :qty_type_id, :cost, :total, :created_at, :updated_at
json.url stock_out_url(stock_out, format: :json)
