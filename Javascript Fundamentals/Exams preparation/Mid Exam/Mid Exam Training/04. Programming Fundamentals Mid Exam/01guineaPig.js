function guineaPig(input) {
    const guineaInfo = input.map(x => Number(x));
    let food = guineaInfo[0] * 1000;
    let hay = guineaInfo[1] * 1000;
    let cover = guineaInfo[2] * 1000;
    let guineaWeigth = guineaInfo[3] * 1000;
    
    for (let i = 1; i <= 30; i++) {
        food -= 300;

        if (i % 2 === 0) {
            hay -= food * 0.05;
        }

        if (i % 3 === 0) {
            cover -= guineaWeigth / 3;
        }

        if (food <= 0 || hay <= 0 || cover <= 0) {
            return 'Merry must go to the pet store!';
        }
    }
    return `Everything is fine! Puppy is happy! Food: ${(food / 1000).toFixed(2)}, Hay: ${(hay / 1000).toFixed(2)}, Cover: ${(cover / 1000).toFixed(2)}.`
}

console.log(guineaPig(['10', '5', '5.2', '1']));
console.log('-----------------');
console.log(guineaPig(['1', '1.5', '3', '1.5']));
console.log('-----------------');
console.log(guineaPig(['9', '5', '5.2', '1']));
