import wickedLocalImg from '../img/wicked-local.jpg';
import silverwareIcon from '../img/silverware.svg';
import storefrontIcon from '../img/storefront.svg';

import { domClear } from '../utility';


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

    const para1 = document.createElement('p');
    para1.textContent = 'The LaBarba family introduced to the public some of the area\'s finest pizza. Prepared from an original recipe from Abruzzo, Italy, Nick\'s Pizza\'s crust is unique: a medium sized thickness cooked in large rectangular pizza pans.';
    const para2 = document.createElement('p');
    para2.textContent = 'The combination of Nick\'s tasty pizza crust, rich red sauce, blended cheese combination, and large selection of 26 tantalizing toppings, has created a loyal following from Newburyport and the surrounding region.';

    body.appendChild(img);
    body.appendChild(para1);
    body.appendChild(para2);

    return {body};
}

const cardContainer = () => {
    const cardDiv = document.createElement('div');
    cardDiv.setAttribute('class', 'card-container');

    const menuCard = card('menu-card', 'Menu', silverwareIcon);
    const aboutCard = card('about-card', 'About', storefrontIcon);

    cardDiv.appendChild(menuCard.card);
    cardDiv.appendChild(aboutCard.card);

    return {cardDiv};
}

const card = (className, headingText, iconSrc) => {
    const card = document.createElement('div');
    card.setAttribute('class', className);

    const heading = document.createElement('p');
    heading.textContent = headingText;

    const icon = new Image();
    icon.src = iconSrc;

    card.appendChild(heading);
    card.appendChild(icon);

    card.addEventListener('click', cardClicked);

    function cardClicked() {
        console.log('Card clicked!');
        const clearPage = domClear();
        clearPage.clearContentDiv();
        console.log('Page cleared.');
    }

    return {card};
}



export { newsContainer, cardContainer };