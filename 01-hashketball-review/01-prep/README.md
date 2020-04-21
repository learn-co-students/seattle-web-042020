# Hashketball

## Learning Goals

* Practice building nested hashes.
* Practice iterating over nested hashes.

## Instructions

This lab is about as representative of real-life tasks as a programmer as you
can get: data on paper or in tables needs to be given to a programming language
to deliver _insights_.

You're going to perform an analysis on an NBA game. You've been provided some
basic game data in a series of tables. You're going to ask Ruby to help you
answer some questions about the game.

This challenge comes in two major pieces:

1. Build a nested data structure from text and data stored in tables
2. Process the nested data structure to produce _insights_ about how various
   players performed

While you've worked with nested data structures using simple looping and
Enumerables, you've never before had to _create_ such a complex nested data
structure **and** _process_ it as well. Work where you processed `Array` of
`Arrays` or `Array`s of `Hash`es would be wise to freshen up on as preparation.
Take it in pieces, remember your training, and you'll get there!

We also strongly recommend that you read the ***entire*** README before you
start coding. We're going to show some tips and tricks that make the coding a
lot easier...but only if you read through to the end.

Code your solution in `hashketball.rb` following the steps below. Because this
lab is so big, we'll show you new techniques for running only small chunks of
the test suite so that you're not overwhelmed by all the test data!

## Step 1: Building the Hash

The first method you will define is called `game_hash`. This method contains and
returns a hash nested in the following manner:

* The top level of the hash has two keys: `:home`, for the home team, and
  `:away`, for the away team.
* The values of the `:home` and `:away` keys are hashes. These hashes have the
  following keys:
  * `:team_name`
  * `:colors`
  * `:players`
* The `:team_name` key points to a string of the team name.
* The `:colors` key points to an array of strings that are that team's colors.
* The `:players` key points to an `Array` of `Hash`es. Each `Hash` in the `Array`
  should contain the players' stats. Each stat should be a key that points to
  a value for that stat. The keys should be:
  * `:player_name`
  * `:number`
  * `:shoe`
  * `:points`
  * `:rebounds`
  * `:assists`
  * `:steals`
  * `:blocks`
  * `:slam_dunks`
* The data for each player is provided in a table below.

Home Team:

* team name: Brooklyn Nets
* colors: Black, White
* players:

|          Stat          | Info | Info |  Info | Info | Info   |
|:------------------:|:-------------:|:------------:|:------------:|:-------------:|:-------------:|
| **Player Name**    |  Alan Anderson| Reggie Evans | Brook Lopez  | Mason Plumlee | Jason Terry   |
| **Number**         | 0             | 30           | 11           | 1             | 31            |
| **Shoe**           | 16            | 14           | 17           | 19            | 15            |
| **Points**         | 22            | 12           | 17           | 26            | 19            |
| **Rebounds**       | 12            | 12           | 19           | 11            | 2             |
| **Assists**        | 12            | 12           | 10           | 6             | 2             |
| **Steals**         | 3             | 12           | 3            | 3             | 4             |
| **Blocks**         | 1             | 12           | 1            | 8             | 11            |
| **Slam Dunks**     | 1             | 7            | 15           | 5             | 1             |

Away Team:

* team name: Charlotte Hornets
* colors: Turquoise, Purple
* players:

|        Stat       |     Info          |         Info     |              Info |         Info     |         Info      |
|:------------------:|:-----------------:|:-----------------:|:-----------------:|:---------------:|:-----------------:|
| **Player Name**  | Jeff Adrien     | Bismack Biyombo    | DeSagna Diop      | Ben Gordon      | Kemba Walker   |
| **Number**         | 4                 | 0                 | 2                 | 8               | 33                |
| **Shoe**           | 18                | 16                | 14                | 15              | 15                |
| **Points**         | 10                | 12                | 24                | 33              | 6                 |
| **Rebounds**       | 1                 | 4                 | 12                | 3               | 12                |
| **Assists**        | 1                 | 7                 | 12                | 2               | 12                |
| **Steals**         | 2                 | 22                 | 4                 | 1               | 7                |
| **Blocks**         | 7                 | 15                | 5                 | 1               | 5                 |
| **Slam Dunks**     | 2                 | 10                | 5                 | 0               | 12                |

Write a method called `game_hash` that returns your nested data structure. We
might suggest starting with having `game_hash` return only a `{}`. Then run the
`game_hash` tests (see next section) and slowly build up your nested data
structure to satisfy those tests. We'll describe the strategy here in the next
sections.

### Process Tip: Writing Nested Data Structures is Hard

Writing nested data structures is challenging because we humans can lose track
of whether or not we closed a `{...}` set or added a `,` in the right place.
Running a small chunk of tests (more on that in the next section ) to make sure
our nested data structure is _syntactically valid_ (i.e. honors Ruby's grammar
rules) is a good idea. This allows a process like:

