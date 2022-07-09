const aboutContainer = () => {
    const aboutWindow = document.createElement('div');
    aboutWindow.setAttribute('class', 'about-container');
    const header = document.createElement('h1');
    header.textContent = 'About';

    const historySection = historyContainer();

    aboutWindow.appendChild(header);
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

    pastHistoryDiv.appendChild(heading);

    return {pastHistoryDiv};
}

const presentHistoryContainer = () => {
    const presentHistoryDiv = document.createElement('div');
    presentHistoryDiv.setAttribute('class', 'present-history-container');

    const heading = document.createElement('p');
    heading.textContent = 'Present';

    presentHistoryDiv.appendChild(heading);

    return {presentHistoryDiv};
}


export { aboutContainer }