json.extract! stock_item, :id, :name, :location_id, :reference, :company_id, :qty, :qty_type_id, :cost, :total, :image, :created_at, :updated_at
json.url stock_item_url(stock_item, format: :json)
json.image url_for(stock_item.image)
