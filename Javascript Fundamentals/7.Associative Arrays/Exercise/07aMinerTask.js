function minerTask(kvps) {
    const kvpsLength = kvps.length;
    const minedResources = {};

    for (let i = 0; i < kvpsLength; i += 2) {
        const recource = kvps[i];
        const quantity = Number(kvps[i+1]);

        if (!minedResources.hasOwnProperty(recource)) {
            minedResources[recource] = quantity;
        } else {
            minedResources[recource] += quantity;
        }
    }
    for (const recource in minedResources) {
        console.log(`${recource} -> ${minedResources[recource]}`);
    }
}

minerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ]);