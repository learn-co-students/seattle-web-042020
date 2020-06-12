let allCoffee = [];
let current = 0;

///pureFunction
function add(a, b) {
  return a + b;
}

function renderCoffee(coffee) {
  const newCoffee = document.createElement("li");
  newCoffee.textContent = coffee.name;
  document.querySelector("#coffee").appendChild(newCoffee);
  return coffee;
}

function renameCoffee(coffee, newName) {
  // coffee.name = newName;
  // return Object.assign({}, coffee, {name: newName});
  return { name: newName, ...coffee };
}

const changeColor = (newColor) => {
  // console.log(this)
  return function () {
    console.log(this);
    this.style.backgroundColor = newColor;
  };
};

let myData = { name: "John", id: 1 };

function changeName(newName) {
  //scope here, ie. 'this' is the window
  // return () => { //this arrow function inherits the 'this' from the line above
  return function () {
    return { ...this, name: newName };
  };
}

console.log(changeName("tim").bind(myData)()); //IIFE
// const nameSomethingTara = changeName("tara").bind({id :2}); //IIFE
// console.lognameSomethingTara())(

const changeNameToBobby = changeName("Bobby");
console.log(changeNameToBobby.bind({ id: 3, favColor: "orange", height:"123cm" })());

function sayThis() {
  console.log(this);
}
sayThis = sayThis.bind(myData);

document.addEventListener("DOMContentLoaded", () => {
  for (let button of document.querySelectorAll(".color-button")) {
    button.addEventListener("click", changeColor(button.value));
  }

  fetch("http://localhost:3000/coffee")
    .then((res) => res.json())
    .then((json) => {
      allCoffee = json;
      allCoffee.forEach((coffee) => {
        renderCoffee(renameCoffee(coffee, "updatedName"));
      });
    });
});
