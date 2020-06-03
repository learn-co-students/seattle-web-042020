document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#dinner").style.display = "none";
  colorizeList();
  const myButton = document.querySelector(".btn-info");
  //   console.log(myButton);
  //   myButton.addEventListener("click", function () {
  //     console.log("You clicked a button");
  //     console.log("_______");
  //   });
  myButton.addEventListener("click", function (event) {
    console.log(event);
    document.querySelector("#dinner").style.display = "block";
  });

  //   myButton.addEventListener("mouseleave", function () {
  //     document.querySelector("#dinner").style.display = "none";
  //   });

  document
    .getElementById("new-food-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      console.log(event);
      let newFood = event.target["new-food"].value;
      addNewFood(newFood);
      event.target["new-food"].value = "";
    });
});

function addNewFood(food) {
  const newFoodListItem = document.createElement("li");
  newFoodListItem.textContent = food;
  document.querySelector("#dinner").appendChild(newFoodListItem);
  colorizeList();
}

function colorizeList() {
  const list = document.querySelectorAll("li");
  list.forEach(function (listItem) {
    if (listItem.style.color == "" && listItem.textContent.includes("Cake")) {
      listItem.style.color = "red";
    }
  });
}
