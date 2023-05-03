const books = () => {
  const formData = document.querySelector('.form-control');
  const bookName = document.getElementById('name');
  const bookAuthor = document.getElementById('author');
  const  bookArray = [] || JSON.parse(localStorage.getItem('story'));
  // if (localStorage.getItem('story')) {
  //   bookArray = JSON.parse(localStorage.getItem('story'));
  // }

  formData.addEventListener('submit', (e) => {
    e.preventDefault();
    const { length } = bookArray;
    let id = 0;
    if (length > 0) {
      id = length;
    }
    const book = { title: bookName.value, author: bookAuthor.value, id };
    let data = JSON.parse(localStorage.getItem('story'));
    data.push(book)
    localStorage.setItem('story', JSON.stringify(data));
    formData.reset();
  });
};

export default books;