function extract(content) {
    const contentElement = document.getElementById('content');
    const text = contentElement.textContent;

    const pattern = /(?<=\().+?(?=\))/gm;
    const matches = text.match(pattern)
    return matches.join('; ');
}