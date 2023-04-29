import './index.css';
import { DateTime } from 'luxon';
import navigation from './modules/navigation';
import books from './modules/books';
import displayBook from './modules/displayBook';

displayBook();
navigation();
books();

const timeContent = document.getElementById('time');
timeContent.textContent = DateTime.now().toISO();