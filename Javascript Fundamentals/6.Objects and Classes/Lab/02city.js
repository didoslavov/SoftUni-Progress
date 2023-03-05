// Both ways works perfectly fine. Still not sure what's the difference

function cityInfo(object) {
    const city = object;

    for (const key in city) {
       console.log(`${key} -> ${city[key]}`);
    }
}

function cityInfo(city) {
    for (const [key, value] of Object.entries(city)) {
        console.log(`${key} -> ${value}`);
    }
}
cityInfo({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});

