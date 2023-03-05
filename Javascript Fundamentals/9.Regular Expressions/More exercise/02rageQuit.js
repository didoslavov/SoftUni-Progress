function rageQuit(input) {
  let string = input.shift();
  const pattern = /([0-9]+)/g;
  const matches = string.match(pattern);
  let result = '';
  let startIndex = 0;

  for (const match of matches) {
    const substring = string.substring(
      startIndex,
      string.indexOf(Number(match))
    );
    result += substring.repeat(Number(match)).toUpperCase();
    string = string.replace(substring + match, '');
  }

  let uniqueSymbols = [...new Set(result.split(''))].length;
  console.log(`Unique symbols used: ${uniqueSymbols}`);
  console.log(result);
}

rageQuit(['a3']);
console.log('-------------');
rageQuit(['aSd2&5s@1']);
console.log('---------------');
rageQuit([
  'e-!btI17z=E:DMJ19U1Tvg VQ>11P"qCmo.-0YHYu~o%/%b.}a[=d15fz^"{0^/pg.Ft{W12`aD<l&$W&)*yF1WLV9_GmTf(d0($!$`e/{D\'xi]-~17 *%p"%|N>zq@ %xBD18<Y(fHh`@gu#Z#p"Z<v13fI]\':\\Iz.17*W:\\mwV`z-15g@hUYE{_$~}+X%*nytkW15',
]);
