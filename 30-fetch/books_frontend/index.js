function addBook(book) {
  const book_list = document.querySelector("#book-list");
  const div = makeBookCard(book);
  book_list.appendChild(div);
}

function makeBookCard(book) {
  const div = document.createElement("div");
  div.className = "card";

  const img = document.createElement("img");
  img.src = book.img;

  const h3 = document.createElement("h3");
  h3.textContent = book.title;

  const p = document.createElement("p");
  p.textContent = book.author;

  //add all elements to div
  div.appendChild(img);
  div.appendChild(h3);
  div.appendChild(p);

  return div;
}

// let somethingElse = data => data * 2

// function somethingElse(data) {
//   return data * 2
// }

function showBooks(bookArray) {
  bookArray.map((book) => {
    addBook(book);
  });
}

const fetchBooks = () => {
  fetch("http://localhost:3000/books")
    .then((resp) => resp.json())
    .then((json) => showBooks(json))
};

fetchBooks();
// showBooks();
