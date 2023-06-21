class JobOffers {
    constructor(employer, position) {
        this.employer = employer;
        this.position = position;
        this.jobCandidates = [];
    }

    jobApplication(candidates) {
        candidates.forEach((c) => {
            const [name, education, yearsExperience] = c.split('-');
            const candidate = this.jobCandidates.find((can) => can.name === name);

            if (!candidate) {
                this.jobCandidates.push({
                    name,
                    education,
                    yearsExperience: Number(yearsExperience),
                });
            } else {
                if (candidate.yearsExperience < Number(yearsExperience)) {
                    candidate.yearsExperience = Number(yearsExperience);
                }
            }
        });
        const uniqueNames = [...new Set(this.jobCandidates.map((n) => n.name))];

        return `You successfully added candidates: ${uniqueNames.join(', ')}.`;
    }

    jobOffer(chosenPerson) {
        const [name, minimalExperience] = chosenPerson.split('-');
        const candidate = this.jobCandidates.find((c) => c.name === name);

        if (!candidate) {
            throw new Error(`${name} is not in the candidates list!`);
        }

        if (Number(minimalExperience) > candidate.yearsExperience) {
            throw new Error(
                `${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`
            );
        }

        candidate.yearsExperience = 'hired';

        return `Welcome aboard, our newest employee is ${name}.`;
    }

    salaryBonus(name) {
        const candidate = this.jobCandidates.find((c) => c.name === name);

        if (!candidate) {
            throw new Error(`${name} is not in the candidates list!`);
        }

        if (candidate.education === 'Bachelor') {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`;
        }

        if (candidate.education === 'Master') {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`;
        }

        return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`;
    }

    candidatesDatabase() {
        if (this.jobCandidates.length === 0) {
            throw new Error('Candidate Database is empty!');
        }

        const candidates = this.jobCandidates
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((c) => `${c.name}-${c.yearsExperience}`);

        return `Candidates list:\n${candidates.join('\n')}`;
    }
}

let Jobs = new JobOffers('Google', 'Strategy Analyst');
console.log(Jobs.jobApplication([]));
console.log(Jobs.candidatesDatabase());
