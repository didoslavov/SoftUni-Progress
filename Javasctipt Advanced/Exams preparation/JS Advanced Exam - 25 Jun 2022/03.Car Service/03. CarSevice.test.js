const { expect } = require('chai');
const { carService } = require('./03. Car Service_Resources.js');

describe('Tests for carService', () => {
    it('isItExpensive', () => {
        expect(carService.isItExpensive('Engine')).to.equal('The issue with the car is more severe and it will cost more money');
        expect(carService.isItExpensive('Transmission')).to.equal(
            'The issue with the car is more severe and it will cost more money'
        );
        expect(carService.isItExpensive('Wheel')).to.equal('The overall price will be a bit cheaper');
    });

    it('discount', () => {
        expect(() => carService.discount(10, 10)).to.not.throw();
        expect(() => carService.discount(10, '10')).to.throw();
        expect(() => carService.discount('10', 10)).to.throw();
        expect(() => carService.discount('10', '10')).to.throw();
        expect(() => carService.discount([10], '10')).to.throw();
        expect(() => carService.discount([10], [10])).to.throw();
        expect(() => carService.discount([10], {})).to.throw();
        expect(() => carService.discount({}, [10])).to.throw();
        expect(carService.discount(2, 2)).to.equal('You cannot apply a discount');
        expect(carService.discount(1, 2)).to.equal('You cannot apply a discount');
        expect(carService.discount(7, 10)).to.equal('Discount applied! You saved 1.5$');
        expect(carService.discount(8, 10)).to.equal('Discount applied! You saved 3$');
    });

    it('partsToBuy', () => {
        expect(() => carService.partsToBuy(1, 1)).to.throw();
        expect(() => carService.partsToBuy('', '')).to.throw();
        expect(() => carService.partsToBuy('', 1)).to.throw();
        expect(() => carService.partsToBuy({}, 1)).to.throw();
        expect(() => carService.partsToBuy(1, [])).to.throw();
        expect(() => carService.partsToBuy([], [])).to.not.throw();
        expect(
            carService.partsToBuy(
                [
                    { part: 'blowoff valve', price: 145 },
                    { part: 'coil springs', price: 230 },
                ],
                ['blowoff valve', 'coil springs']
            )
        ).to.equal(375);
        expect(
            carService.partsToBuy(
                [
                    { part: 'blowoff valve', price: 145 },
                    { part: 'coil springs', price: 230 },
                ],
                ['blowoff valve', 'injector', 'wheel']
            )
        ).to.equal(145);
        expect(
            carService.partsToBuy(
                [
                    { part: 'blowoff valve', price: 200 },
                    { part: 'coil springs', price: 230 },
                    { part: 'coil springs', price: 230 },
                    { part: 'coil springs', price: 230 },
                ],
                ['blowoff valve', 'coil springs']
            )
        ).to.equal(890);
        expect(
            carService.partsToBuy(
                [
                    { part: 'blowoff valve', price: 200 },
                    { part: 'blowoff valve', price: 200 },
                    { part: 'blowoff valve', price: 200 },
                    { part: 'blowoff valve', price: 200 },
                    { part: 'blowoff valve', price: 200 },
                    { part: 'coil springs', price: 230 },
                    { part: 'coil springs', price: 230 },
                    { part: 'coil springs', price: 230 },
                ],
                ['blowoff valve', 'coil springs']
            )
        ).to.equal(1690);
        expect(carService.partsToBuy([], ['blowoff valve', 'coil springs'])).to.equal(0);
    });
});
