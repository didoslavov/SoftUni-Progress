function characterInRange(firstChar, lastChar) {
    
    const elementsInRange = function (startElement, endElement) {
        const start = Math.min(startElement.charCodeAt(), endElement.charCodeAt());
        const end = Math.max(endElement.charCodeAt(), startElement.charCodeAt());

        const printResult = [];
        for (let i = start + 1; i < end; i++) {
            printResult.push(String.fromCharCode(i));
        }
        return printResult.join(' ');
    };

    console.log(elementsInRange(firstChar, lastChar));
}

characterInRange('C',
'#');
