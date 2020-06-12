// class Beverage {
//   constructor(name, brand) {
//     this.#name = name;
//     this.brand = brand;
//     Beverage.all.push(this);
//   }
//   #name = "";
//   static all = [];
//   static getAll = () => {
//     return Beverage.all;
//   };
//   getName = function () {
//     return this.#name;
//   };
// }

// class Coffee extends Beverage {
//   constructor(name, roast, brand) {
//     super(name, brand);
//     this.roast = roast;
//     this.save();
//   }
//   save = () => {
//     Coffee.all.push(this);
//   };

//   static all = [];
//   static getAll = () => {
//     return Coffee.all;
//   };

//   //publishes an li, accepts a parent node as an argument
//   publish = (parent) => {
//     const newCoffee = document.createElement("li");
//     newCoffee.textContent = this.getName();
//     parent.appendChild(newCoffee);
//   };
// }
