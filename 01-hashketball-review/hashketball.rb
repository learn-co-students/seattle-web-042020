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

# select enumerates through every values and selects only the
# value it is true for -> select the rule that you put in
# what's the difference between select and each
# returns a array of players from teh away team
def away_players
  game_hash[:away][:players] 
end

# returns a array of players from teh home team
def home_players
  game_hash[:home][:players] 
end

#return the array with all the players
def all_players
  home_players + away_players
end

def find_player(player_name)
  all_players.find do |player|
    player[:player_name] == player_name  
  end
end

def num_points_scored(player_name)
    # 10
    # get to the point key in game hash
    # 3 key value pairs nested within this hash
  # binding.pry
  # game_hash[:away][:players].select do |player|
  #   player[:player_name] == player_name  
  # end  
  # game_hash[:home][:players].select do |player|
  #   player[:player_name] == player_name  
  # end  
  find_player(player_name)[:points]
end

# num_points_scored("Jeff Adrien")

def shoe_size(player_name)
  find_player(player_name)[:shoe]
end

def find_team(team_name)
  # game_hash.find 
  game_hash.find do |game_key, value|
    value[:team_name] == team_name
  end[1]
  # binding.pry
end


def team_colors(team_name)
  find_team(team_name)[:colors]
end
