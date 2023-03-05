function bookShelf(input) {
  const bookShelfs = {};

  for (const line of input) {
    if (line.includes('->')) {
      const shelf = line.split(' -> ').join(' ');
      const idIsTaken = checkId(bookShelfs, shelf);

      if (!bookShelfs.hasOwnProperty(shelf) && !idIsTaken) {
        bookShelfs[shelf] = [];
      }
    } else {
      const [bookName, author, genre] = line.split(/: |, /g);
      const shelf = checkForKey(bookShelfs, genre);

      if (bookShelfs.hasOwnProperty(shelf)) {
        bookShelfs[shelf].push({ bookName, author });
      }
    }
  }
  
  const sortedShelfs = Object.entries(bookShelfs).sort((a,b) => b[1].length - a[1].length);
  
  for (const shelf of sortedShelfs) {
    console.log(`${shelf[0]}: ${shelf[1].length}`);

    const bookInfo = shelf[1];
    
    for (const shelf of bookInfo) {
        console.log(`--> ${shelf.bookName}: ${shelf.author}`);
    }
  }

  function checkForKey(object, genre) {
    for (const key in object) {
      if (key.includes(genre)) {
        return key;
      }
    }
  }

  function checkId(object, shelfName) {
    const id = shelfName.split(' ').shift();

    for (const key in object) {
        if (key.includes(id)) {
            return true;
        }
    }
  }
}

bookShelf([
  '1 -> history',
  '1 -> action',
  'Death in Time: Criss Bell, mystery',
  '2 -> mystery',
  '3 -> sci-fi',
  'Child of Silver: Bruce Rich, mystery',
  'Hurting Secrets: Dustin Bolt, action',
  'Future of Dawn: Aiden Rose, sci-fi',
  'Lions and Rats: Gabe Roads, history',
  '2 -> romance',
  'Effect of the Void: Shay B, romance',
  'Losing Dreams: Gail Starr, sci-fi',
  'Name of Earth: Jo Bell, sci-fi',
  'Pilots of Stone: Brook Jay, history',
]);
console.log('-----------------');
bookShelf([
  '1 -> mystery',
  '2 -> sci-fi',
  'Child of Silver: Bruce Rich, mystery',
  'Lions and Rats: Gabe Roads, history',
  'Effect of the Void: Shay B, romance',
  'Losing Dreams: Gail Starr, sci-fi',
  'Name of Earth: Jo Bell, sci-fi',
]);
