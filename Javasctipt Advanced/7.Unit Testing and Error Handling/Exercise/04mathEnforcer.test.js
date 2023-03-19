const { expect } = require('chai');
const { mathEnforcer } = require('./04mathEnforcer');

describe('mathEnforcer object methods tests', () => {
    describe('addFive method tests', () => {
        it('Should return undefined if parameters is array', () => {
            expect(mathEnforcer.addFive([])).to.be.undefined;
        });
        it('Should return undefined if parameters is object', () => {
            expect(mathEnforcer.addFive({})).to.be.undefined;
        });
        it('Should return undefined if no parameter is passed', () => {
            expect(mathEnforcer.addFive()).to.be.undefined;
        });
        it('Should return undefined if parameter is string', () => {
            expect(mathEnforcer.addFive('10')).to.be.undefined;
        });
        it('Should return -5 for addFive(-10)', () => {
            expect(mathEnforcer.addFive(-10)).to.be.equal(-5);
        });
        it('Should return 10 for addFive(5)', () => {
            expect(mathEnforcer.addFive(5)).to.be.equal(10);
        });
        it('Should return 10.12 for addFive(5.12))', () => {
            expect(mathEnforcer.addFive(5.12)).to.be.closeTo(10.12, 0.01);
        });
    });
    describe('subtractTen method tests', () => {
        it('Should return undefined if parameters is object', () => {
            expect(mathEnforcer.subtractTen({})).to.be.undefined;
        });
        it('Should return undefined if parameter is array', () => {
            expect(mathEnforcer.subtractTen([])).to.be.undefined;
        });
        it('Should return undefined if no parameter is passed', () => {
            expect(mathEnforcer.subtractTen()).to.be.undefined;
        });
        it('Should return undefined if parameter is NaN', () => {
            expect(mathEnforcer.subtractTen('10')).to.be.undefined;
        });
        it('Should return -20 for subtractTen(-10)', () => {
            expect(mathEnforcer.subtractTen(-10)).to.be.equal(-20);
        });
        it('Should return 0 for subtractTen(10)', () => {
            expect(mathEnforcer.subtractTen(10)).to.be.equal(0);
        });
        it('Should return 0.1 for subtractTen(10.1))', () => {
            expect(mathEnforcer.subtractTen(10.1)).to.be.closeTo(0.1, 0.01);
        });
        it('Should return -1 for subtractTen(9)', () => {
            expect(mathEnforcer.subtractTen(9)).to.be.equal(-1);
        });
    });
    describe('sum method tests', () => {
        it('Should return undefined if parameters are objects', () => {
            expect(mathEnforcer.sum({}, {})).to.be.undefined;
        });
        it('Should return undefined if first parameter is objects', () => {
            expect(mathEnforcer.sum({}, 1)).to.be.undefined;
        });
        it('Should return undefined if second parameter is objects', () => {
            expect(mathEnforcer.sum(1, {})).to.be.undefined;
        });
        it('Should return undefined if parameters are array', () => {
            expect(mathEnforcer.sum([],[])).to.be.undefined;
        });
        it('Should return undefined if first parameter is array', () => {
            expect(mathEnforcer.sum([],1)).to.be.undefined;
        });
        it('Should return undefined if second parameter is array', () => {
            expect(mathEnforcer.sum(1,[])).to.be.undefined;
        });
        it('Should return undefined if no parameter is passed', () => {
            expect(mathEnforcer.sum()).to.be.undefined;
        });
        it('Should return undefined if one parameter is passed', () => {
            expect(mathEnforcer.sum(1)).to.be.undefined;
        });
        it('Should return undefined if first parameter is NaN', () => {
            expect(mathEnforcer.sum('', 10)).to.be.undefined;
        });
        it('Should return undefined if second parameter is NaN', () => {
            expect(mathEnforcer.sum(10, '10')).to.be.undefined;
        });
        it('Should return undefined if both parameters is NaN', () => {
            expect(mathEnforcer.sum('10', '10')).to.be.undefined;
        });
        it('Should return 30 for sum(10, 20)', () => {
            expect(mathEnforcer.sum(10, 20)).to.be.equal(30);
        });
        it('Should return 0 for sum(-10, 10)', () => {
            expect(mathEnforcer.sum(-10, 10)).to.be.equal(0);
        });
        it('Should return 0 for sum(10, -10)', () => {
            expect(mathEnforcer.sum(10, -10)).to.be.equal(0);
        });
        it('Should return -20 for sum(-10, -10))', () => {
            expect(mathEnforcer.sum(-10, -10)).to.be.equal(-20);
        });
        it('Should return 1.121 for sum(1, 0.122))', () => {
            expect(mathEnforcer.sum(1, 0.122)).to.be.closeTo(1.122, 0.01);
        });
        it('Should retunr 10.6 for sum(5.3,5.3)', () => {
            expect(mathEnforcer.sum(5.3, 5.3)).to.be.equal(10.6);
        });
    });
});