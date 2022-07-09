import { navBar } from '../utility.js';

import '../css/nav.css';

const aboutContainer = () => {
    const aboutWindow = document.createElement('div');
    aboutWindow.setAttribute('class', 'about-container');

    const historySection = historyContainer();
    const navMenu = navBar('Home', 'Menu');

    aboutWindow.appendChild(navMenu.navDiv);
    aboutWindow.appendChild(historySection.historyDiv);

    return {aboutWindow};
}

const historyContainer = () => {
    const historyDiv = document.createElement('div');
    historyDiv.setAttribute('class', 'history-container');

    const historyTitle = document.createElement('p');
    historyTitle.textContent = 'A Brief History';

    const pastHistorySection = pastHistoryContainer();
    const presentHistorySection = presentHistoryContainer();

    historyDiv.appendChild(historyTitle);
    historyDiv.appendChild(pastHistorySection.pastHistoryDiv);
    historyDiv.appendChild(presentHistorySection.presentHistoryDiv);

    return {historyDiv};
}

const pastHistoryContainer = () => {
    const pastHistoryDiv = document.createElement('div');
    pastHistoryDiv.setAttribute('class', 'past-history-container');

    const heading = document.createElement('p');
    heading.textContent = 'Past';

    const pastPara1 = document.createElement('p');
    pastPara1.textContent = 'Nick\'s Pizza didn\'t start life at it\'s current home on Merrimac Street. It began in 1948 as a small, Italian trattoria at the bottom of Boardman Street. It was owned by Donato and Ester DePalma, who emigrated from Canosa Sannita, a small town in Abruzzo, Italy. The DePalma\'s moved their eatery in 1953 to the current Merrimac Street location where they welcomed diners six days a week. By 1955, they needed more help; so, they looked homeward, inviting their niece and nephew, Gilda and Aldo, to come to America to work with them. Pizza at the time had only just begun to gain popularity in the U.S., thanks to American servicemen who had fought in Italy during World War II and returned home with a yen for it. “At first, pizza wasn\'t so popular,” Gilda LaBarba says. “But it grew. Little by little, more people asked for it.”';
    const pastPara2 = document.createElement('p');
    pastPara2.textContent = 'The former Gilda DiCola married Nicola (Nick) LaBarba and, in 1958, the LaBarbas bought the business from the DePalma\'s, renamed it Nick\'s Pizza and turned it into the pizza only shop it is today. Nick\'s Pizza was only open on Friday, Saturday, and Sunday since Nick had a full time job as a machinist. After Nick retired from his day job in 1985, he opened Nick\'s on Thursday also. He lived out his life serving his signature rectangular shaped pizzas to his loyal customers and handed the business over to his son, Frank, in 1990. The family lost Nick LaBarba in 1997, but not his spirit.';

    pastHistoryDiv.appendChild(heading);
    pastHistoryDiv.appendChild(pastPara1);
    pastHistoryDiv.appendChild(pastPara2);

    return {pastHistoryDiv};
}

const presentHistoryContainer = () => {
    const presentHistoryDiv = document.createElement('div');
    presentHistoryDiv.setAttribute('class', 'present-history-container');

    const heading = document.createElement('p');
    heading.textContent = 'Present';

    const currentPara1 = document.createElement('p');
    currentPara1.textContent = 'Now Frank LaBarba and his wife, Tiziana, a native of his mother\'s hometown in Abruzzo, own and operate Nick\'s Pizza. Like his father, Frank works seven days a week. In addition to Nick\'s, he works days as a mechanical engineer at Raytheon in Tewksbury. Frank and Tiziana also have their aunt and uncle, Esperia and Aldo DiCola, working with them. Frank says his wife, Tiziana, is pivotal in keeping Nick\'s Pizza operating today. The couple met while Frank LaBarba worked as an engineer in Italy following his graduation from University of Lowell (UMass) in 1981. “My wife\'s wonderful,” he says. “She\'s really kept everything going. She deserves all of the credit in the world”. When Frank eventually retires from Raytheon, he hopes to expand the business as his father did. He would be pleased to pass the family passion that is Nick\'s Pizza on to his daughters, Gilda and Nicole. Frank says, “My wife and I will keep Nick\'s open as long as we can. We plan on taking things day by day.”';

    presentHistoryDiv.appendChild(heading);
    presentHistoryDiv.appendChild(currentPara1);

    return {presentHistoryDiv};
}


export { aboutContainer }