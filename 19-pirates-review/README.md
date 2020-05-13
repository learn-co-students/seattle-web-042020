# Sinatra Nested Forms Lab: Pirates!

## Overview

In this lab, you'll practice using nested forms in Sinatra.

## Instructions

Note: YOU DO NOT NEED A DATABASE, since we just need to keep track of the forms input long enough to display it, and not persist it.  We don't expect the pirate to be there the next time we come to their URL, but it'd be cool if they were.

1. Create two classes, a `Pirate` class and a `Ship` class. Pirates should have a name, weight, and height. You will also need a class method that returns all the pirates. The ship class should have name, type, and booty attributes, as well as a class method `.all` that returns all the ships and a class method `.clear` that deletes all ships.

2. Make a nested form (this should probably have html `<label>`s so it makes sense to a user). This form will be creating three objects (one instance of the Pirate class, and two instances of the Ship class). Remember, you'll need to build a corresponding controller action to load this page. Your form should `POST` to the route `'/pirates'`.

3. After a user clicks submit they should be taken to a page that displays all the information we just posted from the form.  You should have a page that shows the pirate you created along with their ships and all the details about the pirate and their ships.

## Deliverables

Pass the tests! You'll notice in specs that we use Capybara to fill in certain fields. It looks something like this:

```
fill_in("ship_name_1", :with => "Flying Dutchman")
fill_in("ship_type_1", :with => "ghost ship")
fill_in("ship_booty_1", :with => "gold coins")
```

The word in quotes after fill_in needs to be set as an ID in the form. This is because your ship name one and two will have the same `name` property. Capybara needs some sort of unique indentifier, so we use `id`. So something like this:

```
<input id="ship_name_1" type="text" name="pirate[ships][][name]" >
```

## Resources
* [Surreal Detective](http://surrealdetective.github.io/) - [The Nested Ruby Params Hash for Complex HTML Forms and Sinatra](http://surrealdetective.github.io/blog/2013/07/01/the-nested-ruby-params-hash-for-complex-html-forms-and-sinatra/)

* [Lab Review- Pirates](https://www.youtube.com/watch?v=kgHN11dQ3H0)

<p data-visibility='hidden'>View <a href='https://learn.co/lessons/sinatra-nested-forms' title='Sinatra Nested Forms Lab: Pirates!'>Sinatra Nested Forms Lab: Pirates!</a> on Learn.co and start learning to code for free.</p>
