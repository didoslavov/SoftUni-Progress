class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.capacity == 0) {
            throw new Error('Not enough space in the collection.');
        }

        this.books.push({ bookName, bookAuthor, payed: false });

        this.capacity--;

        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }

    payBook(bookName) {
        const book = this.books.find((b) => b.bookName == bookName);

        if (!book) {
            throw new Error(`${bookName} is not in the collection.`);
        }

        if (book.payed) {
            throw new Error(`${bookName} has already been paid.`);
        }

        book.payed = true;

        return `${bookName} has been successfully paid.`;
    }

    removeBook(bookName) {
        const book = this.books.find((b) => b.bookName == bookName);

        if (!book) {
            throw new Error("The book, you're looking for, is not found.");
        }

        if (!book.payed) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }

        this.capacity++;
        this.books.filter((b) => b.bookName != bookName);
        return `${bookName} remove from the collection.`;
    }

    getStatistics(bookAuthor) {
        if (!bookAuthor) {
            const books = this.books
                .sort((a, b) => a.bookName.localeCompare(b.bookName))
                .map((b) => `${b.bookName} == ${b.bookAuthor} - ${b.payed ? 'Has Paid' : 'Not Paid'}.`);
            return `The book collection has ${this.capacity} empty spots left.\n${books.join('\n')}`;
        }

        const book = this.books.find((b) => b.bookAuthor == bookAuthor);

        if (!book) {
            throw new Error(`${bookAuthor} is not in the collection.`);
        }

        return `${book.bookName} == ${book.bookAuthor} - ${book.payed ? 'Has Paid' : 'Not Paid'}.`;
    }
}

const library = new LibraryCollection(5);
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());
