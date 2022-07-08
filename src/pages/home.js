import Picture from '../img/wicked-local.jpg'


const newsContainer = () => {
    const newsDiv = document.createElement('div');
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
    img.src = Picture;

    const para1 = document.createElement('p');
    para1.textContent = 'The LaBarba family introduced to the public some of the area\'s finest pizza. Prepared from an original recipe from Abruzzo, Italy, Nick\'s Pizza\'s crust is unique: a medium sized thickness cooked in large rectangular pizza pans.';
    const para2 = document.createElement('p');
    para2.textContent = 'The combination of Nick\'s tasty pizza crust, rich red sauce, blended cheese combination, and large selection of 26 tantalizing toppings, has created a loyal following from Newburyport and the surrounding region.';

    body.appendChild(img);
    body.appendChild(para1);
    body.appendChild(para2);

    return {body};
}

export {newsContainer};