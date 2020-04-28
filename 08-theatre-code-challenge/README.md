# Object Relations Practice: Theater Edition

Any theater (or should I say *theatre*) geek knows that every performance is a unique, ephemeral snowflake of an experience.  Let's make a system to keep track of all the shows you've seen, and which venues you saw them in.

Theatre -< Performances >- Musicals

## Notes

Your goal is to build out all of the methods listed in the deliverables.

We've provided you with a console that you can use to test your code. To enter a console session, run `ruby tools/console.rb` from the command line. You'll be able to test out the methods that you write here. Take a look at that file to see how you can pre-define variables and create object instances, rather than manually doing it in every single console session.

**Remember!** This is a code challenge without tests. You cannot run `rspec` you cannot run `learn`. You'll need to create your own sample instances for testing purposes. Make sure your associations and methods work in the console before submitting.

## Deliverables

### Basic Class Methods and Properties

#### Build the following instance and class methods for `Musical`
- [ ] `Musical` should initialize with a name and a setting city
- [ ] `Musical` should respond to `Musical#name` and `Musical#setting_city`
- [ ] `Musical` should be able to change its name with an accessor, but not its setting city
- [ ] `Musical` should have a method `Musical.all` that returns all the instances of `Musical`
- [ ] `Musical` should have a method `Musical.all_introductions` that puts out a message of `"Welcome, this is {insert musical name here}, set in {insert city here}"` for each musical

#### Build the following instance and class methods for `Theater`
- [ ] `Theater` should initialize with a title and city
- [ ] `Theater` should have a method `Theater.all` method which returns all the instances of `Theater`

---

### Associations and Aggregate Methods
#### `Performance`
- [ ] `Performance` should initialize with a date (string), musical, and theater
- [ ] `Performance` should have methods `Performance#musical` and `Performance#theater` that return the `Musical` instance and `Theater` instance associated to the performance
- [ ] `Performance` should have a `Performance.all` method which returns all the instances of `Performance`
- [ ] `Performance` should have a method `Performance#hometown_setting?` that returns true if the musical is being performed in the same city where it is set.  For example, if Hairspray (set in Baltimore) was performed at the Hippodrome Theatre (in Baltimore), or if Annie (set in NYC) was performed at the Neil Simon Theatre (in NYC), that would be a "hometown setting".  However, if Hairspray was performed at the Neil Simon Theatre, or Annie was performed at the Hippodrome Theatre, that would not be a hometown setting.

#### `Musical`
- [ ] `Musical` should have a method `Musical#perform_in_theater` that takes a theater (object) and date (string) as arguments and associates the musical to that theater
- [ ] `Musical` should have a method `Musical#performances` should return an array of all that musical's performances
- [ ] `Musical` should have a method `Musical#theaters` that returns an array of all the theaters the musical performs in

#### `Theater`
- [ ] `Theater` should have a method `Theater#performances` that lists all the performances that have ever been performed in that theater
- [ ] `Theater` should have a method `Theater#musicals` that lists all the musicals that have ever been performed in that theater
