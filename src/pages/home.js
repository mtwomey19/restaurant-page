import wickedLocalImg from '../img/wicked-local.jpg';
import silverwareIcon from '../img/silverware.svg';
import storefrontIcon from '../img/storefront.svg';

import { domClear } from '../utility.js';
import { hoursCard } from './cards/hours.js';
import { contactCard } from './cards/contact.js';
import { menuContainer } from './menu.js';
import { aboutContainer } from './about.js';

const homeContainer = () => {
    const homeWindow = document.createElement('div');
    homeWindow.setAttribute('id', 'home-container');

    const newsSection = newsContainer();
    const cardSection = cardContainer();

    homeWindow.appendChild(newsSection.newsDiv);
    homeWindow.appendChild(cardSection.cardDiv);

    return {homeWindow};
}

const newsContainer = () => {
    const newsDiv = document.createElement('div');
    newsDiv.setAttribute('class', 'news-container');

    const headline = newsHeadline();
    const body = newsBody();

    newsDiv.appendChild(headline.headline);
    newsDiv.appendChild(body.body);

    return {newsDiv};
}

const newsHeadline = () => {
    const headline = document.createElement('p');
    headline.setAttribute('class', 'news-headline');
    headline.textContent = 'Thank You For Voting Us #1 Pizza In Newburyport';

    return {headline};
}

const newsBody = () => {
    const body = document.createElement('div');
    body.setAttribute('class', 'news-body');

    const img = new Image();
    img.src = wickedLocalImg;

    const paraDiv = document.createElement('div');
    paraDiv.setAttribute('class', 'news-para-div');

    const para1 = document.createElement('p');
    para1.textContent = 'The LaBarba family introduced to the public some of the area\'s finest pizza. Prepared from an original recipe from Abruzzo, Italy, Nick\'s Pizza\'s crust is unique: a medium sized thickness cooked in large rectangular pizza pans.';
    const para2 = document.createElement('p');
    para2.textContent = 'The combination of Nick\'s tasty pizza crust, rich red sauce, blended cheese combination, and large selection of 26 tantalizing toppings, has created a loyal following from Newburyport and the surrounding region.';

    paraDiv.appendChild(para1);
    paraDiv.appendChild(para2);

    body.appendChild(img);
    body.appendChild(paraDiv);

    return {body};
}

const cardContainer = () => {
    const cardDiv = document.createElement('div');
    cardDiv.setAttribute('class', 'card-container');

    const menuCard = topCard('menu-card', 'Menu', silverwareIcon);
    const aboutCard = topCard('about-card', 'About', storefrontIcon);

    const hCard = hoursCard();
    const cCard = contactCard();

    cardDiv.appendChild(menuCard.card);
    cardDiv.appendChild(aboutCard.card);
    cardDiv.appendChild(hCard.card);
    cardDiv.appendChild(cCard.card);

    return {cardDiv};
}

const topCard = (id, headingText, iconSrc) => {
    const card = document.createElement('div');
    card.setAttribute('class', 'card');
    card.setAttribute('id', id);

    const heading = document.createElement('p');
    heading.textContent = headingText;

    const icon = new Image();
    icon.src = iconSrc;

    card.appendChild(heading);
    card.appendChild(icon);

    card.addEventListener('click', cardClicked);
    card.addEventListener('mouseover', () => heading.style.textDecoration = 'underline');
    card.addEventListener('mouseout', () => heading.style.textDecoration = 'none');

    function cardClicked() {
        const clear = domClear();
        clear.clearContentDiv('content');
        const contentDiv = document.getElementById('content');
        if (id === 'menu-card') {
            const menuPage = menuContainer();
            contentDiv.append(menuPage.menuWindow);
        } else {
            const aboutPage = aboutContainer();
            contentDiv.append(aboutPage.aboutWindow);
        }
    }

    return {card};
}


export { homeContainer };