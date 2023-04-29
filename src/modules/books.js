const formData = document.querySelector('.form-control');
const bookName = document.getElementById('name');
const bookAuthor = document.getElementById('author');
let bookArray = [];
if (localStorage.getItem('bookOfLife')) {
  bookArray = JSON.parse(localStorage.getItem('bookOfLife'));
}

formData.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(bookName.value, bookAuthor.value);
  const book = { title: bookName.value, author: bookAuthor.value };
  bookArray.push(book);
  localStorage.setItem('bookOfLife', JSON.stringify(bookArray));
  formData.reset();
});

export default books;