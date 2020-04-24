require "spec_helper"

describe "./cartoon_collections.rb" do
  small_calls = ["earth", "wind", "fire", "water", "heart"]
  other_calls = ["plants", "humans", "mushrooms", "brains"]
  short_calls = ["wood", "moss"]

  describe "square_array" do
    it "takes in an array of numbers and returns an array of those numbers squared" do
      expect(square_array([1,2,3,4,5])).to eq([1,4,9,16,25])
      expect(square_array([10, 12])).to eq([100, 144])
    end
  end

  describe "summon_captain_planet" do
    it "takes in an array of strings and returns a new array where each string is capitalized and has an exclamation point" do
      

      expect(summon_captain_planet(small_calls)).to eq(["Earth!", "Wind!", "Fire!", "Water!", "Heart!"])
      expect(summon_captain_planet(other_calls)).to eq(["Plants!", "Humans!", "Mushrooms!", "Brains!"])
    end
  end

  describe "long_planeteer_calls" do
    describe "takes in an array of strings and" do
      it "returns true if any string is greater than 4 characters long" do
        expect(long_planeteer_calls(small_calls)).to eq(true)
        expect(long_planeteer_calls(short_calls)).to_not eq(true)
      end

      it "returns false if all strings are less than 4 characters long" do
        expect(long_planeteer_calls(short_calls)).to eq(false)
        expect(long_planeteer_calls(small_calls)).to_not eq(false)
      end
    end
  end

  describe "find_valid_calls" do
    describe "takes in an array of strings" do
      it "checks for and valid planeteer calls and returns the first found if present" do
        expect(find_valid_calls(["Earth!", "Wind!", "Fire!", "Water!", "Heart!"])).to eq("Earth!")
        expect(find_valid_calls(["Wood!", "Wind!", "Brass!", "Enamel!", "Heart!"])).to eq("Wind!")
      end

      it "if no valid planeteer calls are found, returns nil" do
        expect(find_valid_calls(small_calls)).to be(nil)
        expect(find_valid_calls(short_calls)).to be(nil)
      end
    end
  end
end

#   
# end

# describe "takes in an array of strings and" do
#   small_calls = ["earth", "wind", "fire", "water", "heart"]
#   short_calls = ["wood", "moss"]

#   it "returns true if any string is greater than 4 characters long" do
#     expect(long_planeteer_calls(short_calls)).to eq(true)
#     expect(long_planeteer_calls(small_calls)).to_not eq(true)
#   end

#   it "returns false if all strings are less than 4 characters long" do
#     expect(long_planeteer_calls(short_calls)).to_not eq(false)
#     expect(long_planeteer_calls(small_calls)).to eq(false)
#   end
# end

