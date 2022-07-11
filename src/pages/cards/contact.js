import phoneIcon from '../../img/phone.svg';

const contactCard = () => {
    const card = document.createElement('div');
    card.setAttribute('class', 'card');
    card.setAttribute('id', 'contact-card');

    const heading = document.createElement('p');
    heading.textContent = 'Contact';

    const contentDiv = contactIconDiv().div;

    card.appendChild(heading);
    card.appendChild(contentDiv);

    card.addEventListener('click', cardClicked);
    card.addEventListener('mouseover', () => heading.style.textDecoration = 'underline');
    card.addEventListener('mouseout', () => heading.style.textDecoration = 'none');

    let clickCount = 0;

    function cardClicked() {
        const contentDiv = Array.from(document.getElementsByClassName('contact-container'))[0];
        card.removeChild(contentDiv);

        if (clickCount % 2 === 0) {
            card.appendChild(contactInfoDiv().div);
        } else {
            card.appendChild(contactIconDiv().div);
        }
        clickCount += 1;
    }

    return {card}
}

const contactIconDiv = () => {
    const div = document.createElement('div');
    div.setAttribute('class', 'contact-container')
    const icon = new Image();
    icon.src = phoneIcon;
    div.appendChild(icon);
    
    return {div};
} 

const contactInfoDiv = () => {
    const div = document.createElement('div');
    div.setAttribute('class', 'contact-container');

    const phone = document.createElement('p');
    phone.textContent = 'Phone: (978) 465-9853';
    div.appendChild(phone);

    const email = document.createElement('p');
    email.textContent = 'Email: nickspizzanewburyport@comcast.net';
    div.appendChild(email);

    return {div};
}

export { contactCard };