const domClear = () => {
    const clearContentDiv = () => {
        const contentDiv = document.getElementById('content');
        while (contentDiv.hasChildNodes()) {
            contentDiv.removeChild(contentDiv.firstChild);
        }
    }

    const clearCardDiv = (id) => {
        const cardDiv = document.getElementById(id);
        const img = Array.from(cardDiv.childNodes)[1];
        cardDiv.removeChild(img);
        console.log('Img removed.');
    }
    
    return { clearContentDiv, clearCardDiv };
}

export { domClear };