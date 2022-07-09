import { newsContainer, cardContainer } from './pages/home.js';
import './css/home.css';

const contentContainer = document.getElementById('content');

const newsSection = newsContainer();
const cardSection = cardContainer();

contentContainer.appendChild(newsSection.newsDiv);
contentContainer.appendChild(cardSection.cardDiv);