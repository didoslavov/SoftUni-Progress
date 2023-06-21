const { expect } = require('chai');
const lottery = require('./Lottery.js');

describe('Lottery functionality', () => {
    it('buyLotteryTicket', () => {
        expect(() => lottery.buyLotteryTicket('10', '10', 'false')).to.throw();
        expect(() => lottery.buyLotteryTicket('10', 10, 'false')).to.throw();
        expect(() => lottery.buyLotteryTicket(10, 10, 'false')).to.throw();
        expect(() => lottery.buyLotteryTicket('10', '10', false)).to.throw();
        expect(() => lottery.buyLotteryTicket('10', 10, false)).to.throw();
        expect(() => lottery.buyLotteryTicket(10, '10', false)).to.throw();
        expect(() => lottery.buyLotteryTicket(10, 10, true)).to.not.throw();
        expect(() => lottery.buyLotteryTicket(1, 2, false)).to.throw();
        expect(() => lottery.buyLotteryTicket(0, 2, true)).to.throw();
        expect(() => lottery.buyLotteryTicket(0, 1, true)).to.throw();
        expect(() => lottery.buyLotteryTicket(0, 0, true)).to.throw();
        expect(() => lottery.buyLotteryTicket(-1, 0, true)).to.throw();
        expect(() => lottery.buyLotteryTicket(-5, 0, true)).to.throw();
        expect(() => lottery.buyLotteryTicket(-1, -1, true)).to.throw();

        expect(lottery.buyLotteryTicket(1, 2, true)).to.equal('You bought 2 tickets for 2$.');
        expect(lottery.buyLotteryTicket(1, 10, true)).to.equal('You bought 10 tickets for 10$.');
        expect(lottery.buyLotteryTicket(10, 10, true)).to.equal('You bought 10 tickets for 100$.');
    });

    it('checkTicket', () => {
        expect(() => lottery.checkTicket('1, 2, 3, 4, 5, 6', '1, 2, 3, 4, 5, 6')).to.throw();
        expect(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], '1, 2, 3, 4, 5, 6')).to.throw();
        expect(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], '')).to.throw();
        expect(() => lottery.checkTicket('', '')).to.throw();
        expect(() => lottery.checkTicket('1, 2, 3, 4, 5, 6', [1, 2, 3, 4, 5, 6])).to.throw();
        expect(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5])).to.throw();
        expect(() => lottery.checkTicket([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6])).to.throw();
        expect(() => lottery.checkTicket([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])).to.throw();
        expect(() => lottery.checkTicket([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6, 7])).to.throw();
        expect(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6, 7])).to.throw();
        expect(() => lottery.checkTicket([1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6, 7])).to.throw();
        expect(() => lottery.checkTicket([1, 2, 3, 4, 5, '6'], [1, 2, 3, 4, 5, 6])).to.not.throw();
        expect(() => lottery.checkTicket([1, 2, 3, 4, 5, '6'], [1, 2, 3, 4, 5, '6'])).to.not.throw();
        expect(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6])).to.not.throw();

        expect(lottery.checkTicket([1, 10, 9, 2, 23, 34], [1, 6, 0, 2, 3, 5])).to.be.undefined;
        expect(lottery.checkTicket([1, 1, 1, 2, 3, 4], [1, 1, 0, 2, 3, 4])).to.equal(
            'Congratulations you win, check your reward!'
        );
        expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [3, 4, 5, 7, 8, 9])).to.equal(
            'Congratulations you win, check your reward!'
        );

        expect(lottery.checkTicket([1, 1, 1, 2, 3, 4], [1, 1, 1, 2, 3, 4])).to.equal(
            'Congratulations you win, check your reward!'
        );
        expect(lottery.checkTicket([1, 1, 1, 2, 3, 4], [1, 1, 1, 2, 3, 5])).to.equal(
            'Congratulations you win, check your reward!'
        );
        expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 3, 1, 5, 3, 8])).to.equal(
            'Congratulations you win, check your reward!'
        );
        expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 9, 10, 8])).to.equal(
            'Congratulations you win, check your reward!'
        );
        expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [5, 9, 10, 12, 3, 14])).to.be.undefined;
        expect(lottery.checkTicket([1, 1, 1, 2, 3, 4], [1, 1, 1, 6, 3, 5])).to.be.undefined;
        expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6])).to.equal('You win the JACKPOT!!!');
        expect(lottery.checkTicket([7, 8, 9, 10, 11, 12], [7, 8, 9, 10, 11, 12])).to.equal('You win the JACKPOT!!!');
        expect(lottery.checkTicket([0, 1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6])).to.equal(
            'Congratulations you win, check your reward!'
        );
        expect(lottery.checkTicket([7, 8, 9, 10, 11, 12], [7, 8, 9, 10, 11, '12'])).to.equal(
            'Congratulations you win, check your reward!'
        );
        expect(lottery.checkTicket([7, 8, 9, 10, 11, '12'], [7, 8, 9, 10, 11, '12'])).to.equal('You win the JACKPOT!!!');
        expect(lottery.checkTicket([1.1, 1.2, 1.3, 1.4, 1.5, 1.6], [1.1, 1.2, 1.3, 1.4, 1.5, 1.6])).to.equal(
            'You win the JACKPOT!!!'
        );
        expect(lottery.checkTicket([1.1, 1.2, 1.3, 1.4, 1.5, 1.6], [1.1, 1.2, 1.3, 1.4, 1.7, 1.8])).to.equal(
            'Congratulations you win, check your reward!'
        );
    });

    it('secondChance', () => {
        expect(() => lottery.secondChance('10', '10')).to.throw();
        expect(() => lottery.secondChance([10], 10)).to.throw();
        expect(() => lottery.secondChance([10], '10')).to.throw();
        expect(() => lottery.secondChance(10, '10')).to.throw();
        expect(() => lottery.secondChance(10, {})).to.throw();
        expect(() => lottery.secondChance({}, [])).to.throw();
        expect(() => lottery.secondChance('10', [10])).to.throw();
        expect(() => lottery.secondChance([10], [10])).to.throw();
        expect(() => lottery.secondChance(10, [10])).to.not.throw();
        expect(() => lottery.secondChance(10, [10])).to.not.throw();

        expect(lottery.secondChance(10, [10, 20, 30, 40, 50])).to.equal('You win our second chance prize!');
        expect(lottery.secondChance(40, [10, 20, 30, 40, 50])).to.equal('You win our second chance prize!');
        expect(lottery.secondChance(10, [10])).to.equal('You win our second chance prize!');
        expect(lottery.secondChance(60, [10, 20, 30, 40, 50])).to.equal("Sorry, your ticket didn't win!");
        expect(lottery.secondChance(15, [10, 20, 30, 40, 50])).to.equal("Sorry, your ticket didn't win!");

        expect(lottery.secondChance(10, ['10', 20, 30.5, 40, 50])).to.equal("Sorry, your ticket didn't win!");
        expect(lottery.secondChance(10, ['10'])).to.equal("Sorry, your ticket didn't win!");
        expect(lottery.secondChance(10, [])).to.equal("Sorry, your ticket didn't win!");
    });
});
