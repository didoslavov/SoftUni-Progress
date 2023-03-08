function extractText() {
    const ulElements = document.getElementById('items')
    const text = ulElements.textContent;
    const textAreaElement = document.getElementById('result');

    textAreaElement.textContent = text; 
}