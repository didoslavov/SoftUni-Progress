const cinema = {
    showMovies: function (movieArr) {
        if (movieArr.length == 0) {
            return 'There are currently no movies to show.';
        } else {
            let result = movieArr.join(', ');
            return result;
        }
    },
    ticketPrice: function (projectionType) {
        const schedule = {
            Premiere: 12.0,
            Normal: 7.5,
            Discount: 5.5,
        };
        if (schedule.hasOwnProperty(projectionType)) {
            let price = schedule[projectionType];
            return price;
        } else {
            throw new Error('Invalid projection type.');
        }
    },
    swapSeatsInHall: function (firstPlace, secondPlace) {
        if (
            !Number.isInteger(firstPlace) ||
            firstPlace <= 0 ||
            firstPlace > 20 ||
            !Number.isInteger(secondPlace) ||
            secondPlace <= 0 ||
            secondPlace > 20 ||
            firstPlace === secondPlace
        ) {
            return 'Unsuccessful change of seats in the hall.';
        } else {
            return 'Successful change of seats in the hall.';
        }
    },
};

module.exports = { cinema };