* Start with something _syntactically valid_, but _incorrect_ e.g. `{}`
* Make an edit
* run the tests
* Is the nested data structure valid? Great!
* Make another edit
* Run the tests...error!
* Add missing comma
* Add the comma
* Run tests...
* Working again!

Syntactically valid, but _incorrect_ nested data structures are easier to
correct than to fix _syntactically invalid_ ***and*** _incorrect_ nested data
structures.  Constantly asking Ruby "Hey can you read this?" means that you're
never have a mountain of things that are broken...maybe small,
more-easily-fixed little pile.

Once you have a _syntactically valid,_ but _incorrect_ nested data structure,
you can slowly add to the nested data structure and move it to being _correct_.
A key strategy to iterating towards _correctness_ is running a small subset of
tests to have _Ruby_ validate our nested data structure instead of our
error-prone human eyes.

### Process Tip: Run Only a Few Tests

When we have a lot of tests and run them all with `learn` and get back all
those failing messages it can make us feel sad. It's like telling someone
you're trying to learn an étude on piano and they keep telling you it's not
perfect yet. "Yeah, we know, that's why we said we're _l-e-a-r-n-i-n-g_ it."

We can run a section of our tests by using the following command from the CLI:

`rspec spec/hashketball_spec.rb -e game_hash`

The thing that lets us run only a portion of the test suite is the `-e` for
`--example` flag. It means "only run tests in a section that matches the word
`game_hash`." You can read more about it in the [RSpec documentation for `--example`][example].

The `learn` program uses `rspec` to evaluate test success. So, if we get a
subset of the tests working, as proved by `rspec`, we can trust that those tests
will pass when we run `learn`.

> **Wisdom**: Move from working to working to working. Never let "broken in
> this way, and that way, and that way" mount up!

### Leaving Step 1

Let's zoom back out again and run _all_ the tests. Many tests fail, but the
good news is that the three tests in the "`game_hash`" example are _passing_.
That means we have a _correct_ and _syntactically valid_ nested data structure
to work with. That means we can start building the methods that the tests
demand. We're ready for Step 2!

## Step 2: Building Methods

At this point, you're where you were with earlier labs. You were given a nested
data structure and then needed to process it to product _insights_. Since you
have a thorough understanding of the nested data structure (you wrote it, after
all), we don't need to review things like using `pp` to "pretty-print" the
nested data structure. We can pick up on our process from where we need to
start processing the nested data structure into _insights_.

1. Ensure you can read data out of the nested data structure with simple, basic
   `[]` calls
2. Wrap basic code that "reaches into" the nested data structure in methods
   that have friendly human-names. Wrap basic (or "First Order") methods into
   methods that do more ("Nth Order") and are human-brain-friendly (`list_snacks`)
3. Be flexible; work from what you have to where you want to go; or, work
   backward; or, make a midpoint between what you have and what you need to
   have

While you might have seen this pattern with simple nested data structure work,
this pattern **is still valid**. The only thing that's changed is that in some
places you can see where an Enumerable could make your code clearer and
briefer.  ***This process works***. Take this lab as a chance to hone your
skills attacking BIG problems with process _on your side_.

### Applying Nested Data Structure-Processing Process

Run `learn`. There are a whole bunch of methods that are expected to exist. The
first one is `num_points_scored`. But there's so much output. Let's make it
more manageable (again).

We can run this method's test, again by using the [-e][example] or `--example`
flag: `rspec spec/hashketball_spec.rb -e num_points_scored`.

> **PRO TIP**: You can use this strategy to run small chunks of the test suite.
> Simply look in the `spec/hashketball_spec.rb` file and find a `describe`
> block. You can run all the tests under it by using that block's `String` as
> an argument to `-e`.

That `num_points_scored` method produces an _insight_. Here's a specification:

* Build a method, `num_points_scored` that takes in an argument of a player's
  name and returns the number of points scored for that player.

Why don't we define that method and have it return `game_hash`?

```ruby
def num_points_scored
  game_hash
end
```

Run the test again. Sure enough, our method fails (unsurprisingly). Here's a
chance to employ the "see-saw" strategy. Add code to get `num_points_scored`
working. If you need to "invent" helper methods, to help you process
`game_hash`, do so! Here's some sample thought process:

> Think about where in the hash you will find a player's `:points`. How can you
> iterate down into that level? Think about the return value of your method.
> Remember that `.each` returns the original collection that you are iterating
> over. How can you return the number of points for a particular player? How
> would we have done it with a simple `while` loop? Which Enumerable helps
> here? Is a while-loop better than an Enumerable? _Etc._

If you repeat the process we just explored together, you will be able to
deliver more complex methods to satisfy tests. Find a failing test, build a
"skeleton method," iterate on the code, get success, and move on. This is the
way software is "grown" in the real world.

