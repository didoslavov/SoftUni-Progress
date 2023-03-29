const { expect } = require('chai');
const { movieTheater } = require('./03movieTheater');

describe('Tests for the movieTheater object', () => {
    
    describe('ageRestrictions (movieRating)', () => {
        it('Happy path', () => {
            expect(movieTheater.ageRestrictions('G')).to.equal('All ages admitted to watch the movie');
            expect(movieTheater.ageRestrictions('PG')).to.equal('Parental guidance suggested! Some material may not be suitable for pre-teenagers');
            expect(movieTheater.ageRestrictions('R')).to.equal('Restricted! Under 17 requires accompanying parent or adult guardian');
            expect(movieTheater.ageRestrictions('NC-17')).to.equal('No one under 17 admitted to watch the movie');
        });
        it('Exeptions', () => {
            expect(movieTheater.ageRestrictions('Random raiting')).to.equal('There are no age restrictions for this movie');
        });
    });

    describe('moneySpent (tickets, food, drinks)', () => {
        it('Error', () => {
            expect(() => movieTheater.moneySpent(1, '2', '3')).to.throw();
            expect(() => movieTheater.moneySpent(1, [], '3')).to.throw();
            expect(() => movieTheater.moneySpent('1', [], [])).to.throw();
            expect(() => movieTheater.moneySpent('1', 2, [])).to.throw();
            expect(() => movieTheater.moneySpent('1', {}, 3)).to.throw();
            expect(() => movieTheater.moneySpent([], [], [])).to.throw();
            expect(() => movieTheater.moneySpent(1, [], [])).to.not.throw();
        });
        it('Happy path, no discount', () => {
            expect(movieTheater.moneySpent(1, [], [])).to.equal('The total cost for the purchase is 15.00');
            expect(movieTheater.moneySpent(1, ['Nachos'], ['Soda'])).to.equal('The total cost for the purchase is 23.50');
            expect(movieTheater.moneySpent(1, ['Nachos', 'Popcorn'], ['Soda'])).to.equal('The total cost for the purchase is 28.00');
            expect(movieTheater.moneySpent(1, ['Nachos', 'Popcorn'], ['Soda', 'Water'])).to.equal('The total cost for the purchase is 29.50');
            expect(movieTheater.moneySpent(1, ['Nachos', 'Popcorn'], [])).to.equal('The total cost for the purchase is 25.50');
            expect(movieTheater.moneySpent(1, [], ['Soda', 'Water'])).to.equal('The total cost for the purchase is 19.00');
        });
        it('Happy path, with discount', () => {
            expect(movieTheater.moneySpent(4, [], [])).to.equal('The total cost for the purchase with applied discount is 48.00');
            expect(movieTheater.moneySpent(4, ['Nachos'], ['Soda'])).to.equal('The total cost for the purchase with applied discount is 54.80');
            expect(movieTheater.moneySpent(4, ['Nachos', 'Popcorn'], ['Soda'])).to.equal('The total cost for the purchase with applied discount is 58.40');
            expect(movieTheater.moneySpent(4, ['Nachos', 'Popcorn'], ['Soda', 'Water'])).to.equal('The total cost for the purchase with applied discount is 59.60');
            expect(movieTheater.moneySpent(4, ['Nachos', 'Popcorn'], [])).to.equal('The total cost for the purchase with applied discount is 56.40');
            expect(movieTheater.moneySpent(4, [], ['Soda', 'Water'])).to.equal('The total cost for the purchase with applied discount is 51.20');
        });
    });

    describe('reservation (rowsArray, neededSeatsCount))', () => {
        it('Error', () => {
            expect(() => movieTheater.reservation({}, 1)).to.throw();
            expect(() => movieTheater.reservation(1, 1)).to.throw();
            expect(() => movieTheater.reservation('', 1)).to.throw();
            expect(() => movieTheater.reservation([], {})).to.throw();
            expect(() => movieTheater.reservation([], '')).to.throw();
            expect(() => movieTheater.reservation([], [])).to.throw();
            expect(() => movieTheater.reservation([], 1)).to.not.throw();
        });
        it('Happy path', () => {
            expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }], 2)).to.equal(2);
            expect(movieTheater.reservation([{ rowNumber: 10, freeSeats: 2 }, { rowNumber: 2, freeSeats: 5 }], 2)).to.equal(10);
        });
    });
});