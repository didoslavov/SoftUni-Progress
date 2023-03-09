function solve() {
  document.querySelector('#searchBtn').addEventListener('click', onClick);

  function onClick() {
    const searchInputElement = document.getElementById('searchField');
    const listElements = Array.from(document.querySelectorAll('.container tbody tr'));
    const searchText = searchInputElement.value;
    
    listElements.forEach((x) => {
      x.className = '';
    });
    
    const filteredElements = listElements.filter(x => {
      const values = Array.from(x.children);
      if (values.some(td => td.textContent.includes(searchText))) {
        x.className = 'select';
      }
    })
    
   searchInputElement.value = '';
  }
}