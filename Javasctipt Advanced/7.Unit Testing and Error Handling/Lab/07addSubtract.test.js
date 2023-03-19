const { expect } = require('chai');
const { createCalculator } = require('./07addSubtract');

describe('createCalculator method tests', () => {
    let calculator;

    beforeEach(() => calculator = createCalculator());

    it('Should return 0 for calculator.get()', () => {
        expect(calculator.get()).to.be.equal(0);
    });
    it('Should return 10 after calculator.add(7), calculator.add(3)', () => {
        calculator.add(7);
        calculator.add(3);
        expect(calculator.get()).to.be.equal(10);
    });
    it('Should return 4 after calculator.subtract(7), calculator.subtract(3)', () => {
        calculator.subtract(7);
        calculator.subtract(3);
        expect(calculator.get()).to.be.equal(-10);
    });
    it('Should return 8.4 after calcalutor.add(10), calculator.subtract(1.6)', () => {
        calculator.add(10);
        calculator.subtract(1.6);
        expect(calculator.get()).to.be.equal(8.4);
    });
    it('Should return NaN if calculator.add(string)', () => {
        calculator.add('some string');
        expect(calculator.get()).to.be.NaN;
    });
});