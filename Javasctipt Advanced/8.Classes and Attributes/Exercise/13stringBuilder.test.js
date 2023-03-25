const { expect } = require('chai');
const { StringBuilder } = require('./13stringBuilder');

describe('Tests for StringBuilder class', () => {
  describe('StringBuilder Tests', () => {
    describe('constructor test', () => {
      it('Should initialize with empty array', () => {
        const test = new StringBuilder(undefined);
        expect(test.toString()).to.equal('');
      });

      it('Should throw an error if passed a non string argument', () => {
        expect(() => new StringBuilder(1.23)).to.throw(TypeError);
        expect(() => new StringBuilder(null)).to.throw(TypeError);
      });

      it('Should initialize correct way when we pass correct string', () => {
        const test1 = new StringBuilder('abc');
        const test2 = new StringBuilder('test');

        expect(test1.toString()).to.equal('abc');
        expect(test2.toString()).to.equal('test');
      });
    });

    describe('apend method test', () => {
      it('Should throw when passes non string arg', () => {
        const test = new StringBuilder();
        expect(() => test.append(true)).to.throw(TypeError);

        const test1 = new StringBuilder('abc');
        expect(() => test1.append(123)).to.throw(TypeError);
      });

      it('Should be executed correctly', () => {
        const input = '123';
        const inpu2 = 'wow';
        const expected = 'abc123';
        const expected2 = 'abc123wow';
        const expected3 = 'abc123ww';
        const test = new StringBuilder('abc');
        test.append(input);
        expect(test.toString()).to.equal(expected);
        test.append(inpu2);
        expect(test.toString()).to.equal(expected2);
        test.remove(7, 1);
        expect(test.toString()).to.equal(expected3);
      });
    });

    describe('prepend method test', () => {
      it('Should throw when passes non string arg', () => {
        const test = new StringBuilder();
        expect(() => test.prepend(true)).to.throw(TypeError);

        const test2 = new StringBuilder('abc');
        expect(() => test2.prepend(123)).to.throw(TypeError);
      });

      it('Should be executed correctly', () => {
        const input = '123';
        const inpu2 = 'wow';
        const expected = '123abc';
        const expected2 = 'wow123abc';
        const expected3 = 'wow123bc';
        const test = new StringBuilder('abc');
        test.prepend(input);
        expect(test.toString()).to.equal(expected);
        test.prepend(inpu2);
        expect(test.toString()).to.equal(expected2);
        test.remove(6, 1);
        expect(test.toString()).to.equal(expected3);
      });
    });

    describe('insertAt method test', () => {
      it('Should throw when passes non string arg', () => {
        const test = new StringBuilder();
        expect(() => test.insertAt(true, 0)).to.throw(TypeError);

        const test2 = new StringBuilder('abc');
        expect(() => test2.insertAt(123, 1)).to.throw(TypeError);
      });

      it('Should be executed correctly', () => {
        const input = ' are';
        const inpu2 = ' fast';
        const expected = 'cars are';
        const expected2 = 'cars fast are';
        const test = new StringBuilder('cars');
        test.insertAt(input, 4);
        expect(test.toString()).to.equal(expected);
        test.insertAt(inpu2, 4);
        expect(test.toString()).to.equal(expected2);
      });

      it('Should be executed correctly 2', () => {
        const input = ' are';
        const inpu2 = ' fast';
        const expected = 'cars are';
        const expected2 = 'cars fast are';
        const expected3 = 'cars fast ae';
        const test = new StringBuilder('cars');
        test.insertAt(input, 4);
        expect(test.toString()).to.equal(expected);
        test.insertAt(inpu2, 4);
        expect(test.toString()).to.equal(expected2);
        test.remove(11, 1);
        expect(test.toString()).to.equal(expected3);
      });
    });

    describe('remove method test', () => {
      it('Should be executed correctly', () => {
        const expected = 'cars are fat';
        const expected2 = 'cars fat';
        const test = new StringBuilder('cars are fast');
        test.remove(11, 1);
        expect(test.toString()).to.equal(expected);
        test.remove(4, 4);
        expect(test.toString()).to.equal(expected2);
      });
    });

    describe('toString method test', () => {
      it('Should return correct string when called', () => {
        const expected = '';
        const expected2 = 'cars are fast';
        const test = new StringBuilder();
        const test2 = new StringBuilder('cars are fast');
        expect(test.toString()).to.equal(expected);
        expect(test2.toString()).to.equal(expected2);
      });
    });
  });
});
