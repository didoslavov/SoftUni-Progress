const { sum } = require('./04sumOfNumbers');
const { expect } = require('chai');

describe('Sum of numbers of array', () => {
    it('Should take array as parameter', () => {
        expect(Array.isArray([1,2,3])).to.be.true;
    });

    it('Should sum all numbers in the array', () => {
        expect(sum([1,2,3,4])).to.equal(10, 'Sum is wrong!');
    });

    it('Should sum all numbers in the array even they\'re strings', () => {
        expect(sum(['1',2,'3',4])).to.equal(10, 'Need to parse strings to digits!');
    });
})