namespace :db do
  desc "Create databases for all tenants"
  task create_all: :environment do
    Tenant.all.each do |tenant|
      system "createdb #{tenant.database_name} -h #{tenant.database_host} -U #{tenant.database_username} -w"
    end
  end
end