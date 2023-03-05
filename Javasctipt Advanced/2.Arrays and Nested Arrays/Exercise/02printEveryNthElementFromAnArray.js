function printNthElement(array, step) {
   const result = array.filter((_, index) => index % step === 0);
   
   return result;
}

console.log(printNthElement(['5', 
'20', 
'31', 
'4', 
'20'], 
2));
console.log('--------------');
console.log(printNthElement(['dsa',
'asd', 
'test', 
'tset'], 
2));
console.log('--------------');
console.log(printNthElement(['1', 
'2',
'3', 
'4', 
'5'], 
6));