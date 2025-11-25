const addBookForm = document.getElementById("addBookForm");
const titleInput = document.getElementById("titleInput");
const authorInput = document.getElementById("authorInput");
const bookSearch = document.getElementById("bookSearch");
const listGroup = document.querySelector(".list-group");
const clearButton = document.getElementById("clearButton");

addBookForm.addEventListener("submit", addBook);
listGroup.addEventListener("click", deleteBook);
clearButton.addEventListener("click", clearAllBooks);
bookSearch.addEventListener("keyup", filterBooks);

loadBooksToUI();

function addBook(e) {
  e.preventDefault();
  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  if (!title || !author) {
    alert("Lütfen tüm alanları doldurun!");
    return;
  }
  const newBook = { title, author };
  addBookToUI(newBook);
  addBookToStorage(newBook);
  addBookForm.reset();
}
function addBookToUI(book) {
  const li = document.createElement("li");
  li.className =
    "list-group-item d-flex justify-content-between align-items-center";
  li.innerHTML = `
      <div>
        <strong>${book.title}</strong> - ${book.author} 
      </div>
      <a href="#" class="delete-item text-danger">
        <i class="fa fa-remove"></i>
      </a>
    `;

  listGroup.appendChild(li);
}
function addBookToStorage(book) {
  const books = getBooksFromStorage();
  books.push(book);
  localStorage.setItem("books", JSON.stringify(books));
}
function getBooksFromStorage() {
  const books = localStorage.getItem("books");
  return books ? JSON.parse(books) : [];
}
function loadBooksToUI() {
  const books = getBooksFromStorage();
  books.forEach((book) => addBookToUI(book));
}
function deleteBook(e) {
  if (e.target.classList.contains("fa-remove")) {
    const li = e.target.closest("li");
    const title = li.querySelector("strong").textContent;
    li.remove();
    deleteBookFromStorage(title);
  }
}
function deleteBookFromStorage(title) {
  let books = getBooksFromStorage();
  books = books.filter((book) => book.title !== title);
  localStorage.setItem("books", JSON.stringify(books));
}
function clearAllBooks(e) {
  e.preventDefault();
  if (confirm("Tüm kitapları silmek istediğinize emin misiniz?")) {
    while (listGroup.firstChild) {
      listGroup.removeChild(listGroup.firstChild);
    }
    localStorage.removeItem("books");
  }
}
function filterBooks(e) {
  const filterValue = e.target.value.toLowerCase();
  const items = document.querySelectorAll(".list-group-item");
  items.forEach((item) => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(filterValue) ? "block" : "none";
  });
}
