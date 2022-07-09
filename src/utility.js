const domClear = () => {
    const clearContentDiv = (id) => {
        const contentDiv = document.getElementById(id);
        while (contentDiv.hasChildNodes()) {
            contentDiv.removeChild(contentDiv.firstChild);
        }
    }

    const clearCardDiv = (id) => {
        const cardDiv = document.getElementById(id);
        if (Array.from(cardDiv.childNodes)[1] !== undefined) {
            const img = Array.from(cardDiv.childNodes)[1];
            cardDiv.removeChild(img);
        }
    }
    
    return { clearContentDiv, clearCardDiv };
}

const navBar = (buttonText1, buttonText2) => {
    const navDiv = document.createElement('div');
    navDiv.setAttribute('class', 'nav-bar');
    
    const logo = document.createElement('p');
    logo.setAttribute('class', 'logo');
    logo.textContent = 'Nick\'s Pizza';

    const button1 = document.createElement('button');
    button1.setAttribute('class', 'nav-btn');
    button1.textContent = buttonText1;

    const button2 = document.createElement('button');
    button2.setAttribute('class', 'nav-btn');
    button2.textContent = buttonText2;

    navDiv.appendChild(logo);
    navDiv.appendChild(button1);
    navDiv.appendChild(button2);

    return {navDiv};
}

export { domClear, navBar };