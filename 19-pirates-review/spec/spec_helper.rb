ENV["SINATRA_ENV"] = "test"
require_relative '../environment'
require 'rack/test'
require 'capybara/dsl'

RSpec.configure do |config|
  config.include Capybara::DSL
  config.include Rack::Test::Methods
  config.order = 'default'
end

def app
  Rack::Builder.parse_file('config.ru').first
end

Capybara.app = app