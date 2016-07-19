json.array!(@main_products) do |main_product|
  json.extract! main_product, :id, :title, :description
  json.url main_product_url(main_product, format: :json)
end
