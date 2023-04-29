import './index.css';
import navigation from './modules/navigation.js';
import books from './modules/books.js';
import displayBook from './modules/displayBook.js';

const { DateTime } = require('luxon');

const timeContent = document.getElementById('time');
timeContent.textContent = DateTime.now().toISO();

displayBook();
navigation();
books();
