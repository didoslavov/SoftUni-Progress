class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { child: 150, student: 300, collegian: 500 };
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        const participant = this.listOfParticipants.find((p) => p.name === name);

        if (!this.priceForTheCamp[condition]) {
            throw new Error('Unsuccessful registration at the camp.');
        }

        if (participant) {
            return `The ${name} is already registered at the camp.`;
        }

        if (money < this.priceForTheCamp[condition]) {
            return `The money is not enough to pay the stay at the camp.`;
        }

        this.listOfParticipants.push({
            name,
            condition,
            power: 100,
            wins: 0,
        });

        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant(name) {
        const participant = this.listOfParticipants.find((p) => p.name === name);

        if (!participant) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }

        this.listOfParticipants = this.listOfParticipants.filter((p) => p.name !== name);
        return `The ${name} removed successfully.`;
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        const player1 = this.listOfParticipants.find((p) => p.name === participant1);
        const player2 = this.listOfParticipants.find((p) => p.name === participant2);

        if (typeOfGame === 'Battleship' && player1) {
            player1.power += 20;
            return `The ${player1.name} successfully completed the game ${typeOfGame}.`;
        }

        if (!player1 || !player2) {
            throw new Error('Invalid entered name/s.');
        }

        if (player1.condition !== player2.condition) {
            throw new Error('Choose players with equal condition.');
        }

        if (player1.power > player2.power) {
            player1.wins++;
            return `The ${player1.name} is winner in the game ${typeOfGame}.`;
        } else if (player2.power > player1.power) {
            player2.wins++;
            return `The ${player2.name} is winner in the game ${typeOfGame}.`;
        } else {
            return 'There is no winner.';
        }
    }

    toString() {
        const participants = this.listOfParticipants
            .sort((a, b) => b.wins - a.wins)
            .map((p) => `${p.name} - ${p.condition} - ${p.power} - ${p.wins}`);

        return `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${
            this.location
        }\n${participants.join('\n')}`;
    }
}

const summerCamp = new SummerCamp('Jane Austen', 'Pancharevo Sofia 1137, Bulgaria');
console.log(summerCamp.registerParticipant('Petar Petarson', 'student', 300));
console.log(summerCamp.timeToPlay('Battleship', 'Petar Petarson'));
console.log(summerCamp.registerParticipant('Sara Dickinson', 'child', 200));
console.log(summerCamp.registerParticipant('Dimitur Kostov', 'student', 300));
console.log(summerCamp.timeToPlay('WaterBalloonFights', 'Petar Petarson', 'Dimitur Kostov'));

console.log(summerCamp.toString());
console.log(summerCamp.timeToPlay('WaterBalloonFights', 'Petar Petarson', 'Sara Dickinson'));
