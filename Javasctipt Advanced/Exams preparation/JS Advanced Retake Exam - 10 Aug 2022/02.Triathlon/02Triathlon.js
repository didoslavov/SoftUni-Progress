class Triathlon {
    constructor(competitionName) {
        this.competitionName = competitionName;
        this.participants = {};
        this.listOfFinalists = [];
    }

    addParticipant (participantName, participantGender) {
        if (this.participants.hasOwnProperty(participantName)) {
            return `${participantName} has already been added to the list`
        }

        this.participants[participantName] = participantGender;
        return `A new participant has been added - ${participantName}`;
    }

    completeness (participantName, condition) {
        if (!this.participants.hasOwnProperty(participantName)) {
            throw new Error(`${participantName} is not in the current participants list`);
        }

        if (condition < 30) {
            throw new Error(`${participantName} is not well prepared and cannot finish any discipline`);
        }

        const disciplinesCount = Math.floor(condition / 30);

        if (disciplinesCount < 3) {
            return `${participantName} could only complete ${disciplinesCount} of the disciplines`;
        }

        const gender = this.participants[participantName];
        this.listOfFinalists.push({
            participantName,
            participantGender: gender,
        })
        delete this.participants[participantName];

        return `Congratulations, ${participantName} finished the whole competition`;
    }

    rewarding (participantName) {
        const isFinalist = this.listOfFinalists.some(p => p.participantName === participantName);

        if (!isFinalist) {
            return `${participantName} is not in the current finalists list`
        }

        return `${participantName} was rewarded with a trophy for his performance`;
    }

    showRecord (criteria) {
        if (this.listOfFinalists.length === 0) {
            return `There are no finalists in this competition`;
        }
        if (criteria === 'all') {
            const res = [`List of all ${this.competitionName} finalists:`];

            this.listOfFinalists.sort((a, b) => a.participantName.localeCompare(b.participantName)).forEach(p => {
                res.push(p.participantName);
            });

            return res.join('\n');
        }

        const finalists = this.listOfFinalists.filter(f => f.participantGender === criteria);

        if (finalists.length === 0) {
            return `There are no ${criteria}'s that finished the competition`;
        }

        return `${finalists[0].participantName} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
    }
}
const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.addParticipant("George", "male"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 90));
console.log(contest.completeness("George", 95));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
console.log(contest.rewarding("George"));
console.log(contest.showRecord("male"));