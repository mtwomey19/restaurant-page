import pizzaIcon from '../img/pizza.svg';
import saladIcon from '../img/salad.svg';
import drinkIcon from '../img/drink.svg';

const menuContainer = () => {
    const menuWindow = document.createElement('div');
    menuWindow.setAttribute('class', 'menu-container');
    const header = document.createElement('h1');
    header.textContent = 'Menu';

    const pizzaContainer = menuDiv('pizza-container', 'Pizza', pizzaIcon);
    const saladContainer = menuDiv('salad-container', 'Salad', saladIcon);
    const drinkContainer = menuDiv('drink-container', 'Drinks', drinkIcon);

    menuWindow.appendChild(header);
    menuWindow.appendChild(pizzaContainer.div);
    menuWindow.appendChild(saladContainer.div);
    menuWindow.appendChild(drinkContainer.div);

    return {menuWindow};
}

const menuDiv = (id, headingText, iconSrc) => {
    const div = document.createElement('div');
    div.setAttribute('class', 'menu-item');
    div.setAttribute('id', id);

    const heading = document.createElement('p');
    heading.textContent = headingText;

    const icon = new Image();
    icon.src = iconSrc;

    div.appendChild(heading);
    div.appendChild(icon);

    return {div};
}

export { menuContainer };