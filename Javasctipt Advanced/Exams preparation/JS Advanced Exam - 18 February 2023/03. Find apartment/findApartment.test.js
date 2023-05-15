const { expect } = require('chai');
const findNewApartment = require('./findApartment.js');

describe('Test for findNewApartment', () => {
  it('isGoodLocation', () => {
    expect(() => findNewApartment.isGoodLocation(0, 0)).to.throw();
    expect(() => findNewApartment.isGoodLocation('', 0)).to.throw();
    expect(() => findNewApartment.isGoodLocation('', '')).to.throw();
    expect(() => findNewApartment.isGoodLocation({}, true)).to.throw();
    expect(() => findNewApartment.isGoodLocation('Sofia', {})).to.throw();
    expect(() => findNewApartment.isGoodLocation('Varna', {})).to.throw();
    expect(() => findNewApartment.isGoodLocation('Plovdiv', {})).to.throw();
    expect(() => findNewApartment.isGoodLocation('Plovdiv', true)).to.not.throw();
    expect(findNewApartment.isGoodLocation('Pomorie', true)).to.equal('This location is not suitable for you.');
    expect(findNewApartment.isGoodLocation('Pomorie', false)).to.equal('This location is not suitable for you.');
    expect(findNewApartment.isGoodLocation('Plovdiv', false)).to.equal('There is no public transport in area.');
    expect(findNewApartment.isGoodLocation('Varna', false)).to.equal('There is no public transport in area.');
    expect(findNewApartment.isGoodLocation('Sofia', false)).to.equal('There is no public transport in area.');
    expect(findNewApartment.isGoodLocation('Plovdiv', true)).to.equal('You can go on home tour!');
    expect(findNewApartment.isGoodLocation('Varna', true)).to.equal('You can go on home tour!');
    expect(findNewApartment.isGoodLocation('Sofia', true)).to.equal('You can go on home tour!');
  });

  it('isLargeEnough', () => {
    expect(() => findNewApartment.isLargeEnough([], 0)).to.throw();
    expect(() => findNewApartment.isLargeEnough([], 100)).to.throw();
    expect(() => findNewApartment.isLargeEnough([1, 2, 3], '')).to.throw();
    expect(() => findNewApartment.isLargeEnough([1, 2, 3], {})).to.throw();
    expect(() => findNewApartment.isLargeEnough([1, 2, 3], [])).to.throw();
    expect(() => findNewApartment.isLargeEnough(1, 100)).to.throw();
    expect(() => findNewApartment.isLargeEnough([1, 2, 3], 100)).to.not.throw();
    expect(findNewApartment.isLargeEnough([10, 20, 30], 20)).to.equal('20, 30');
    expect(findNewApartment.isLargeEnough([10, 10, 100], 20)).to.equal('100');
    expect(findNewApartment.isLargeEnough([10, 10, 10], 20)).to.equal('');
  });

  it('isItAffordable', () => {
    expect(() => findNewApartment.isItAffordable('', '')).to.throw();
    expect(() => findNewApartment.isItAffordable('', 1)).to.throw();
    expect(() => findNewApartment.isItAffordable(1, '')).to.throw();
    expect(() => findNewApartment.isItAffordable(0, 0)).to.throw();
    expect(() => findNewApartment.isItAffordable(-1, -1)).to.throw();
    expect(() => findNewApartment.isItAffordable(0, -1)).to.throw();
    expect(() => findNewApartment.isItAffordable(-1, 1)).to.throw();
    expect(() => findNewApartment.isItAffordable(1, -1)).to.throw();
    expect(() => findNewApartment.isItAffordable(1, 1)).to.not.throw();
    expect(findNewApartment.isItAffordable(11, 10)).to.equal("You don't have enough money for this house!");
    expect(findNewApartment.isItAffordable(10, 10)).to.equal('You can afford this home!');
    expect(findNewApartment.isItAffordable(10, 60)).to.equal('You can afford this home!');
  });
});
