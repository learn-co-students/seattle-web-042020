# Intro to Object Orientation 🧱

## A (Really Basic Dog) 🧩

Here is a naive implementation of a dog in Ruby using only a hash which stores key-value pairs.

```ruby
dog = {"name": "Fido", "breed": "Border Collie"}
dog1 = {"name": "Bob", "breed": "Golden Retriever"}
```

## Objects 📦

### The Concept of an Object 🤔

- `object` in programming domain
  - OOP: Organize code like real objects
  - Object = data + methods
- Explain the difference between a class and an instance
  - Class:Instance as Blueprint:House
  - Class:Instance as Factory:Car
- An instance of a class is an object

### Objects in Ruby 💎

- Just about everything in Ruby is an object!
  - `#class`
  - A class is an object, too!
- Methods are messages to objects
  - Methods: behaviors an object performs upon its internal data and other code objects

### Creating Objects in Ruby 🏭

- **Instantiate an instance of the class `Dog`**
  - TitleCase classes, e.g. `class ClassName`
  - `#new`
- Pass arguments to `new` by defining an `#initialize` method in class
  - Ruby interpreter looks for `#initialize` of `class`
  - Set initial object attributes in `#initialize`
    - `name`
  - ⚠️ *How could I set the name of a Dog?*
- Instance methods
  - Methods that can be called on an instance
  - `def` & `end` as before, but now inside a class!
  - **Write method to print name of the dog**
  - **Write method to set name of the dog**
  - Can only be used in object instance
  - "Getter" and "setter" methods
    - "Getters and setters" read or write data encapsulated by an object
    - `#attr_` is family of helper methods for classes which defines "getter" and "setter" methods for instances
    - Define attribute readers and writers using `attr_` macros
    - ⚠️ *For `name` and `breed`, do we want to use `attr_reader`, `attr_writer`, or `attr_accessor`?*
- Class methods
  - Methods that can be called on a class
  - `def self.class_method`
  - **Write method to remember all instances of `Dog`.**
  - Call methods on the implicit or explicit `self`
    - self is the "current object" and the default receiver of messages (method calls)
    - `binding.pry` inside class, instance methods to see what self is!
  - ⚠️ *What will `self` be at x, y, z?*
- Variable scope
  - Variables and methods are encapsulated depending on how and where they're defined
  - `vanilla` => local variable
  - `@vanilla` => instance variable
  - `@@vanilla` => class variable
  - `$vanilla` => global variable
- Reminder: stay Responsible, stay DRY
  - Code smells not quite nice/When used more than thrice
  - Methods should be about 5 lines long
  - Classes should be less than 100 lines long
