function cutAndReverse(reversedString) {
    const string = reversedString.split('').reverse().join('');
    const firstString = string.substring(string.length / 2);
    const secondString =  string.substring(0, string.length / 2);

    console.log(firstString);
    console.log(secondString);
}

cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');