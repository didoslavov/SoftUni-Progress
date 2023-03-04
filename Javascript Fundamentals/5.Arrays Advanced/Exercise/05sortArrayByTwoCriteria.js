function sortByTwoCriteria (strings) {
    let sortedStrings = strings.sort((a, b) =>{
       return a.length - b.length || a.localeCompare(b);
    });

    strings.forEach(element => {
        console.log(element);
    });

}

sortByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);