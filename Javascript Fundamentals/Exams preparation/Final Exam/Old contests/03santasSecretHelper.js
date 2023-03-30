function secretHelper(input) {
    const key = Number(input.shift());
    const goodKids = [];

    for (const line of input) {
        if (line === 'end') {
            break;
        }

        const message = decodeMsg(line, key);
        const pattern = /@(?<name>[a-zA-Z]+)[^-@!:>]+!(?<flag>G|N)!/gm;
        const match = pattern.exec(message)
        
        if (!match || match.groups.flag !== 'G') {
            continue;
        }

        goodKids.push(match.groups.name);
    }

    console.log(goodKids.join('\n'));

    function decodeMsg(msg, key) {
        let message = '';

        for (const ch of msg) {
            message += String.fromCharCode((ch.charCodeAt() - key));
        }

        return message.trim();
    }   
}

secretHelper([
    '3',
    "N}eideidmk$'(mnyenmCNlpamnin$J$",
    'ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge',
    'ppqmkkkmnolmnnCEhq/vkievk$Q$',
    'yyegiivoguCYdohqwlqh/kguimhk$J$',
    'end'
  ]  
  );