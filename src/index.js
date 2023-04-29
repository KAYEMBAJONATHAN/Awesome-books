import './index.css';
import navigation from './modules/navigation';
import books from './modules/books';
import displayBook from './modules/displayBook';

const { DateTime } = require('luxon');

const timeContent = document.getElementById('time');
timeContent.textContent = DateTime.now().toISO();

displayBook();
navigation();
books();
