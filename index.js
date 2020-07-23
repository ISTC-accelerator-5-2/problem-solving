// https://github.com/tonsky/FiraCode

// factorial
const factorial = n => {
  let result = 1;
  for (let i = 2; i <= n; i++)
    result *= i;
  return result;
};

const recursiveFactorial = n => {
  if (n < 2)
    return 1;
  if (n === 2)
    return 2;
  return n * recursiveFactorial(n-1);
};

// recursiveFactorial(5)
// 5 * recursiveFactorial(4)
// 5 * 4 * recursiveFactorial(3)
// 5 * 4 * 3 * recursiveFactorial(2)
// 5 * 4 * 3 * 2

// average
const testArray = [1, 5, 6, 7, 2, 4, -6, 0];

const sumOfArray = arr => {
  let result = 0;
  for (let i = 0; i < arr.length; i++)
    result += arr[i];
  
  return result;
};

const average = array => {
  const sum = sumOfArray(array);
  return sum / array.length;
};

// stars
const stars = n => {
  for (let i = 0; i <= n; i++) {
    let line = '';
    for (let j = 0; j < i; j++) {
      line += '*';
    }
    console.log(line);
  }
};

// stars1
const stars1 = n => {
  for (let lineNumber = 0; lineNumber <= n; lineNumber++) {
    let line = '';
    for (let dashCount = 0; dashCount < n - lineNumber; dashCount++) {
      line += '-';
    }
    for (let starCount = 0; starCount < lineNumber; starCount++) {
      line += '*';
    }
    console.log(line);
  }
};

// truthy falsy
// 0
// -0
// ""
// null
// undefined
// NaN
// false

Boolean(0);
Boolean('hello');
!!'hello';
!!0;
!!undefined;

// truthy
// everything that is not falsy
Boolean({});
Boolean([]);

// AND OR
true && false;
true || false;
7 && false;
true || 8;
6 && true && undefined && 'hello';
true && true && 'hello' && 'bye';
(true && false) || 6;


// Built-in methods
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// console.log('string'.toUpperCase());
// console.log('HELLO'.toLowerCase());
// console.log('HELLO'.toLowerCase().toUpperCase());
// console.log('HELLO'.startsWith('he'));
// console.log('HELLO'.indexOf('L'));
// console.log('HELLO'.indexOf('b'));

// Array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/array
const arr = [];
// console.log(arr);
arr.push(6);
arr.push(1);
arr.push([]);
arr.push({});
arr.push('5');
// console.log(arr);
const elem = arr.pop();
// console.log(elem);
// console.log(arr);
// .forEach
const sumOfArrayForEach = arr => {
  let result = 0;
  arr.forEach(element => {
    result += element;
  });
  // arr.forEach(function(element) {
  //   result += element;
  // });
  return result;
};

// console.log(testArray);
// console.log(sumOfArrayForEach(testArray));

// .map
const arr1 = [4,5,6,7];
const newArray = arr1.map(element => element * 2);
// console.log(arr1);
// console.log(newArray);

// Homework
// recursive sumFactorial

// recursive fibonacci -> 0 1 1 2 3 5 8 13 21
// fibonacci(4) -> 3
// fibonacci(0) -> 0
// fibonacci(1) -> 1

// isPrime
// const isPrime (n: number) => Boolean;
// isPrime(5) -> true;
// isPrime(4) -> false;
// isPrime('b') -> 'error';

// count number of substring in a string
// const countSubString = (baseString: string, char: string) => array;
// countSubString('HELLO', 'L') -> [2, 3]
// countSubString('hello', 'L') -> [2, 3]
// countSubString('HELLO', 'l') -> [2, 3]
// countSubString('HELLO', 'B') -> []

// squareArray
// const squareArray = (array) -> array;
// squareArray([1,2,3]) -> [1,4,9];