const { expect } = require('chai');
const { library } = require('./03.Library/library.js');

describe('Tests for Library', () => {
    it('calcPriceOfBook', () => {
        expect(() => library.calcPriceOfBook(10, 10)).to.throw();
        expect(() => library.calcPriceOfBook('10', '')).to.throw();
        expect(() => library.calcPriceOfBook(10, '10')).to.throw();
        expect(() => library.calcPriceOfBook({}, [])).to.throw();
        expect(() => library.calcPriceOfBook('Book Name', 10)).not.to.throw();

        expect(library.calcPriceOfBook('Some book name', 1980)).to.equal('Price of Some book name is 10.00');
        expect(library.calcPriceOfBook('Some book name', 1979)).to.equal('Price of Some book name is 10.00');
        expect(library.calcPriceOfBook('Some book name', 1981)).to.equal('Price of Some book name is 20.00');
        expect(library.calcPriceOfBook('Book', 2000)).to.equal('Price of Book is 20.00');
    });

    it('findBook', () => {
        expect(() => library.findBook([], '')).to.throw();
        expect(() => library.findBook(['Troy', 'Life Style', 'Torronto'], '')).to.not.throw();

        expect(library.findBook(['Troy', 'Life Style', 'Torronto'], 'Troy')).to.equal('We found the book you want.');
        expect(library.findBook(['Troy', 'Life Style', 'Torronto'], 'Life Style')).to.equal('We found the book you want.');
        expect(library.findBook(['Troy', 'Life Style', 'Torronto'], 'Some other Book')).to.equal(
            'The book you are looking for is not here!'
        );
        expect(library.findBook(['Troy', 'Life Style', 'Torronto'], 'Another try')).to.equal(
            'The book you are looking for is not here!'
        );
    });

    it('arrangeTheBooks', () => {
        expect(() => library.arrangeTheBooks('')).to.throw();
        expect(() => library.arrangeTheBooks([])).to.throw();
        expect(() => library.arrangeTheBooks({})).to.throw();
        expect(() => library.arrangeTheBooks('6')).to.throw();
        expect(() => library.arrangeTheBooks(6.5)).to.throw();
        expect(() => library.arrangeTheBooks(-1)).to.throw();
        expect(() => library.arrangeTheBooks(6)).not.to.throw();
        expect(() => library.arrangeTheBooks(0)).not.to.throw();

        expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
        expect(library.arrangeTheBooks(32)).to.equal('Great job, the books are arranged.');
        expect(library.arrangeTheBooks(0)).to.equal('Great job, the books are arranged.');
        expect(library.arrangeTheBooks(41)).to.equal('Insufficient space, more shelves need to be purchased.');
        expect(library.arrangeTheBooks(52)).to.equal('Insufficient space, more shelves need to be purchased.');
    });
});
