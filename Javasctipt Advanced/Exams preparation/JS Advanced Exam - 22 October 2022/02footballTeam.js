class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {
        for (const player of footballPlayers) {
            const [name, age, playerValue] = player.split('/');
            const currentPlayer = this.invitedPlayers.find(p => p.name === name);

            if (currentPlayer) {
                if(currentPlayer.playerValue < playerValue) {
                    currentPlayer.playerValue = playerValue;
                }
            } else {
                this.invitedPlayers.push({name, age, playerValue})
            }
        }
        this.invitedPlayers = [...new Set(this.invitedPlayers)];
        const res = [];
        this.invitedPlayers.forEach(p => res.push(p.name))
        return `You successfully invite ${res.join(', ')}.`;
    }

    signContract(selectedPlayer) {
        const [name, playerOffer] = selectedPlayer.split('/');
        const invited = this.invitedPlayers.find(p => p.name === name);

        if (!invited) {
            throw new Error(`${name} is not invited to the selection list!`);
        } else {
            if (Number(invited.playerValue) > Number(playerOffer)) {
                const priceDifference = Number(invited.playerValue) - Number(playerOffer);
                throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`)
            } else {
                invited.playerValue = 'Bought';
                return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`;
            }
        }

    }

    ageLimit(name, age) {
        const invited = this.invitedPlayers.find(p => p.name === name);

        if (!invited) {
            throw new Error(`${name} is not invited to the selection list!`);
        } else {
            if (invited.age > age) {
                return `${name} is above age limit!`;
            } else {
                const diff = age - Number(invited.age);
                
                if (diff < 5) return `${name} will sign a contract for ${diff} years with ${this.clubName} in ${this.country}!`;
                if (diff > 5) return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
            }
        }
    }

    transferWindowResult() {
        const res = ['Players list:'];

        const sortedPlayers = Object.values(this.invitedPlayers).sort((a, b) => a.name.localeCompare(b.name));

        for (const player of sortedPlayers) {
            res.push(`Player ${player.name}-${player.playerValue}`);
        }

        return res.join('\n');
    }
}

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());
