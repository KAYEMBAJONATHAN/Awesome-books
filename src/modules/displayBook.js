const booklist = document.querySelector('.booklist');
let bookArray = [];
if (localStorage.getItem('bookOfLife')) {
  bookArray = JSON.parse(localStorage.getItem('bookOfLife')); console.log(bookArray);
}

let content = '';
if (bookArray.length > 0) {
  bookArray.forEach((element) => {
    content += `<li>${element.title} ${element.author} <span>remove</span></li>`;
  });
  booklist.innerHTML = content;
  console.log(bookArray);
}

export default displayBook;