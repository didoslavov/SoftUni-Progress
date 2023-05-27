const { expect } = require('chai');
const flowerShop = require('./flowerShop.js');

describe('Tests for flowerShop.', () => {
    it('calcPriceOfFlowers', () => {
        expect(() => flowerShop.calcPriceOfFlowers(1, 1, 1)).to.throw();
        expect(() => flowerShop.calcPriceOfFlowers('', '', 1)).to.throw();
        expect(() => flowerShop.calcPriceOfFlowers('', 1, '')).to.throw();
        expect(() => flowerShop.calcPriceOfFlowers([], 1, 1)).to.throw();
        expect(() => flowerShop.calcPriceOfFlowers('', [], 1)).to.throw();
        expect(() => flowerShop.calcPriceOfFlowers('', 1, [])).to.throw();
        expect(() => flowerShop.calcPriceOfFlowers({}, 1, 1)).to.throw();
        expect(() => flowerShop.calcPriceOfFlowers({}, 1, 1)).to.throw();
        expect(() => flowerShop.calcPriceOfFlowers('', {}, 1)).to.throw();
        expect(() => flowerShop.calcPriceOfFlowers('', 1, {})).to.throw();
        expect(() => flowerShop.calcPriceOfFlowers('', 1, 1)).to.not.throw();
        expect(() => flowerShop.calcPriceOfFlowers('Tulip', 5.5, 10)).to.throw();

        expect(flowerShop.calcPriceOfFlowers('Tulip', 5, 10)).to.equal('You need $50.00 to buy Tulip!');
    });

    it('checkFlowersAvailable', () => {
        expect(flowerShop.checkFlowersAvailable('Tulip', ['Rose', 'Lily', 'Orchid'])).to.equal(
            'The Tulip are sold! You need to purchase more!'
        );
        expect(flowerShop.checkFlowersAvailable('Lily', [])).to.equal('The Lily are sold! You need to purchase more!');
        expect(flowerShop.checkFlowersAvailable('Rose', ['Rose', 'Lily', 'Orchid'])).to.equal('The Rose are available!');
    });

    it('sellFlowers', () => {
        expect(() => flowerShop.sellFlowers([], '')).to.throw();
        expect(() => flowerShop.sellFlowers('', [])).to.throw();
        expect(() => flowerShop.sellFlowers({}, '')).to.throw();
        expect(() => flowerShop.sellFlowers('', {})).to.throw();
        expect(() => flowerShop.sellFlowers('', '')).to.throw();
        expect(() => flowerShop.sellFlowers('', 10)).to.throw();
        expect(() => flowerShop.sellFlowers({}, 10)).to.throw();
        expect(() => flowerShop.sellFlowers(10, 10)).to.throw();
        expect(() => flowerShop.sellFlowers([], 10)).to.throw();
        expect(() => flowerShop.sellFlowers(['Tulip'], 10)).to.throw();
        expect(() => flowerShop.sellFlowers([], 0)).to.throw();
        expect(() => flowerShop.sellFlowers(['Tulip'], -1)).to.throw();
        expect(() => flowerShop.sellFlowers(['Tulip'], 1)).to.throw();
        expect(() => flowerShop.sellFlowers(['Tulip', 'Rose', 'Lily', 'Orchid', 'Daisy'], 4)).to.not.throw();

        expect(flowerShop.sellFlowers(['Tulip', 'Rose', 'Lily', 'Orchid', 'Daisy'], 4)).to.equal('Tulip / Rose / Lily / Orchid');
        expect(flowerShop.sellFlowers(['Tulip', 'Rose', 'Lily', 'Orchid', 'Daisy'], 1)).to.equal('Tulip / Lily / Orchid / Daisy');
    });
});
