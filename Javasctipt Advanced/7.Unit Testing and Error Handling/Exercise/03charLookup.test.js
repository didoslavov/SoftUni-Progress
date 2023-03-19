const { expect } = require('chai');
const { lookupChar } = require('./03charLookup');

describe('lookupChar function tests', () => {
    it('Should return undefined if first parameter is an object', () => {
        expect(lookupChar({}, 1)).to.be.undefined;
    });
    it('Should return undefined if first parameter is an array', () => {
        expect(lookupChar([], 1)).to.be.undefined;
    });
    it('Should return undefined if first parameter is a number', () => {
        expect(lookupChar(1, 1)).to.be.undefined;
    });
    it('Should return undefined if second parameter is an obejct', () => {
        expect(lookupChar('string', {})).to.be.undefined;
    });
    it('Should return undefined if second parameter is an array', () => {
        expect(lookupChar('string', [])).to.be.undefined;
    });
    it('Should return undefined if second parameter is a string', () => {
        expect(lookupChar('string', '1')).to.be.undefined;
    });
    it('Should return incorrect index if second parameter is a floating point number', () => {
        expect(lookupChar('string', 1.1)).to.be.undefined;
    });
    it('Should return incorrect index if index parameter is more then string parameter length', () => {
        expect(lookupChar('Hi', 2)).to.be.equal('Incorrect index');
    });
    it('Should return incorrect index if index parameter is less then string parameter length', () => {
        expect(lookupChar('Hi', -1)).to.be.equal('Incorrect index');
    });
    it('Should return incorrect index if empty string is given', () => {
        expect(lookupChar('', 0)).to.be.equal('Incorrect index');
    });
    it('Should return H if first parameter is "Hi" and index is correct', () => {
        expect(lookupChar('Hi', 0)).to.be.equal('H');
    }); 
    it('Should return "l" for lookupChar("Hello", 3)', () => {
        expect(lookupChar('Hello', 3)).to.be.equal('l');
    });
});