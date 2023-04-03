function encryptPassword(input) {
    const n = input.shift();
    const pattern = /(.+)>(?<first>[0-9]{3})\|(?<second>[a-z]{3})\|(?<third>[A-Z]{3})\|(?<fourth>[^><]{3})<\1/;

    for (let i = 0; i < n; i++) {
        if (pattern.test(input[i])) {
            const matches = pattern.exec(input[i]);

            const message = matches.groups.first + matches.groups.second + matches.groups.third + matches.groups.fourth;
            console.log(`Password: ${message}`); 
        } else {
            console.log('Try another password!');
        }
    }
}

encryptPassword(["3",
"##>00|no|NO|!!!?<###",
"##>123|yes|YES|!!!<##",
"$$<111|noo|NOPE|<<>$$"]);
console.log('---------------');
encryptPassword(["5",
"aa>111|mqu|BAU|mqu<aa",
"()>111!aaa!AAA!^&*<()",
"o>088|abc|AAA|***<o",
"asd>asd|asd|ASD|asd<asd",
"*>088|zzzz|ZzZ|123<*"]);