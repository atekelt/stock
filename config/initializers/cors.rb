# frozen_string_literal: true

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    # origins '*'
    # allow only frontend url in production * will not work!
    origins 'http://localhost:3001'
    resource '*', headers: :any, credentials: true, methods: %i[post delete]
  end
end
