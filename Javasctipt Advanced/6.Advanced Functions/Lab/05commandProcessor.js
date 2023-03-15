function solution() {
    let res = '';

    return {
        append(string) {
            res += string;
        },
        removeStart(n) {
            res = res.substring(n);
        },
        removeEnd(n) {
            res = res.substring(0, res.length - n);
        },
        print() {
            console.log(res);
        },
    }
}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();