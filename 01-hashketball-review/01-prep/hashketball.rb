# Write your code here!
require 'pry'

def game_hash
    { 
      :away => {
        :team_name => "Charlotte Hornets",
        :colors => ["Turquoise", "Purple"],
        :players => [
          {
            :player_name => "Jeff Adrien",
            :number => 4,
            :shoe => 18,
            :points => 10,
            :rebounds => 1,
            :assists => 1,
            :steals => 2,
            :blocks => 7,
            :slam_dunks => 2
          }, {
            :player_name => "Bismack Biyombo",
            :number => 0,
            :shoe => 16,
            :points => 12,
            :rebounds => 4,
            :assists => 7,
            :steals => 22,
            :blocks => 15,
            :slam_dunks => 10
          }, {
            :player_name => "DeSagna Diop",
            :number => 2,
            :shoe => 14,
            :points => 24,
            :rebounds => 12,
            :assists => 12,
            :steals => 4,
            :blocks => 5,
            :slam_dunks => 5
          }, {
            :player_name => "Ben Gordon",
            :number => 8,
            :shoe => 15,
            :points => 33,
            :rebounds => 3,
            :assists => 2,
            :steals => 1,
            :blocks => 1,
            :slam_dunks => 0
          }, {
            :player_name => "Kemba Walker",
            :number => 33,
            :shoe => 15,
            :points => 6,
            :rebounds => 12,
            :assists => 12,
            :steals => 7,
            :blocks => 5,
            :slam_dunks => 12
          }
        ]
      },
      :home => {
        :team_name => "Brooklyn Nets",
        :colors => ["Black", "White"],
        :players => [
          {
            :player_name => "Alan Anderson",
            :number => 0,
            :shoe => 16,
            :points => 22,
            :rebounds => 12,
            :assists => 12,
            :steals => 3,
            :blocks => 1,
            :slam_dunks => 1
          }, {
            :player_name => "Reggie Evans",
            :number => 30,
            :shoe => 14,
            :points => 12,
            :rebounds => 12,
            :assists => 12,
            :steals => 12,
            :blocks => 12,
            :slam_dunks => 7
          }, {
            :player_name => "Brook Lopez",
            :number => 11,
            :shoe => 17,
            :points => 17,
            :rebounds => 19,
            :assists => 10,
            :steals => 3,
            :blocks => 1,
            :slam_dunks => 15
          }, {
            :player_name => "Mason Plumlee",
            :number => 1,
            :shoe => 19,
            :points => 26,
            :rebounds => 11,
            :assists => 6,
            :steals => 3,
            :blocks => 8,
            :slam_dunks => 5
          }, {
            :player_name => "Jason Terry",
            :number => 31,
            :shoe => 15,
            :points => 19,
            :rebounds => 2,
            :assists => 2,
            :steals => 4,
            :blocks => 11,
            :slam_dunks => 1
          }
        ]
      }
    }
end

# returns the away players
def away_players
  game_hash[:away][:players]
end

# returns the home players
def home_players
  game_hash[:home][:players]
end

# returns all the players
def all_players
  away_players + home_players
end

# returns the first matching player
def matching_player(player_name)
 all_players.find do |player|
    player[:player_name] == player_name
  end
end

def num_points_scored(player_name)
  matching_player(player_name)[:points]
end

def shoe_size(player_name)
  matching_player(player_name)[:shoe]
end

def find_team_key(team_name)
  game_key = game_hash.keys.find do |team_key|
    game_hash[team_key][:team_name] == team_name
  end
end

def team_colors(team_name)
  game_key = game_hash.keys.find do |team_key|
    game_hash[team_key][:team_name] == team_name
  end
  game_hash[find_team_key(team_name)][:colors]
end

def team_names
  game_hash.keys.map do |team_key|
    game_hash[team_key][:team_name]
  end
end

def player_numbers(team_name)
  game_hash[find_team_key(team_name)][:players].map do |player|
    player[:number]
  end
end

def player_stats(player_name)
  player_stats = matching_player(player_name)
  player_stats.delete(:player_name)
  player_stats
end

def big_shoe_rebounds
  all_players.max_by do |player|
    player[:shoe]
  end[:rebounds]
end

def most_points_scored
  all_players.max_by do |player|
    player[:points]
  end[:player_name]
end

def winning_team
  total_points = 0
  winning_team = ""
  game_hash.keys.each do |game_key|
    players = game_hash[game_key][:players]
    team_points = players.map{ |player| player[:points] }.sum
    if team_points > total_points 
      total_points = team_points
      winning_team = game_hash[game_key][:team_name]
    end
  end
  winning_team
end


def player_with_longest_name
  all_players.max_by do |player|
    player[:player_name].length
  end[:player_name]
end

def most_steals
  all_players.max_by do |player|
    player[:steals]
  end[:player_name]
end

def long_name_steals_a_ton?
  player_with_longest_name == most_steals
end