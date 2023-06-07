const { expect } = require('chai');
const { cinema } = require('./cinema.js');

describe('Begin tests', () => {
    describe('showMovies method tests', () => {
        it('Should return text for invalid input', () => {
            expect(cinema.showMovies([])).to.be.equal('There are currently no movies to show.');
        });

        it('Properly executed method', () => {
            expect(cinema.showMovies(['Alladin', 'Pratos'])).to.be.equal('Alladin, Pratos');
            expect(cinema.showMovies(['Alladin', 'Pratos', 'Test'])).to.be.equal('Alladin, Pratos, Test');
        });
    });

    describe('ticketPrice method tests', () => {
        it('Should throw error for invalid input', () => {
            expect(() => cinema.ticketPrice('NotNormal')).to.throw('Invalid projection type.');
            expect(() => cinema.ticketPrice(5)).to.throw('Invalid projection type.');
        });

        it('Properly executed method', () => {
            expect(cinema.ticketPrice('Normal')).to.be.equal(7.5);
            expect(cinema.ticketPrice('Premiere')).to.be.equal(12.0);
            expect(cinema.ticketPrice('Discount')).to.be.equal(5.5);
        });
    });

    describe('swapSeatsInHall method tests', () => {
        it('Should throw error for invalid input', () => {
            expect(cinema.swapSeatsInHall('f', 5)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall('6', 5)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(5, 'f')).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(5, '6')).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(-3, 5)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(5, -3)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(21, 5)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(5, 21)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(5, 5)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall('5', '6')).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(0, 5)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(5, 0)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall('5', '5')).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(5, '5')).to.be.equal('Unsuccessful change of seats in the hall.');
        });

        it('Properly executed method', () => {
            expect(cinema.swapSeatsInHall(5, 6)).to.be.equal('Successful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, 20)).to.be.equal('Successful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(5, 19)).to.be.equal('Successful change of seats in the hall.');
        });
    });
});
