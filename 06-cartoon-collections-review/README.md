# Cartoon Collections

## Learning Goals

- Get familiar iterating through arrays with enumerator methods like
  `.collect` or `.map`, `.any?`, and `.select`.
- Build methods and control their return values using blocks.

## Introduction

We've practiced using `count` and `each` in previous lessons. When discussing
`each`, we said that it isn't a very expressive Enumerable. When working with an
array, `each` returns the original, unaltered array.

In this lesson, we're going practice working with Enumerables that return a
_new_ array or value.

## Instructions

There are four methods to complete in this lab:

1. `square_array`
2. `summon_captain_planet`
3. `long_planeteer_calls`
4. `select_calls`

The first method is one we've seen before while learning `while` loops, so let's
walk through it for a quick review. This method takes in an array of numbers and
returns a _new_ array of the **square** of each of those numbers. Using `while`
loops, we might solve it this way:

```rb
def square_array(array)
  new_array = []
  index = 0

  while index < array.length do
    new_array << array[index] * array[index]
    index += 1
  end

  new_array
end

square_array([1,2,3,4])
 # => [1, 4, 9, 16]
```

We iterate over the array, and for each element, we push the result of that
element multiplied by itself into a new array. The new array is then returned at
the end.

Now, we _could_ use `each` in our solution, replacing the `while` loop, but we
will still need an array to push values into:

```rb
def square_array(array)
  new_array = []
  array.each do |element|
    new_array << element * element
  end
  new_array
end

square_array([1,2,3,4])
 # => [1, 4, 9, 16]
```

Needing to work on one collection and return another collection like this sounds
very much like the behavior of [`map`][map]. `map` enumerates over an array,
returning a new array. The new array is composed of the return values from the
block that we provide. In this way, `map` takes care of the work of pushing values
into a new array.

```rb
def square_array(array)
  array.map do |element|
    element * element
  end
end
```

The return value of the `map` method _is_ the new array. All three of the above
examples will pass the test for the first method. However, using `map` is both
more succinct, _and_ more expressive.

Some of the methods in this lab use Enumerables we haven't talked much about.
Use what you've learned about Enumerables in general along with the
[official documentation][enumerables] to solve this lab. You can absolutely
implement all of these methods using `while` loops or `each`, but there are specific
Enumerables that are great for each of them.

If you are having trouble conceptualizing solutions using more specific
Enumerables, try getting a method to pass using a loop or `each`. This will help
identify the work that needs to be done and make it clear what sort of value(s)
need to be returned. Different Enumerables return different things - `map` will
always return a new array that is the same length as the original, but other
Enumerables like `find` will return a single value.

```rb
[1,2,3].find { |num| num.even? } # => 2
```

> **Note:** The remainder of the methods in this lab are Captain Planet themed
> because we like Captain Planet. ¯\_(ツ)_/¯

### Method 2 — `summon_captain_planet`

The `summon_captain_planet` method takes in an array of strings - the words
needed to summon Captain Planet. This method should return a new array of the
same words, but each string should start with a capitalized letter and end with
an exclamation point (`!`). For example, given the following array:

```rb
calls = ["earth", "wind", "fire", "water", "heart"]
```

If we were to run `summon_captain_planet(calls)` we would
expect the following in return:

```rb
["Earth!", "Wind!", "Fire!", "Water!", "Heart!"]
```

While we're specifically trying to help emphasize our Planeteer calls, this
method should work with any array of strings provided.

```rb
array = ["hello", "how are you?"]

summon_captain_planet(array)
 # => ["Hello!", "How are you?!"]
```

### Method 3 - `long_planeteer_calls`

The `long_planeteer_calls` method takes in an array of strings. This time, the
method should check every string in the array to see if _any_ string is longer
than four characters in length, returning `true` or `false`. The standard Planeteer
calls would return `true` when passed into this method because `"earth"`,
`"water"`, and `"heart"` all have five characters:

```rb
calls = ["earth", "wind", "fire", "water", "heart"]

long_planeteer_calls(calls)
 # => true
```

But an array of strings not greater than four characters will return `false`:

```rb
short_calls = ["wind", "fire"]

long_planeteer_calls(short_calls)
 # => false
```

### Method 4 - `find_valid_calls`

The `find_valid_calls` method takes an array of strings like the last two methods.
These strings may or may not be valid Planeteer calls, and we would like to know
what call, if any, is present in the provided array. Fortunately, we know what
calls are valid:

```rb
valid_calls = ["Earth!", "Wind!", "Fire!", "Water!", "Heart!"]
```

If any of these strings are present in the passed in array, `find_valid_calls`
will return the first valid call found.

```rb
mixed_calls = ["Cloud!", "earth", "Wind!", "cat", "Heart!"]

find_valid_calls(mixed_calls)
 # => "Wind!"
```

Note that even though there is a second valid string, `"Heart!"`, all this
method should return is the _first_ valid string found.

![captain-planet](https://s3-us-west-2.amazonaws.com/web-dev-readme-photos/cartoon-collections/captain-planet.jpeg)

## Conclusion

Enumerables allow for a concise way to perform work related to a collection of
values. With them, we can draw useful insights out of data, distilling a
collection down into a single value. Sometimes, we might want to transform data
- reorganize it into a more useful format. We can do all of these things with
Enumerables.

We encourage you to expand your vocabulary and check out the Enumerables that we
are not able to practice. Methods like `select` and `uniq` can be handy as we
dive into more complex data structures.

## Resources

- [Enumerables][enumerables]
- [`map`][map]
- [`any?`][any]
- [`find`][find]
- [`include?`][include]

[map]: https://ruby-doc.org/core-2.7.0/Enumerable.html#method-i-map
[enumerables]: https://ruby-doc.org/core-2.7.0/Enumerable.html
[any]: https://ruby-doc.org/core-2.7.0/Enumerable.html#method-i-any-3F
[find]: https://ruby-doc.org/core-2.7.0/Enumerable.html#method-i-find
[include]: https://ruby-doc.org/core-2.7.0/Enumerable.html#method-i-include-3F


--- 
- binding.pry -> how to use
- Getting more practice with Enumerables
- What is `self` and how does it work and how can I use it.
- how do I go from a deliverable or an error and figure out rspec tests and what they want.