### Additional Methods

* Build a method, `shoe_size`, that takes in an argument of a player's name and
  returns the shoe size for that player.
  * Think about how you will find the shoe size of the correct player. How can
    you check and see if a player's name matches the name that has been passed
    into the method as an argument?

* Build a method, `team_colors`, that takes in an argument of the team name and
  returns an `Array` of that team's colors.

* Build a method, `team_names`, that operates on the game `Hash` to return an
  `Array` of the team names.

* Build a method, `player_numbers`, that takes in an argument of a team name and
  returns an `Array` of the jersey numbers for that team.

* Build a method, `player_stats`, that takes in an argument of a player's name
  and returns a hash of that player's stats.
  * Check out the following example of the expected return value of the
    `player_stats` method:

  ```bash
  player_stats("Alan Anderson")
  => { :number => 0,
        :shoe => 16,
        :points => 22,
        :rebounds => 12,
        :assists => 12,
        :steals => 3,
        :blocks => 1,
        :slam_dunks => 1
      }
  ```

* Build a method, `big_shoe_rebounds`, that will return the number of rebounds
  associated with the player that has the largest shoe size. Break this one down
  into steps:
  * First, find the player with the largest shoe size
  * Then, return that player's number of rebounds
  * Remember to think about return values here.

**Bonus Questions:**

Define methods to return the answer to the following questions:

1. Which player has the most points? Call the method `most_points_scored`.

2. Which team has the most points? Call the method `winning_team`.

3. Which player has the longest name? Call the method `player_with_longest_name`.

**Super Bonus:**

1. Write a method that returns true if the player with the longest name had the
   most steals. Call the method `long_name_steals_a_ton?`.

## "I am completely stuck"

This is a challenging lab. Process, small methods, helper methods, the see-saw
technique. All of these are tools that are designed to get you un-stuck.

One last tool is the "Pry" debugging library. We don't teach it before this lab
because it brings in the concept of external "libraries" called "Gems." This
can get really complex with problems around "Do you have permission on your
computer to install gems" and "Did you install the gem in the wrong place and
this lab can't see it, etc." We'll cover that in more depth in a different
module.

That said, if it's available on your system, it can be a real help.

From the command line run the command `gem install pry`. If the `gem` command
returns telling you that pry was installed or that it's already installed, the
following should work for you.

Next, at the top of `hashketball.rb` put the line `require "pry"`.

Using Pry, when running RSpec tests with the `learn` command, we can pause the
execution of our Ruby code. This allows us to step into the code and play with
any available variables or methods that are in scope.

We tell Ruby where to pause by writing `binding.pry` in our code. When Ruby
sees that magic word, it will stop execution and hand things over to a REPL
called Pry. It's there that we can do the inspection.

Let's inspect what our `num_points_scored` works with:

```ruby
def num_points_scored(player_name)
  binding.pry
  game_hash.each do |location, team_data|
    #are you ABSOLUTELY SURE what 'location' and 'team data' are? use binding.pry to find out!
    binding.pry
    team_data.each do |attribute, data|
      #are you ABSOLUTELY SURE what 'attribute' and 'team data' are? use binding.pry to find out!
      binding.pry

      #what is 'data' at each loop throughout .each block? when will the following line of code work and when will it break?
      data.each do |data_item|
          binding.pry
      end
    end
  end
end
```

At every place Ruby sees `binding.pry`, it will stop the program's execution.
While the program is stopped, you can print out variables that are in scope. At
the first `binding.pry` in the example above, you can type in `location` or
`team_data` and have those values printed out by `pry`. When you're done at the
binding, type `exit` and the code will resume running. If you're all done with
a given `pry` session `exit-program` will close Pry and return you to the
command-line.

Again, the best way to avoid needing Pry is to follow the process and only add
code by small increments. But, sometimes, when all else fails, a `binding.pry`
can help you find your way again. We'll teach you more about debugging
throughout this course and do a deeper dive on Pry specifically.

## Conclusion

This is a new frontier for you! You are now using powerful tools of Ruby 
to transform a nested data structure, that you made from non-computer-ready
data, to produce insights. You've made huge strides in becoming a really solid
developer in the procedural programming paradigm. This is a huge moment.
Celebrate it!

Believe it or not, the code that put rockets in space and mankind on the Moon
were only slight variations on this style of programming. You've learned
something really powerful!

## Resources

* [Rspec's example flag][example]
* [Working with nested Hashes in Ruby](http://www.korenlc.com/nested-arrays-hashes-loops-in-ruby/)

[example]: https://relishapp.com/rspec/rspec-core/v/2-12/docs/command-line/example-option#match-on-one-word

<p class='util--hide'>View <a href='https://learn.co/lessons/advanced-hashes-hashketball'>Hashketball</a> on Learn.co and start learning to code for free.</p>
