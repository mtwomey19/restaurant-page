import clockIcon from '../../img/clock.svg';

const hoursCard = () => {
    const card = document.createElement('div');
    card.setAttribute('class', 'card');
    card.setAttribute('id', 'hours-card');

    const heading = document.createElement('p');
    heading.textContent = 'Hours';

    const contentDiv = hoursIconDiv().div;

    card.appendChild(heading);
    card.appendChild(contentDiv);

    card.addEventListener('click', cardClicked);
    card.addEventListener('mouseover', () => heading.style.textDecoration = 'underline');
    card.addEventListener('mouseout', () => heading.style.textDecoration = 'none');

    let clickCount = 0;

    function cardClicked() {
        const contentDiv = Array.from(document.getElementsByClassName('hours-container'))[0];
        card.removeChild(contentDiv);

        if (clickCount % 2 === 0) {
            card.appendChild(hoursTimeDiv().div);
        } else {
            card.appendChild(hoursIconDiv().div);
        }
        clickCount += 1;
    }

    return {card}
}

const hoursIconDiv = () => {
    const div = document.createElement('div');
    div.setAttribute('class', 'hours-container')
    const icon = new Image();
    icon.src = clockIcon;
    div.appendChild(icon);
    
    return {div};
} 

const hoursTimeDiv = () => {
    const div = document.createElement('div');
    div.setAttribute('class', 'hours-container');

    const setDailyHours = (dayOfWeek, open, close) => {
        const day = document.createElement('p');
        day.textContent = `${dayOfWeek}: ${open} -- ${close}`;
        div.appendChild(day);
    }

    setDailyHours('Wednesday', '11:30', '9:00');
    setDailyHours('Thursday', '11:30', '9:00');
    setDailyHours('Friday', '11:30', '10:00');
    setDailyHours('Saturday', '11:30', '10:00');
    setDailyHours('Sunday', '11:30', '9:00');

    return {div};
}

export { hoursCard };