let EDITED_CARD = null;

function addBook(book) {
  const book_list = document.querySelector("#book-list");
  const div = makeBookCard(book);
  book_list.appendChild(div);
}

function makeBookCard(book) {
  const div = document.createElement("div");
  div.className = "card";
  div.id = `${book.id}-card`;

  const img = document.createElement("img");
  img.src = book.img;

  const h3 = document.createElement("h3");
  h3.textContent = book.title;

  const p = document.createElement("p");
  p.textContent = book.author;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete Book";
  deleteButton.addEventListener("click", () => {
    deleteBook(book);
    div.remove();
  });
  const editButton = document.createElement("button");
  editButton.textContent = "Edit Book";
  editButton.addEventListener("click", () => {
    editBook(book);
    EDITED_CARD = div;
  });

  //add all elements to div
  div.appendChild(img);
  div.appendChild(h3);
  div.appendChild(p);
  div.appendChild(editButton);
  div.appendChild(deleteButton);

  return div;
}

const editBook = (book) => {
  document.querySelector("#new-book-form").style.display = "none";
  const editForm = document.querySelector("#edit-form");
  editForm.style.display = "block";
  editForm.title.value = book.title;
  editForm.author.value = book.author;
  editForm.cover.value = book.img;
  editForm.bookId.value = book.id;
};

function showBooks(bookArray) {
  bookArray.map((book) => {
    addBook(book);
  });
}

//GET provide us with something, no changes, a read-only action
const getBooks = () => {
  fetch("http://localhost:3000/books")
    .then((resp) => resp.json())
    .then((json) => showBooks(json));
};

const postBook = (book) => {
  fetch("http://localhost:3000/books", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(book),
  })
    .then((resp) => {
      // if (resp.status == 201) {
      return resp.json();
      // } else {
      //   console.log("ERROR")
      // }
    })
    .then((json) => {
      if (json.id) {
        addBook(json);
      }
    });
};

const deleteBook = (book) => {
  fetch(`http://localhost:3000/books/${book.id}`, {
    method: "DELETE",
  });
};

const updateBook = (book) => {
  fetch(`http://localhost:3000/books/${book.id}`, {
    method: "PUT", //PATCH require that you're conditionint the body (below) to conatin on the the relevant info
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(book),
  })
    .then((res) => res.json())
    .then((json) => {
      document
        .querySelector("#book-list")
        .replaceChild(makeBookCard(json), EDITED_CARD);
      document.querySelector("#new-book-form").style.display = "block";
      document.querySelector("#edit-form").style.display = "none";
    });
};

document.addEventListener("DOMContentLoaded", () => {


  document.querySelector("#selectThing").addEventListener("change", (e) => {
    console.log(e.target.value)
  })


  getBooks();
  document.getElementById("new-book-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const { title, author, cover } = e.target;
    const newBook = {
      title: title.value,
      author: author.value,
      img: cover.value,
    };
    postBook(newBook);
  });
  document.getElementById("edit-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const author = e.target.author.value;
    const img = e.target.cover.value;
    const id = e.target.bookId.value;
    const editedBook = { title, author, img, id };
    updateBook(editedBook);
  });
});
