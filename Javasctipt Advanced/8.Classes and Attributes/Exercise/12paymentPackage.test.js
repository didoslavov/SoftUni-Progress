const { expect } = require('chai');
const { PaymentPackage } = require('./12paymentPackage');

describe('Tests for PaymentPackage class', () => {
  it('Constructor tests', () => {
    const instance = new PaymentPackage('Name', 200);
    const expected = [
      `Package: Name`,
      `- Value (excl. VAT): 200`,
      `- Value (VAT 20%): 240`,
    ];
    expect(instance._name).to.equal('Name');
    expect(instance._value).to.equal(200);
    expect(instance._VAT).to.equal(20);
    expect(instance._active).to.equal(true);
    expect(instance.toString()).to.equal(expected.join('\n'));
  });

  describe('Tests for the Name property', () => {
    it('Should throw error if passed Name is empty string', () => {
      expect(() => new PaymentPackage('', 123)).to.throw(
        'Name must be a non-empty string'
      );
    });
    it('Should throw error if passed Name is number', () => {
      expect(() => new PaymentPackage(1234, 123)).to.throw(
        'Name must be a non-empty string'
      );
    });
    it('Should throw error if passed Name is array', () => {
      expect(() => new PaymentPackage([], 123)).to.throw(
        'Name must be a non-empty string'
      );
    });
    it('Should throw error if passed Name is object', () => {
      expect(() => new PaymentPackage({}, 123)).to.throw(
        'Name must be a non-empty string'
      );
    });
    it('Should not throw error if passed Name is not empty string', () => {
      expect(() => new PaymentPackage('Test', 123)).to.not.throw(
        'Name must be a non-empty string'
      );
    });
    it('Should change name if the passed name is correct', () => {
      const test = new PaymentPackage('Test', 123);
      test.name = 'TestName';
      expect(test.name).to.equal('TestName');
    });
  });

  describe('Tests for the Value property', () => {
    it('Should throw error if passed Value is string', () => {
      expect(() => new PaymentPackage('Test', '123')).to.throw(
        'Value must be a non-negative number'
      );
    });
    it('Should throw error if passed Value is array', () => {
      expect(() => new PaymentPackage('Test', [])).to.throw(
        'Value must be a non-negative number'
      );
    });
    it('Should throw error if passed Value is object', () => {
      expect(() => new PaymentPackage('Test', {})).to.throw(
        'Value must be a non-negative number'
      );
    });
    it('Should throw error if passed Value is negative number', () => {
      expect(() => new PaymentPackage('Test', -123)).to.throw(
        'Value must be a non-negative number'
      );
    });
    it('Should not throw error if passed Value is possitive number', () => {
      expect(() => new PaymentPackage('Test', 123)).to.not.throw(
        'Value must be a non-negative number'
      );
    });
    it('Should change Value to 0', () => {
      expect(() => new PaymentPackage('Test', 0)).to.not.throw('Value must be a non-negative number');
    });
  });

  describe('Tests for the Vat property', () => {
    it('Should throw error if passed Vat is string', () => {
      const testVat = new PaymentPackage('TestName', 123);
      expect(() => (testVat.VAT = '123')).to.throw(
        'VAT must be a non-negative number'
      );
    });
    it('Should throw error if passed Vat is array', () => {
      const testVat = new PaymentPackage('TestName', 123);
      expect(() => (testVat.VAT = [])).to.throw(
        'VAT must be a non-negative number'
      );
    });
    it('Should throw error if passed Vat is object', () => {
      const testVat = new PaymentPackage('TestName', 123);
      expect(() => (testVat.VAT = {})).to.throw(
        'VAT must be a non-negative number'
      );
    });
    it('Should throw error if passed Vat is negative number', () => {
      const testVat = new PaymentPackage('TestName', 123);
      expect(() => (testVat.VAT = -123)).to.throw(
        'VAT must be a non-negative number'
      );
    });
    it('Should not throw error if passed Vat is possitive number', () => {
      const testVat = new PaymentPackage('TestName', 123);
      expect(() => (testVat.VAT = 123)).to.not.throw(
        'VAT must be a non-negative number'
      );
    });
  });

  describe('Tests for the Active property', () => {
    it('Should throw error if passed Active is string', () => {
      const testVat = new PaymentPackage('TestName', 123);
      expect(() => (testVat.active = '123')).to.throw(
        'Active status must be a boolean'
      );
    });
    it('Should throw error if passed Active is array', () => {
      const testVat = new PaymentPackage('TestName', 123);
      expect(() => (testVat.active = [])).to.throw(
        'Active status must be a boolean'
      );
    });
    it('Should throw error if passed Active is object', () => {
      const testVat = new PaymentPackage('TestName', 123);
      expect(() => (testVat.active = {})).to.throw(
        'Active status must be a boolean'
      );
    });
    it('Should throw error if passed Active is negative number', () => {
      const testVat = new PaymentPackage('TestName', 123);
      expect(() => (testVat.active = -123)).to.throw(
        'Active status must be a boolean'
      );
    });
    it('Should not throw error if passed Active is possitive number', () => {
      const testVat = new PaymentPackage('TestName', 123);
      expect(() => (testVat.active = true)).to.not.throw(
        'Active status must be a boolean'
      );
    });
  });

  describe('Tests for the toString() method of the class', () => {
    it('Should return a string if the Name and Value are correct', () => {
      const test = new PaymentPackage('TestName', 123);
      const expected = [
        `Package: TestName`,
        `- Value (excl. VAT): 123`,
        `- Value (VAT 20%): 147.6`,
      ];

      expect(test.toString()).to.equal(expected.join('\n'));
    });
    it('Should return a string if the Name, Value and VAT are correct', () => {
      const test = new PaymentPackage('TestName', 123);
      test.VAT = 30;
      const expected = [
        `Package: TestName`,
        `- Value (excl. VAT): 123`,
        `- Value (VAT 30%): 159.9`,
      ];

      expect(test.toString()).to.equal(expected.join('\n'));
    });
    it('Should return a string if the Name, Value and Active are correct', () => {
      const test = new PaymentPackage('TestName', 123);
      test.active = false;
      const expected = [
        `Package: TestName (inactive)`,
        `- Value (excl. VAT): 123`,
        `- Value (VAT 20%): 147.6`,
      ];

      expect(test.toString()).to.equal(expected.join('\n'));
    });
    it('Should return a string if the Name, Value, VAT and Active are correct', () => {
      const test = new PaymentPackage('TestName', 123);
      test.VAT = 30;
      test.active = false;
      const expected = [
        `Package: TestName (inactive)`,
        `- Value (excl. VAT): 123`,
        `- Value (VAT 30%): 159.9`,
      ];

      expect(test.toString()).to.equal(expected.join('\n'));
    });
  });
});
