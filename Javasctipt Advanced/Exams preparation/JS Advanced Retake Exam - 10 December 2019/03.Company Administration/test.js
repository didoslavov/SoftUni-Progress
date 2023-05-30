const { expect } = require('chai');
const companyAdministration = require('./companyAdministration.js');

describe('companyAdministration tests', () => {
    it('hiringEmployee', () => {
        expect(() => companyAdministration.hiringEmployee('Ivan', 'Driver', 10)).to.throw();
        expect(() => companyAdministration.hiringEmployee('George', 'IT', 10)).to.throw();
        expect(() => companyAdministration.hiringEmployee('Peter', 'Programmer', 10)).to.not.throw();

        expect(companyAdministration.hiringEmployee('Ivan', 'Programmer', 5)).to.equal(
            'Ivan was successfully hired for the position Programmer.'
        );
        expect(companyAdministration.hiringEmployee('Peter', 'Programmer', 3)).to.equal(
            'Peter was successfully hired for the position Programmer.'
        );
        expect(companyAdministration.hiringEmployee('George', 'Programmer', 2)).to.equal(
            'George is not approved for this position.'
        );
    });

    it('calculateSalary', () => {
        expect(() => companyAdministration.calculateSalary('')).to.throw();
        expect(() => companyAdministration.calculateSalary('10')).to.throw();
        expect(() => companyAdministration.calculateSalary([])).to.throw();
        expect(() => companyAdministration.calculateSalary({})).to.throw();
        expect(() => companyAdministration.calculateSalary(-1)).to.throw();
        expect(() => companyAdministration.calculateSalary(10)).to.not.throw();

        expect(companyAdministration.calculateSalary(0)).to.equal(0);
        expect(companyAdministration.calculateSalary(1.5)).to.equal(22.5); // !!!
        expect(companyAdministration.calculateSalary(10)).to.equal(150);
        expect(companyAdministration.calculateSalary(160)).to.equal(2400);
        expect(companyAdministration.calculateSalary(200)).to.equal(4000);
    });

    it('firedEmployee', () => {
        expect(() => companyAdministration.firedEmployee('', '')).to.throw();
        expect(() => companyAdministration.firedEmployee([], '')).to.throw();
        expect(() => companyAdministration.firedEmployee({}, '')).to.throw();
        expect(() => companyAdministration.firedEmployee(1, '')).to.throw();
        expect(() => companyAdministration.firedEmployee('', 1)).to.throw();
        expect(() => companyAdministration.firedEmployee('', {})).to.throw();
        expect(() => companyAdministration.firedEmployee([], [])).to.throw();
        expect(() => companyAdministration.firedEmployee([], {})).to.throw();
        expect(() => companyAdministration.firedEmployee(['Ivan', 'Peter'], 2)).to.throw();
        expect(() => companyAdministration.firedEmployee(['Ivan', 'Peter'], -1)).to.throw();
        expect(() => companyAdministration.firedEmployee(['Ivan', 'Peter'], 1)).to.not.throw();

        expect(companyAdministration.firedEmployee(['Ivan', 'Peter', 'George'], 1)).to.equal('Ivan, George');
        expect(companyAdministration.firedEmployee(['Ivan', 'Peter', 'George', 'Dragan', 'Marie', 'Lucy'], 4)).to.equal(
            'Ivan, Peter, George, Dragan, Lucy'
        );
    });
});
