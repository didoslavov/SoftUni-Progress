function convertToJson(firstName, lastName, hairColor) {
    const personInfo = {
        name: firstName,
        lastName: lastName,
        hairColor: hairColor,
    }

    const personInfoJson = JSON.stringify(personInfo);

    console.log(personInfoJson);
}

convertToJson('George', 'Jones', 'Brown');