# Load DSL and Setup Up Stages
# require 'capistrano/setup'

# # Includes default deployment tasks
# require 'capistrano/deploy'
# require 'capistrano/bundler'
# require 'capistrano/rails'


# require 'capistrano/setup'
# require 'capistrano/deploy'
# require 'capistrano/rails'
# require 'capistrano/nginx'


# Includes tasks from other gems included in your Gemfile
#
# For documentation on these, see for example:
#
#   https://github.com/capistrano/rvm
#   https://github.com/capistrano/rbenv
#   https://github.com/capistrano/chruby
#   https://github.com/capistrano/bundler
#   https://github.com/capistrano/rails
#
# require 'capistrano/rvm'
# require 'capistrano/rbenv'
# require 'capistrano/chruby'
# require 'capistrano/bundler'
# require 'capistrano/rails/assets'
# require 'capistrano/rails/migrations'

# Loads custom tasks from `lib/capistrano/tasks' if you have any defined.




# If you are using rvm add these lines:
# require 'capistrano/rvm'
# set :rvm_type, :user
# set :rvm_ruby_version, '2.0.0-p451'


# Dir.glob('lib/capistrano/tasks/*.cap').each { |r| import r }


# Dir.glob('lib/capistrano/tasks/*.rake').each { |r| import r }

# Load DSL and Setup Up Stages
require 'capistrano/setup'
require 'capistrano/deploy'

require 'capistrano/rails'
require 'capistrano/bundler'
require 'capistrano/rvm'
require 'capistrano/puma'



task :require_rvm do
  require 'capistrano/rvm'end

task :require_bundler do
  require 'capistrano/bundler'
end

task 'staging' => [:require_rvm, :require_bundler]
task 'production' => [:require_bundler]


# Loads custom tasks from `lib/capistrano/tasks' if you have any defined.
Dir.glob('lib/capistrano/tasks/*.rake').each { |r| import r }






SSHKit.config.command_map[:rake] ||= "rake"
SSHKit.config.command_map[:rake].sub!(/\(.*\)rake/, "\1bundle exec rake")