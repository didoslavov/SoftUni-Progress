const { chai, expect } = require('chai');
const bookSelection = require('./bookSelection.js');

describe('Test for bookSelection', () => {
    it('isGenreSuitable', () => {
        expect(bookSelection.isGenreSuitable('Thriller', 12)).to.equal(
            'Books with Thriller genre are not suitable for kids at 12 age'
        );
        expect(bookSelection.isGenreSuitable('Horror', 12)).to.equal(
            'Books with Horror genre are not suitable for kids at 12 age'
        );
        expect(bookSelection.isGenreSuitable('Thriller', 5)).to.equal(
            'Books with Thriller genre are not suitable for kids at 5 age'
        );
        expect(bookSelection.isGenreSuitable('Horror', 5)).to.equal('Books with Horror genre are not suitable for kids at 5 age');

        expect(bookSelection.isGenreSuitable('Thriller', 13)).to.equal('Those books are suitable');
        expect(bookSelection.isGenreSuitable('Horror', 13)).to.equal('Those books are suitable');
        expect(bookSelection.isGenreSuitable('Comedy', 10)).to.equal('Those books are suitable');
        expect(bookSelection.isGenreSuitable('Comedy', 25)).to.equal('Those books are suitable');
    });

    it('isItAffordable', () => {
        expect(() => bookSelection.isItAffordable('20', 10)).to.throw();
        expect(() => bookSelection.isItAffordable(10, '20')).to.throw();
        expect(() => bookSelection.isItAffordable('10', '20')).to.throw();
        expect(() => bookSelection.isItAffordable([], 10)).to.throw();
        expect(() => bookSelection.isItAffordable(10, {})).to.throw();
        expect(() => bookSelection.isItAffordable(10, 10)).to.not.throw();
        expect(() => bookSelection.isItAffordable(50, 62)).to.not.throw();

        expect(bookSelection.isItAffordable(20, 50)).to.equal('Book bought. You have 30$ left');
        expect(bookSelection.isItAffordable(20, 10)).to.equal("You don't have enough money");
    });

    it('suitableTitles', () => {
        expect(() => bookSelection.suitableTitles('', '')).to.throw();
        expect(() => bookSelection.suitableTitles([], [])).to.throw();
        expect(() => bookSelection.suitableTitles({}, '')).to.throw();
        expect(() => bookSelection.suitableTitles('', {})).to.throw();
        expect(() => bookSelection.suitableTitles(10, '')).to.throw();
        expect(() => bookSelection.suitableTitles([], 10)).to.throw();
        expect(() => bookSelection.suitableTitles([], '')).to.not.throw();

        const books = [
            { title: 'The Matrix', genre: 'Fantasy' },
            { title: 'Avatar', genre: 'Fantasy' },
            { title: 'How High', genre: 'Comedy' },
        ];
        const wantedGenre = 'Fantasy';
        const result = bookSelection.suitableTitles(books, wantedGenre);

        expect(result[0]).to.equal('The Matrix');
        expect(result[1]).to.equal('Avatar');
        expect(result.length).to.equal(2);
    });
});
