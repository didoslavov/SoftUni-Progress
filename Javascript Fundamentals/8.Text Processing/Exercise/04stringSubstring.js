function stringSubstring(keyWord, string) {
   const stringToArr = string.split(' ');
   
   for (const word of stringToArr) {
        if (word.toLowerCase() === keyWord.toLowerCase()) {
            console.log(keyWord);
            return;
        }
   }
   console.log(`${keyWord} not found!`);
}

stringSubstring('javascripT',
'JavaScript is the best programming language');