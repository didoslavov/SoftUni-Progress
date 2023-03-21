function fancyBarcodes(input) {
    const pattern = /([@])[#]{1,}([A-Z][A-Za-z0-9]{4,}[A-Z])\1[#]{1,}/;
    input.shift();

    for (const item of input) {
        if (!pattern.test(item)) {
            console.log('Invalid barcode');
            continue;
        }
        
        let groupNumbers = item.split('').filter((ch) => !Number.isNaN(Number(ch)));
        let groupNumber = groupNumbers.length ? groupNumbers.join('') : '00';
        
        console.log(`Product group: ${groupNumber}`);
    }
}

fancyBarcodes(["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"])