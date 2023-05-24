const {expect} = require('chai');
const { chooseYourCar } = require('./03chooseYourCar');

describe('Tests for chooseYourCar object', () => {

    describe('choosingType function', () => {
        it('Throw error if year is invalid' , () => {
            expect(() => chooseYourCar.choosingType('sedan', 'red', 1899)).to.throw('Invalid Year!');
            expect(() => chooseYourCar.choosingType('sedan', 'red', 2023)).to.throw('Invalid Year!');
        });
        it('Should throw error if type is not Sedan', () => {
            expect(() => chooseYourCar.choosingType('cabrio', 'red', 2000)).to.throw('This type of car is not what you are looking for.');
            expect(chooseYourCar.choosingType('Sedan', 'red', 2009)).to.equal(`This Sedan is too old for you, especially with that red color.`);
        });

        it('Should work as expected', () => {
            expect(() => chooseYourCar.choosingType('sedan', 'red', 2000)).to.not.throw('Invalid Year!');
            expect(() => chooseYourCar.choosingType('Sedan', 'red', 2020)).to.not.throw('This type of car is not what you are looking for.');
            expect(chooseYourCar.choosingType('Sedan', 'red', 2010)).to.equal('This red Sedan meets the requirements, that you have.');
        });
    });

    describe ('brandName function', () => {
        it('Throw error if params are invalid', () => {
            expect(() => chooseYourCar.brandName(['BMW', 'Renault'], '1')).to.throw('Invalid Information!');
            expect(() => chooseYourCar.brandName(['BMW', 'Renault'], [])).to.throw('Invalid Information!');
            expect(() => chooseYourCar.brandName(['BMW', 'Renault'], 3)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.brandName(['BMW', 'Renault'], -3)).to.throw('Invalid Information!');

            expect(() => chooseYourCar.brandName(1, 1)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.brandName({}, 1)).to.throw('Invalid Information!');
        });

        it('Should work as expected', () => {
            expect(() => chooseYourCar.brandName(['BMW', 'Renault'], 1)).to.not.throw('Invalid Information!');
            expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 1)).to.equal('BMW, Peugeot');
        });
    });

    describe('carFuelConsumption function', () => {
        it('Throw error if params are not number or negative one', () => {
            expect(() => chooseYourCar.carFuelConsumption(-1, -1)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.carFuelConsumption(-1, 0)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.carFuelConsumption(0, -1)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.carFuelConsumption(0, '1')).to.throw('Invalid Information!');
            expect(() => chooseYourCar.carFuelConsumption('1', 1)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.carFuelConsumption('1', '1')).to.throw('Invalid Information!');
        });

        it('Should work as expected', () => {
            expect(chooseYourCar.carFuelConsumption(100, 10)).to.equal('The car burns too much fuel - 10.00 liters!')
            expect(chooseYourCar.carFuelConsumption(100, 5)).to.equal('The car is efficient enough, it burns 5.00 liters/100 km.')
            expect(chooseYourCar.carFuelConsumption(100, 7)).to.equal('The car is efficient enough, it burns 7.00 liters/100 km.')
        });
    });
});

