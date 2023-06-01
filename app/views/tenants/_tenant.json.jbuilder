json.extract! tenant, :id, :name, :domain, :subdomain, :created_at, :updated_at
json.url tenant_url(tenant, format: :json)
