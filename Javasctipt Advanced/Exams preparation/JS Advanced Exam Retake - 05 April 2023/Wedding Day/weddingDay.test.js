const { expect } = require('chai');
const weddingDay = require('./weddingDay.js');

describe('Tests for weddingDay', () => {
  it('pickVenue', () => {
    expect(() => weddingDay.pickVenue('', 1, 1)).to.throw;
    expect(() => weddingDay.pickVenue(1, '', 1)).to.throw;
    expect(() => weddingDay.pickVenue('', '', '')).to.throw;
    expect(() => weddingDay.pickVenue(1, 1, [])).to.throw;
    expect(() => weddingDay.pickVenue(1, 1, {})).to.throw;
    expect(() => weddingDay.pickVenue({}, 1, 'Varna')).to.throw;
    expect(() => weddingDay.pickVenue([], 1, 'Varna')).to.throw;
    expect(() => weddingDay.pickVenue(1, {}, 'Varna')).to.throw;
    expect(() => weddingDay.pickVenue(1, [], 'Varna')).to.throw;
    expect(() => weddingDay.pickVenue(1, 1, 'Test')).to.throw;
    expect(() => weddingDay.pickVenue(1, 1, '[]')).to.throw;
    expect(() => weddingDay.pickVenue(1, 1, '{}')).to.throw;
    expect(() => weddingDay.pickVenue(1, 1, '0')).to.throw;
    expect(weddingDay.pickVenue(150, 120, 'Varna')).to.equal(
      'This venue meets the requirements, with capacity of 150 guests and 120$ cover.'
    );
    expect(weddingDay.pickVenue(151, 119, 'Varna')).to.equal(
      'This venue meets the requirements, with capacity of 151 guests and 119$ cover.'
    );
    expect(weddingDay.pickVenue(149, 120, 'Varna')).to.not.equal(
      'This venue meets the requirements, with capacity of 151 guests and 119$ cover.'
    );
    expect(weddingDay.pickVenue(150, 121, 'Varna')).to.not.equal(
      'This venue meets the requirements, with capacity of 151 guests and 119$ cover.'
    );
    expect(weddingDay.pickVenue(149, 121, 'Varna')).to.equal('This venue does not meet your requirements!');
    expect(weddingDay.pickVenue(149, 120, 'Varna')).to.equal('This venue does not meet your requirements!');
    expect(weddingDay.pickVenue(150, 121, 'Varna')).to.equal('This venue does not meet your requirements!');
    expect(() => weddingDay.pickVenue(1, 1, 'Varna')).to.not.throw;
  });

  it('otherSpendings', () => {
    expect(() => weddingDay.otherSpendings({}, {}, {})).to.throw;
    expect(() => weddingDay.otherSpendings([], {}, {})).to.throw;
    expect(() => weddingDay.otherSpendings([], [], {})).to.throw;
    expect(() => weddingDay.otherSpendings('', [], true)).to.throw;
    expect(() => weddingDay.otherSpendings([], [], true)).to.not.throw;
    expect(weddingDay.otherSpendings(['flowers', 'Fabric drapes and curtains'], ['pictures', 'video'], false)).to.equal(
      'You spend 2900$ for wedding decoration and photography!'
    );
    expect(weddingDay.otherSpendings(['flowers'], ['pictures'], false)).to.equal(
      'You spend 1200$ for wedding decoration and photography!'
    );
    expect(weddingDay.otherSpendings(['Fabric drapes and curtains'], ['video'], false)).to.equal(
      'You spend 1700$ for wedding decoration and photography!'
    );
    expect(weddingDay.otherSpendings(['flowers', 'Fabric drapes and curtains'], ['pictures', 'video'], true)).to.equal(
      'You spend 2465$ for wedding decoration and photography with 15% discount!'
    );
    expect(weddingDay.otherSpendings(['flowers'], ['pictures'], true)).to.equal(
      'You spend 1020$ for wedding decoration and photography with 15% discount!'
    );
    expect(weddingDay.otherSpendings(['Fabric drapes and curtains'], ['video'], true)).to.equal(
      'You spend 1445$ for wedding decoration and photography with 15% discount!'
    );
  });

  it('tableDistribution', () => {
    expect(() => weddingDay.tableDistribution('', '')).to.throw;
    expect(() => weddingDay.tableDistribution([], [])).to.throw;
    expect(() => weddingDay.tableDistribution('', 1)).to.throw;
    expect(() => weddingDay.tableDistribution(1, '')).to.throw;
    expect(() => weddingDay.tableDistribution(-1, '')).to.throw;
    expect(() => weddingDay.tableDistribution('', -1)).to.throw;
    expect(() => weddingDay.tableDistribution(-1, -1)).to.throw;
    expect(() => weddingDay.tableDistribution({}, 1)).to.throw;
    expect(() => weddingDay.tableDistribution(1, {})).to.throw;
    expect(() => weddingDay.tableDistribution(1, 1)).to.not.throw;
    expect(weddingDay.tableDistribution(210, 30)).to.equal('You have 30 tables with 7 guests on table.');
    expect(weddingDay.tableDistribution(160, 20)).to.equal('You have 20 tables with 8 guests on table.');
    expect(weddingDay.tableDistribution(100, 20)).to.equal('There is only 5 people on every table, you can join some tables.');
  });
});
