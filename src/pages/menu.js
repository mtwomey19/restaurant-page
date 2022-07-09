const menuContainer = () => {
    const menuDiv = document.createElement('div');
    const header = document.createElement('h1');
    header.textContent = 'Menu';

    menuDiv.appendChild(header);

    return {menuDiv};
}

export { menuContainer };