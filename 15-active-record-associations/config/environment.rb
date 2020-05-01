require 'bundler'
Bundler.require

require_all 'models'

# CONN = SQLite3::Database.new("music.db")
# CONN.results_as_hash = true

ActiveRecord::Base.establish_connection(
  adapter: 'sqlite3',
  database: "music.db"
)
# module SQLite3
#   class Database
#   end
# end

