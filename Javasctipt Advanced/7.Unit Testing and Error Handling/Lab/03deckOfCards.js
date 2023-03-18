function printDeckOfCards(cards) {
    let result = [];

    for (const card of cards) {
        const cardInfo = card.split('');
        const suit = cardInfo.pop();
        const face = cardInfo.join('');

        try {
            const newCard = cardFactory(face, suit);
            result.push(newCard);
        } catch (error) {
            result = [`Invalid card: ${card}`];
        }

    }

    console.log(result.join(' '));

    function cardFactory(face, suit) {
        const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const validSuits = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663',
        };
    
        if (!validFaces.includes(face)) throw new Error('Invalid ' + face);
        if (validSuits[suit] == undefined) throw new Error('Invalid ' + suit);
    
        return {
            face,
            suit: validSuits[suit],
            toString() {
                return this.face + this.suit;
            }
        }
    }
}

console.log(printDeckOfCards(['AS', '10D', 'KH', '2C']));
console.log(printDeckOfCards(['5S', '3D', 'QD', '5X']));