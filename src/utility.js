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

export { domClear };