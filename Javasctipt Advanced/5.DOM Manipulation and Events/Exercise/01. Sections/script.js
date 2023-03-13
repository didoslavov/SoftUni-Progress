function create(words) {
   const contentDivElement = document.getElementById('content');

   words.forEach(w => {
      const newDiv = document.createElement('div');
      const newP = document.createElement('p');

      newP.textContent = w;
      newP.style.display = 'none';
      
      newDiv.appendChild(newP)
      newDiv.addEventListener('click', () => newDiv.children[0].style.display = 'block')

      contentDivElement.appendChild(newDiv);
   });
}