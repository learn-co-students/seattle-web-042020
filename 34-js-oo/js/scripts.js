// function Coffee(name) {
//   this.name = name
// }
// Coffee.prototype.getName = function() {
//   return this.name
// }

//encapsulation
//abstraction
//inheritance
//polymorphism

class Beverage {
  constructor(name, brand) {
    this.#name = name;
    this.brand = brand;
    Beverage.all.push(this)
  }
  #name = ""
  static all = [];
  static getAll = () => {
    return Beverage.all
  }
  getName = function () {
    return this.#name;
  };
  // setName = (newName) => {
  //   this.#name = newName;
  // };
}

class Coffee extends Beverage {
  constructor(name, roast, brand) {
    super(name, brand)
    this.roast = roast;
    this.save();
  }
  save = () => {
    Coffee.all.push(this);
  };

  static all = [];
  static getAll = () => {
    return Coffee.all;
  };

  //publishes an li, accepts a parent node as an argument
  publish = (parent) => {
    const newCoffee = document.createElement("li");
    newCoffee.textContent = this.getName();
    parent.appendChild(newCoffee);
  };
}

let darkSide = new Coffee("Dark Side Dark Roast", "dark", "Vader Coffee");
let medium = new Coffee("Mos Eisley Medium", "medium", "cantina blends");
let jedi = new Coffee("Jedi Iced Tea", "light", "starbucks");
let madJedi = new Coffee(
  "Luke is Mad at Yoda for Stealing his snacks",
  "dark",
  "starbucks"
);
let water = new Beverage("Aquafina", "coke")

document.addEventListener("DOMContentLoaded", () => {
  for (let coffee of Coffee.getAll()) {
    console.log(coffee.#name)
    coffee.publish(document.getElementById("coffee"));
  }
  // Coffee.getAll()[0].publish(document.getElementById("coffee"));
});
