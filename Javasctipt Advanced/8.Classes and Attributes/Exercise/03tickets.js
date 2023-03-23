function createAndSortTickets(tickets, sortCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    const result = [];

    for (const ticketInfo of tickets) {
        const [destination, price, status] = ticketInfo.split('|');
        result.push(new Ticket(destination, Number(price), status));
    }

    return result.sort((a,b) => {
        if (sortCriteria === 'price') {
            return a[sortCriteria] - b[sortCriteria];
        }
        return a[sortCriteria].localeCompare(b[sortCriteria]);
    });
}

console.log(createAndSortTickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'))