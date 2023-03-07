function constructionCrew(worker) {
    const requiredAmountOfWater = (worker.weight * 0.1) * worker.experience;

    if (worker.dizziness === true) {
        worker.levelOfHydrated += requiredAmountOfWater;
        worker.dizziness = false;
    }

    return worker;
}

console.log(
  constructionCrew({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true,
  })
);
console.log('----------------');
console.log(
  constructionCrew({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true,
  })
);
console.log('---------------');
console.log(
  constructionCrew({
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false,
  })
);
