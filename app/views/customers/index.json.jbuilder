json.array!(@customers) do |customer|
  json.extract! customer, :id, :title, :description
  json.url customer_url(customer, format: :json)
end
