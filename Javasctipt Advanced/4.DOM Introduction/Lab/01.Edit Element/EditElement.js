function editElement(headerElement, matchingText, message) {
   const pattern = new RegExp(matchingText, 'g');
   headerElement.textContent = headerElement.textContent.replace(pattern, message)
}