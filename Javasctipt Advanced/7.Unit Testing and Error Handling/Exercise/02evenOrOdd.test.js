const { expect } = require('chai');
const { isOddOrEven } = require('./02evenOrOdd');

describe('evenOrOdd function tests', () => {
    it('Should return undefined if the parameter is a number', () => {
        expect(isOddOrEven(2)).to.be.undefined;
    });
    it('Should return undefined if the parameter is an object', () => {
        expect(isOddOrEven({})).to.be.undefined;
    });
    it('Should return undefined if the parameter is an array', () => {
        expect(isOddOrEven([])).to.be.undefined;
    });
    it('Should return even if the string.length is even', () => {
        expect(isOddOrEven('Hi there')).to.be.equal('even');
    });
    it('Should return odd if the string.length is odd', () => {
        expect(isOddOrEven('Hello there')).to.be.equal('odd');
    });
});