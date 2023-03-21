function destinationMapper(string) {
    const pattern = /([=]|[\/])(?<place>[A-Z][A-Za-z]{2,})\1/gm;
    const places = [];
    let match = pattern.exec(string);

    while(match) {
        places.push(match.groups.place);
        match = pattern.exec(string);
    }

    const travelPoints = places.reduce((acc, place) => acc + place.length, 0);

    console.log(`Destinations: ${places.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);
}   

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");