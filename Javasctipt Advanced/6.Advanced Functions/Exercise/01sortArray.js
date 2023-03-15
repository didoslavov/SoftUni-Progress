function sortArray(arr, arg) {
    const result = sorter();

    return result[arg](arr);

    function sorter() {
        return {
            asc(arr) {
                return arr.sort((a,b) => a - b);
            },
            desc(arr) {
                return arr.sort((a,b) => b - a);
            }
        }
    }
}

console.log(sortArray([14, 7, 17, 6, 8], 'desc'));