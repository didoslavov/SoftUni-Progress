function townsToJSON(input) {
    const towns = [];

    for (const townInfo of input.splice(1)) {
        let [town, latitude, longitude] = townInfo.split(/\s*\|\s*/).filter(x => x !== '');

        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);
        
        towns.push({
            Town: town,
            Latitude: Number(latitude),
            Longitude: Number(longitude),
        })
    }

    return JSON.stringify(towns)
}

console.log(townsToJSON(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |']));