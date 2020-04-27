# Object Relations Practice: Sorting Hat Edition

_I own no right to this idea. Just in case there are some people out there looking at this._

Congrats witches/wizards of Hogwarts, you have made it to the first day of Hogwarts. Traveling by the boats getting to the see the wonderful and magnigicent Hogwarts. It's time to get you sorted into your houses. Use the guidelines below to create a app that will allow new students coming in to be sorted.

The relationship is defined below:

![image info](uml_housing)

##### Relationship:

Houses -< Sortings >- Students

## Notes

Your goal is to build out all of the methods listed in the deliverables.

We've provided you with a console that you can use to test your code. To enter a console session, run `ruby tools/console.rb` from the command line. You'll be able to test out the methods that you write here. Take a look at that file to see how you can pre-define variables and create object instances, rather than manually doing it in every single console session.

**Remember!** This is a code challenge without tests. You cannot run `rspec` you cannot run `learn`. You'll need to create your own sample instances for testing purposes. Make sure your associations and methods work in the console before submitting.

## Deliverables

### Basic Class Methods and Properties

#### Build the following instance and class methods for `Student`

- [ ] `Student` should initialize with a name and a home_city and spell_count
- [ ] `Student` should respond to `Student#name` and `Student#home_city`, and '#spell_count'
- [ ] `Student` should be able to change its name and spell count with an accessor, but not its home city
- [ ] `Student` should have a method `Student.all` that returns all the instances of `Student`
- [ ] `Student` should have a method `Student.all_introductions` that puts out a message of `"Welcome, this is {insert Student name here}, from {insert city here}"` for each Student

#### Build the following instance and class methods for `House`

- [ ] `House` should initialize with a name and ghost,motto, and points
- [ ] `House` should not be able to change it's name, ghost or motto.
- [ ] `House` should be able up update their points.
- [ ] `House` should have a method `House.all` method which returns all the instances of `House`
- [ ] `House` should have a method `House.welcome` method which outputs a description of the houses " Welcome All! We have { insert house name }, whose house ghost is {insert ghost name}. Our motto is { insert motto } and we have { insert points } points!!.

---

### Associations and Aggregate Methods

#### `Sorting`

- [ ] `Sorting` should initialize with a students (object) and house (object).
- [ ] `Sorting` should have methods `Sorting#student` and `Sorting#house` that return the `Student` instance and `House` instance associated to the Sorting
- [ ] `Sorting` should have a `Sorting.all` method which returns all the instances of `Sorting`

#### `Student`

- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`


- [ ] `Student` should have a method `Student#get_sorted` that takes a house (object) as arguments and associates the student to that house
- [ ] `Student` should have a method `Student#classmates` should return an array of all the students also in the same house.
- [ ] `Student` should have a method `Student#sortings` that returns all the sortings that have have happened for their house

#### `House`

- [ ] `House` should have a method `House#sortings` that lists all the sortings that have ever been sorted at Hogwarts
- [ ] `House` should have a method `House#students` that lists all the students that have ever been sortings in that house.
