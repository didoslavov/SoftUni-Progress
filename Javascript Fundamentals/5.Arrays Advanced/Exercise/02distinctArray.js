function distinctArray(integers) {
    const distinctIntegers = [];
    const integersLength = integers.length;

    for (let i = 0; i < integersLength; i++) {
        const integer = integers[i];
        if (!distinctIntegers.includes(integer)){
            distinctIntegers.push(integer);
        }
    }
    console.log(distinctIntegers.join(' '));
}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);

