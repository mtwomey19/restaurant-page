import { aboutContainer } from "./pages/about.js";
import { homeContainer } from './pages/home.js';
import { menuContainer } from "./pages/menu.js";


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

    button1.addEventListener('click', buttonClicked);
    button2.addEventListener('click', buttonClicked);

    function buttonClicked(event) {
        const buttonText = event.target.textContent;
        switchPage(buttonText);
    }

    navDiv.appendChild(logo);
    navDiv.appendChild(button1);
    navDiv.appendChild(button2);

    return {navDiv};
}

const switchPage = (buttonText) => {
        const contentContainer = document.getElementById('content');
        const aboutDiv = document.getElementById('about-container');
        const menuDiv = document.getElementById('menu-container');

        if (buttonText === 'About') {
            menuDiv.remove();
            const aboutPage = aboutContainer();
            contentContainer.appendChild(aboutPage.aboutWindow);

        } else if (buttonText === 'Home') {
            if (aboutDiv !== null) {
                aboutDiv.remove();
            } else {
                menuDiv.remove();
            }
            const homePage = homeContainer();
            contentContainer.appendChild(homePage.homeWindow);

        } else if (buttonText === 'Menu') {
            aboutDiv.remove();
            const menuPage = menuContainer();
            contentContainer.appendChild(menuPage.menuWindow);
        }
}
export { domClear, navBar };