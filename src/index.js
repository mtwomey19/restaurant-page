import { homeContainer } from './pages/home.js';

import './css/about.css';
import './css/home.css';
import './css/menu.css';
import './css/nav.css';

const contentContainer = document.getElementById('content');

const home = homeContainer();

contentContainer.appendChild(home.homeWindow);