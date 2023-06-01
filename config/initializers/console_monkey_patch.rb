# # config/initializers/console_monkey_patch.rb
#
# module Rails
#   module ConsoleMethods
#     def self.included(_base)
#       puts 'Hello, dev! ヾ(＾-＾)ノ'
#       puts "Welcome to the #{Rails.env} environment!"
#       print 'Enter your Admin user_name: '
#
#       user_name = gets
#       user = User.find_by(user_name: user_name.strip)
#
#       unless user
#         puts 'Admin not found! Exiting...'
#         exit
#       end
#
#       print 'Enter your password: '
#       pass = IO::console.getpass
#       if user.valid_password?(pass.strip)
#         puts "\nWelcome, #{user.email}!"
#       else
#         puts 'Provided password is incorrect! Exiting...'
#         exit
#       end
#     end
#   end
# end
