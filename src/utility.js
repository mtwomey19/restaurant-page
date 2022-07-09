const domClear = () => {
    const clearContentDiv = () => {
        const contentDiv = document.getElementById('content');
        while (contentDiv.hasChildNodes()) {
            contentDiv.removeChild(contentDiv.firstChild);
        }
    }
    
    return {clearContentDiv};
}

export { domClear };