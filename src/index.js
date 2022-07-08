import {newsContainer} from './pages/home.js';
import './css/styles.css';

const contentContainer = document.getElementById('content');

const newsSection = newsContainer();

contentContainer.appendChild(newsSection.newsDiv);

console.log('Execution complete.');


