function extractFile(string) {
    const strings = [...string.split('\\')];
    const file = strings.pop().split('.');
    let fileName = '';
    let extension = '';

    if (file.length > 2) {
        extension = file.pop();
        fileName = file.join('.');
    } else {
        extension = file.pop();
        fileName = file[0];
    }

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx');