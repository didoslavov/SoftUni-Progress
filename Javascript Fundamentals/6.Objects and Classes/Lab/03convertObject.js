function convertObject(json) {
    const personanlInfo = JSON.parse(json);

    for (const key in personanlInfo) {
        console.log(`${key}: ${personanlInfo[key]}`);
    }
}

convertObject('{"name": "George", "age": 40, "town": "Sofia"}');