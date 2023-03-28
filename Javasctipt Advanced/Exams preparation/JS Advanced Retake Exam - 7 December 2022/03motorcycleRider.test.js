const { expect } = require('chai');
const { motorcycleRider } = require('./03motorcycleRider');

describe('Tests for motorocycleRider object', () => {
    
    describe('Tests for licenseRestriction function', () => {
        it('Should return "Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16." if param is "AM"', () => {
            expect(motorcycleRider.licenseRestriction('AM')).to.be.equal('Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.');
        });
        it('Should return "Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16." if param is "A1"', () => {
            expect(motorcycleRider.licenseRestriction('A1')).to.be.equal('Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.');
        });
        it('Should return "Motorcycles with maximum power of 35KW. and the minimum age is 18." if param is "A2"', () => {
            expect(motorcycleRider.licenseRestriction('A2')).to.be.equal('Motorcycles with maximum power of 35KW. and the minimum age is 18.');
        });
        it('Should return "No motorcycle restrictions, and the minimum age is 24." if param is "A"', () => {
            expect(motorcycleRider.licenseRestriction('A')).to.be.equal('No motorcycle restrictions, and the minimum age is 24.');
        });

        it('Should throw error "Invalid Information!" if param is different from "AM,A1,A2,A"', () => {
            expect(() => motorcycleRider.licenseRestriction('BM')).to.throw('Invalid Information!');
            expect(() => motorcycleRider.licenseRestriction('')).to.throw('Invalid Information!');
            expect(() => motorcycleRider.licenseRestriction({})).to.throw('Invalid Information!');
            expect(() => motorcycleRider.licenseRestriction([])).to.throw('Invalid Information!');
            expect(() => motorcycleRider.licenseRestriction(null)).to.throw('Invalid Information!');
            expect(() => motorcycleRider.licenseRestriction(undefined)).to.throw('Invalid Information!');
        });
    });

    describe('Tests for motorcycleShowroom function', () => {
        it('Should throw error if one or two params are not valid', () => {
            expect(() => motorcycleRider.motorcycleShowroom(1,2)).to.throw('Invalid Information!');
            expect(() => motorcycleRider.motorcycleShowroom([], 2)).to.throw('Invalid Information!');
            expect(() => motorcycleRider.motorcycleShowroom('', 2)).to.throw('Invalid Information!');
            expect(() => motorcycleRider.motorcycleShowroom(undefined, 2)).to.throw('Invalid Information!');
            expect(() => motorcycleRider.motorcycleShowroom([1,2,3], '')).to.throw('Invalid Information!');
            expect(() => motorcycleRider.motorcycleShowroom([1,2,3], 49)).to.throw('Invalid Information!');
            expect(() => motorcycleRider.motorcycleShowroom([1,2,3], undefined)).to.throw('Invalid Information!');
            expect(() => motorcycleRider.motorcycleShowroom([1,2,3], 50)).to.not.throw('Invalid Information!');
        });

        it('Should work correct', () => {
            expect(motorcycleRider.motorcycleShowroom([100, 200, 300], 50)).to.equal('There are 0 available motorcycles matching your criteria!');
            expect(motorcycleRider.motorcycleShowroom([100, 200, 300], 300)).to.equal('There are 3 available motorcycles matching your criteria!');
            expect(motorcycleRider.motorcycleShowroom([100, 200, 300], 226)).to.equal('There are 2 available motorcycles matching your criteria!');
        })
    });

    describe('Tests for otherSpendings function', () => {
        it('Should throw error if inputs are not valid', () => {
            expect(() => motorcycleRider.otherSpendings([],[], 1)).to.throw('Invalid Information!');
            expect(() => motorcycleRider.otherSpendings([],[], '1')).to.throw('Invalid Information!');
            expect(() => motorcycleRider.otherSpendings([],[], '')).to.throw('Invalid Information!');
            expect(() => motorcycleRider.otherSpendings([],[], {})).to.throw('Invalid Information!');
            expect(() => motorcycleRider.otherSpendings([],[], undefined)).to.throw('Invalid Information!');
            expect(() => motorcycleRider.otherSpendings([],[], null)).to.throw('Invalid Information!');

            expect(() => motorcycleRider.otherSpendings([],null, true)).to.throw('Invalid Information!');
            expect(() => motorcycleRider.otherSpendings([],1, true)).to.throw('Invalid Information!');
            expect(() => motorcycleRider.otherSpendings([],'1', false)).to.throw('Invalid Information!');
            expect(() => motorcycleRider.otherSpendings([],'', true)).to.throw('Invalid Information!');
            expect(() => motorcycleRider.otherSpendings([],undefined, false)).to.throw('Invalid Information!');
            expect(() => motorcycleRider.otherSpendings([],{}, true)).to.throw('Invalid Information!');

            expect(() => motorcycleRider.otherSpendings(1,[], true)).to.throw('Invalid Information!');
            expect(() => motorcycleRider.otherSpendings('1',[], true)).to.throw('Invalid Information!');
            expect(() => motorcycleRider.otherSpendings('',[], true)).to.throw('Invalid Information!');
            expect(() => motorcycleRider.otherSpendings({},[], false)).to.throw('Invalid Information!');
            expect(() => motorcycleRider.otherSpendings(undefined,[], true)).to.throw('Invalid Information!');
            expect(() => motorcycleRider.otherSpendings(null,[], false)).to.throw('Invalid Information!');
        })
        it('Should work as expected', () => {
            expect(motorcycleRider.otherSpendings(['helmet'], ['engine oil'], false)).to.equal(`You spend $270.00 for equipment and consumables!`)
            expect(motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil'], false)).to.equal(`You spend $570.00 for equipment and consumables!`)
            expect(motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil', 'oil filter'], false)).to.equal(`You spend $600.00 for equipment and consumables!`)

            expect(motorcycleRider.otherSpendings(['helmet'], ['engine oil'], true)).to.equal(`You spend $243.00 for equipment and consumables with 10% discount!`)
            expect(motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil'], true)).to.equal(`You spend $513.00 for equipment and consumables with 10% discount!`)
            expect(motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil', 'oil filter'], true)).to.equal(`You spend $540.00 for equipment and consumables with 10% discount!`)
        })
    })
});