require_relative 'boot'
require 'ethiopian_date'
include EthiopianDate
require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module WeSchool
  class Application < Rails::Application
    # Use the responders controller from the responders gem
    config.app_generators.scaffold_controller :responders_controller

    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 7.0
    config.before_configuration do
      env_file = File.join(ENV['HOME'], 'conf', 'll_env.yml')

      YAML
        .safe_load(File.open(env_file))
        .each { |key, value| ENV[key.to_s] = value } if File.exist?(env_file)
    end
    config.encoding = 'utf-8'

    # Settings in config/environments/* take precedence over those specified here.
    config.load_defaults 5.2

    config.hosts=nil
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    # Set Time.zone default to the specified zone and make Active Record auto-convert to this zone.
    # Run "rake -D time" for a list of tasks for finding time zone names. Default is UTC.
    config.time_zone = 'Africa/Nairobi'
    config.active_record.default_timezone = :local

    config.i18n.default_locale = :en
    config.encoding = 'utf-8'
    # config.assets.paths << Rails.root.join('app', 'assets', 'fonts')

    # Configuration for the application, engines, and railties goes here.
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    #
    # config.time_zone = "Central Time (US & Canada)"
    # config.eager_load_paths << Rails.root.join("extras")
  end
end
