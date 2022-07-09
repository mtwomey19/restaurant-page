import pizzaIcon from '../img/pizza.svg';

const menuContainer = () => {
    const menuDiv = document.createElement('div');
    menuDiv.setAttribute('class', 'menu-container');
    const header = document.createElement('h1');
    header.textContent = 'Menu';

    const pizzaContainer = pizzaDiv();

    menuDiv.appendChild(header);
    menuDiv.appendChild(pizzaContainer.div);

    return {menuDiv};
}

const pizzaDiv = () => {
    const div = document.createElement('div');
    div.setAttribute('class', 'menu-item');
    div.setAttribute('id', 'pizza-item');

    const heading = document.createElement('p');
    heading.textContent = 'Pizza';

    const icon = new Image();
    icon.src = pizzaIcon;

    div.appendChild(heading);
    div.appendChild(icon);

    return {div};
}

export { menuContainer };