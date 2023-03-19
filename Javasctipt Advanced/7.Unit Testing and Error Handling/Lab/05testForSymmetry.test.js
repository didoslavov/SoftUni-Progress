const { expect } = require('chai');
const { isSymmetric } = require('./05testForSymmetry');

describe('TestForSymmetry function tests', () => {
    it('Should return true if parameter is an Array', () => {
        expect(isSymmetric([])).to.be.true;
    });
    it('Should return true if Array have one element', () => {
        expect(isSymmetric([2])).to.be.true;
    });
    it('Should return true if array is symmetric', () => {
        expect(isSymmetric([1,2,1])).to.be.true;
    })
    it('Should return false if array is not symmetric', () => {
        expect(isSymmetric([1,2,2])).to.not.be.true;
    })
    it('Should return true if array of strings is symmetric', () => {
        expect(isSymmetric(['1', '2', '1'])).to.be.true;
    })
    it('Should return false if array is mixed types', () => {
        expect(isSymmetric(['1', 2, '1'])).to.be.true;
    })
    it('Should return false if array is mixed types', () => {
        expect(isSymmetric(['2', 2,])).to.be.false;
    })

    it('Should return false if parameter is object', () => {
        expect(isSymmetric({})).to.not.be.true;
    })
    it('Should return false if parameter is string', () => {
        expect(isSymmetric('')).to.not.be.true;
    })
    it('Should return false if parameter is number', () => {
        expect(isSymmetric(1)).to.not.be.true;
    })
    it('Should return false if parameter is undefined', () => {
        expect(isSymmetric(undefined)).to.not.be.true;
    })
    it('Should return false if parameter is null', () => {
        expect(isSymmetric(null)).to.not.be.true;
    })
    it('Should return false if parameter is true', () => {
        expect(isSymmetric(true)).to.not.be.true;
    })
    it('Should return false if parameter is false', () => {
        expect(isSymmetric(false)).to.not.be.true;
    })
    it('Should return false if there is no parameter', () => {
        expect(isSymmetric()).to.not.be.true;
    })
});
