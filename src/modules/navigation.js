const navigation = () => {
const listLink = document.getElementById('list');
const addLink = document.getElementById('add');
const contactLink = document.getElementById('contact');
const formSection = document.querySelector('.form-control');
const contact = document.querySelector('.contact');
const booklist = document.querySelector('.booklist');

listLink.addEventListener('click', () => {
  booklist.style.display = 'block';
  formSection.style.display = 'none';
  contact.style.display = 'none';
});

addLink.addEventListener('click', () => {
  booklist.style.display = 'none';
  formSection.style.display = 'block';
  contact.style.display = 'none';
});

contactLink.addEventListener('click', () => {
  booklist.style.display = 'none';
  formSection.style.display = 'none';
  contact.style.display = 'block';
});
}
export default navigation;
