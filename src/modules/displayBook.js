let bookArray = [];
if (localStorage.getItem('story')) {
  bookArray = JSON.parse(localStorage.getItem('story'));
}

const remove = (id) => {
  const book = bookArray.filter((b) => b.id !== id);
  if (book.length > 0) {
    for (let i = 0; i < book.length; i++) {
      book[i].id = i;
    }
  }
  localStorage.setItem('story', JSON.stringify(book));
};

const displayBook = () => {
  const booklist = document.querySelector('.booklist');

  booklist.innerHTML = '';

  if (bookArray.length > 0) {
    bookArray.forEach((element) => {
      const li = document.createElement('li');
      li.classList.add('single-book');
      li.innerHTML = `${element.title} ${element.author} <button class="book-btn" id=${element.id}>remove</button>`;
      booklist.appendChild(li);

      const button = li.querySelector('button');
      button.addEventListener('click', (e) => {
        const id = e.target.id * 1;
        remove(id);
        li.remove();
      });
    });
  }
};

export default displayBook;
