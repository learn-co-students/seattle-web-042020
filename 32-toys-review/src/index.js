let addToy = false;
const TOYSURL = "http://localhost:3000/toys"

document.addEventListener("DOMContentLoaded", () => {
  const toyCollection = document.getElementById("toy-collection")
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  const form = document.getElementsByClassName('add-toy-form')[0]

  // to make a post, give the Fetch a second argument of an object.
  // headers: 
  // {
  //   "Content-Type": "application/json",
  //   Accept: "application/json"
  // }

  // body: JSON.stringify({
  //   "name": "Jessie",
  //   "image": "https://vignette.wikia.nocookie.net/p__/images/8/88/Jessie_Toy_Story_3.png/revision/latest?cb=20161023024601&path-prefix=protagonist",
  //   "likes": 0
  // })

  form.addEventListener('submit', function (event) {
    event.preventDefault()

    let name = event.target.name.value
    // ^^ grabs user input, saves to variable
    event.target.name.value = ''
    // ^^ clears the form itself, which users like

    let image = event.target.colton.value
    event.target.colton.value = ''

    let configObject = {
      method: "POST",
      headers: {
        "Content-Type": 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({"name":name, "image":image, "likes": 0})
    }

    fetch(TOYSURL, configObject)
    .then(response=>response.json())
    .then(json=>buildToyCard(json))
  })

  // pre-existing code
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
  // pre-existing code above

  function buildToyCard(toy) {
    let newToy = document.createElement('div')
    newToy.className = 'card'
    let toyName = document.createElement('h2')
    toyName.textContent = toy["name"]

    let likes = document.createElement('p')
    likes.textContent = `Likes: ${toy.likes}`

    let image = document.createElement('img')
    image.src = toy.image
    image.className = "toy-avatar"

    let btn = document.createElement('button')
    btn.className = 'like-btn'
    btn.innerText = 'Like <3'

    newToy.appendChild(toyName)
    newToy.appendChild(likes)
    newToy.appendChild(image)
    newToy.appendChild(btn)

    toyCollection.appendChild(newToy)
  }

  function fetchToys() {
    fetch(TOYSURL)
      .then(response => response.json())
      .then(json => {
        json.forEach(toy => {
          buildToyCard(toy)
        })
        // make func to add each toy
      })
  }



  fetchToys()
});



// function cl(input){
//   console.log(input)
// }


