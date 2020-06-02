document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM is Loaded");

  console.log("Hello world");
  // let myName = "john"

  const list = document.querySelectorAll("li");

  list.forEach(function (listItem) {
    // debugger;
    console.dir(listItem)
    if (listItem.style.color == "" && listItem.textContent.includes("Cake")) {
      listItem.style.color = "red";
    }
  });
});
