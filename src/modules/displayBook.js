const displayBook = () => {
  const booklist = document.querySelector('.booklist');
  let bookArray = [];
  if (localStorage.getItem('story')) {
    bookArray = JSON.parse(localStorage.getItem('story'));
  }

  let content = '';
  if (bookArray.length > 0) {
    bookArray.forEach((element) => {
      content += `<li>${element.title} ${element.author} <button id=${element.id}>remove</button></li>`;
    });
    booklist.innerHTML = content;
  }

  const children = booklist.childNodes;
  for (let i = 0; i < children.length; i++) {
    const button = document.getElementById(`${i}`);

    button.addEventListener('click', (e) => {
      const id = e.target.id * 1;
      remove(id);
      button.parentNode.remove();
      booklist.innerHTML=''
      displayBook()
    });
  }

  const remove = (id) => {
    const book = bookArray.filter((b) => b.id !== id);
    console.log(book);
    if (book.length > 0) {
      for (let i = 0; i < book.length; i++) {
        book[i].id = i;
      }
    }
    localStorage.setItem('story', JSON.stringify(book));
  };

  // button.addEventListener('click', (e) => {
  //   const button = document.getElementById(`${element.id}`);
  //   const block = bookArray.filter(b=> b.id === e.target.id);
  //   localStorage.setItem('story', JSON.stringify(block))
  // });
};

export default displayBook;