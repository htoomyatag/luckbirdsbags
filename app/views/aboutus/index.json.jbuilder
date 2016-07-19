json.array!(@aboutus) do |aboutu|
  json.extract! aboutu, :id, :about
  json.url aboutu_url(aboutu, format: :json)
end
