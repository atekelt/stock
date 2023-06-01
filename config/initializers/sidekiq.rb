rails_root = Rails.root || File.dirname(__FILE__) + '/../..'
rails_env = Rails.env || 'development'
redis_config = YAML.load_file(rails_root.to_s + '/config/redis.yml')
redis_config.merge! redis_config.fetch(Rails.env, {})
redis_config.symbolize_keys!

Sidekiq.configure_server do |config|
  config.options[:dead_max_jobs] = 100_000
  config.redis = { url: "redis://#{redis_config[:host]}:#{redis_config[:port]}/3", password: redis_config[:password] }
  config.failures_max_count = false
end

Sidekiq.configure_client do |config|
  config.redis = { url: "redis://#{redis_config[:host]}:#{redis_config[:port]}/3", password: redis_config[:password] }
end