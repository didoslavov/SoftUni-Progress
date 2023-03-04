function nxnMatrix(number) {

    const rows = n => {
        let row = [];
        for (let i = 0; i < n; i++) {
            row.push(n);
        }
        return row.join(' ');
    }

    const cols = n => {
        for (let i = 0; i < n; i++) {
            console.log(rows(n));
        }
    }
    return cols(number);
}

nxnMatrix(7);