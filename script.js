// let a = 10;
// let = 20;



// console.log(document.URL);

// let a = 15;
// let b = 10;

// const summ = a < b ? console.log('true') : console.log('false');

// const MATH_PI = 3.14;
// const radius = 1000;

// let result;

// result = radius !== 0
// ? MATH_PI * (radius * radius)
// : console.log('Radius can not be equal to zero');

// // console.log(result);
// const userName = 'Mark';
// const discount = userName === 'Tony'
//   ? '30%'
//   : '0%';

//   console.log('Congrats! Your discount is', + discount);

//   const res = radius !== 0 && MATH_PI === 3.14
//     ? MATH_PI * (radius * radius)
//     :'Radius can not be equal to zero';

//     console.log(res);

//     const checkRadius = radius == 10 && radius < 100 ? 'ok' : 'not ok';
//     console.log(checkRadius);

// // 8.Write a JavaScript program where the program takes a random integer between 1 to 10,
// // the user is then prompted to input a guess number.
// // If the user input matches with guess number,
// // the program will display a message "Good Work" otherwise display a message "Not matched".
// // --------------------------------------------------------------------------------------------------------------

// // MYJS!
// const a = 3;
// let invalue = prompt('Guess number from 1 to 10!Good Luck!');
// let result;
// result = invalue == a
//  ? 'Good Work'
//  : 'Not Matched';
// console.log(result);

// example
//  const num = Math.ceil(Math.random() * 10);
// console.log(num);
//  const gnum = prompt('Guess the number between 1 and 10 inclusive');
//  if (gnum == num)
//    console.log('Matched');
//   else
//    console.log('Not matched, the number was '+gnum);

// //--------------------------------------------------------------------------------------------------------------

// //9. Write a JavaScript program to calculate days left until next Christmas.

// let d = new Date();
// const cmas =  new Date(d.getFullYear(), 11, 25);
// if (d.getMonth()==11 && d.getDate() > 25) {
//   cmas.setFullYear(cmas.getFullYear() + 1);
// }

// const one_day = 1000*60*60*24;
// console.log(`${ Math.ceil ((cmas.getTime() - d.getTime()) / (one_day))} days left until Christmas!`)
// // -------------------------------------------------------------

// function multiply (){
//   let v1 = document.getElementById('value1').value;
//   let v2 = document.getElementById('value2').value;
//   let result = v1*v2;
//   document.getElementById('result1').innerHTML = 'The Result is :' + v1*v2;
// }
// function divide (){
//   let v1 = document.getElementById('value1').value;
//   let v2 = document.getElementById('value2').value;
//   let result = v1/v2;
//   document.getElementById('result1').innerHTML = 'The Result is :' + result;
// }

//-----------------------------------------------------------------------------------------

// function cToF (celsius){
//   let cTemp = celsius;
//   let cToFahr = cTemp * 9 / 5 + 32;
//   let message = cTemp+'\xBOC is ' + cToFahr + ' \xBOF.';
//   console.log(message);
// }

// ------------------------------------05.11
// const Marvel = {
//   yearCereation: 1939,
//   mainCharacter: 'Spider Man',
//   mainTeam: 'Avengers',
// };

// const DC = {
//   yearCereation: 2013,
//   mainCharacter: 'Batman',
//   mainTeam: 'Justice League',

//  };
//  console.log('before', Marvel);
//  const newField = 'owner';
// Marvel[newField] = 'Disney';

//  Marvel.owner = 'Disney';
//  console.log('after', Marvel);

//  Object.freeze(DC);

//  DC.yearCereation = 2021;

//  console.log(Object.isExtensible(DC));

// const MarvelKiller = Object.assign({}, Marvel);
//  MarvelKiller.better = true;
//  console.log(MarvelKiller);

//  hasOwnproperty

//  if (!DC.hasOwnProperty('owner')) {
//   DC[newField] = 'Warner Brothers'
// };

//  console.log(DC);

//  function specnumb (n)  {

//    if (n > 19) {
//     return (n - 19) * 3;

// } else {
//     return 19 - n;
//    }
//  }

//  console.log(specnumb (18));

//  const givenNumber = (a, b) => {

//  if (a === 50 && b === 50 || a+b === 50){
//    return 'true'
//  } else {
//    return 'false'
//  }

//  }

// console.log(givenNumber(20,20))

// // 19. Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.

//  const givenInt = (n) => {

//    return (n >= 20 && n <= 100 || n <=400)
//  };

// console.log(givenInt(25));

//===========================
// Arrow Function
//===========================

// const plus = (x = 0,y = 0) => x + y;

// const plusRes = plus(1,2)
// // console.log(plusRes);

// const withoutArgs = () => console.log('Hello world');
// const singleArg = (x = 1) => x * 2;
// // console.log(singleArg);

// const moreActions = (a,b) => {
//  a *= 2;
//  b *= 3;
//  return a+b;
// };
// console.log(moreActions(2,2));

// const retunrObj = (str = '') => {
//   return {
//     value : str,
//     length : str.length,
//   }
// };

// console.log(retunrObj('Hello'));

// function plusFoo (x,y) {
//   console.log(arguments)
//   return x + y;
// }

// plusFoo (1, 2, 3, 'Hello');

// const obj = {
//   firstName : 'roman',
//   getFirstName() {
//     console.log(this);
//   },
//   getAge () { console.log(this);}
// };

// obj.getFirstName();
// obj.getAge();
// let a = 1;

// const s = 2;

// const arrayNums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]; // 343
// // const arrayNums2 = [90, 101, 3, 1, 69, 11, 10, 111]; // 396
// for (let i = 0; i < arrayNums1.length; i++){
//     if(i%2==0) {
//         console.log(i);
//     }
// }

// function getSumOfArr (array1, array2) {
// let sum = 0;
// for (let i = 0; i < array1.length; i++){
//         sum = sum + array1[i] + array2[i]
// }
//     return sum
// }

// sum = sum + arrayNums1[i] + arrayNums2[i]
// let sum2 = 0;
// for (let i = 0; i < arrayNums2.length; i++){
//     sum2 = sum2 + arrayNums2[i]
// }
// return sum + sum2;

// console.log(getSumOfArr(arrayNums1,arrayNums2));
// console.log(sum2);

// function sumNumsInArrays(array1, array2) {
//   let sum = 0;
//   for (let i = 0; i < array1.length; i++) {
//     sum = sum + array1[i];
//   }
//   return sum;
// }

// console.log(sumNumsInArrays(arrayNums1, arrayNums2));

// const words = ['you', 'with', 'be', 'Force', 'the', 'May'];
// let sentence = '';

// // in the loop we will find a sum of nums array items
// for (let i = words.length - 1; i >= 0; i--) {
//   sentence += words[i] + ' ';
// }

// console.log(sentence);

// const obj = {
//     one: '1',
//     two: '2',
//     three: '3',
//   };
//   let sentence = '';

// in the loop we will find a sum of nums array items
//   for (let key in obj) {

//     console.log('Object key ', key)
//     sentence += obj[key] + '; ';
//   }

//   console.log(sentence);

// const words = ['you', 'with', 'be', 'Force', 'the', 'May'];

// for (let index in words){
//     console.log(words[index])
// }

// const obj = {
//         one: '1',
//         two: '2',
//         three: '3',
//       };
//       let sentence = '';
//       const result = [];

//       for (let key in obj){
//           sentence +=- obj[key] + ';';
//           result.push(obj[key]);
//       }

//       const result2 = Object.values(obj);
// console.log({result, result2 ,sentence})

// const n = 22;
// let arr = [];

// for (let i = 1; i <= n; i++){
//     if(i % 2 === 0){
//         arr.push(i)
//     }
// }

// console.log(arr);

// const arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
// let revarr = [];
// for ( let i = arr.length -1; i >= 0; i--){

// }

// / Task 4 - Add up each element in the same position and
// // create a new array containing the sum of each pair.
// // Assume both arrays are of the same length.
// let array1   = [4, 6, 7];
// let array2  = [8, 1, 9];
// // Example output:
// // [12, 7, 16]
//  function sumNumsSamePosition(array1, array2) {
//   let newarr = [];
//   let sum = 0;
//   for (let i = 0; i < array1.length; i ++){
//       sum = sum + array1[i]
//   }
// }

// function printEvenNumbers(n) {
//    let x = 0
//   for (let i = 0; i <= n; i += 2) {
//        console.log(i);
//   }

// }
// const y = 22;
// console.log(printEvenNumbers(y));

// const words = ['you', 'with', 'be', 'Force', 'the', 'May'];
// let sentence = '';

// for (let i = words.length - 1; i >= 0; i--) {
//   sentence = sentence + words[i] + ' '
// }

// console.log(sentence);

// let array1 =  [4, 6, 7];
// let array2 =  [8, 1, 9];

// let sumarr = [];
// for (let i = 0; i < array1.length; i++) {
//        sumarr.push(array1[i]+ array2[i])
// }
// console.log(sumarr);

// const array = [4, 6, 7, 10];

// let i = 0;
// let sum = 0;

// while (i < array.length) {
//       sum += array[i]
//       i++

// }

// console.log(sum)

// strArr = ['error01', 'in a galaxy', 'start-error', 'far far', 'away', '0994-error']
// console.log(strArr.sort());
// // Task 6 - filter array of string using 'for' or 'while' loop
// // and keep only elements where length > 4 and without the word 'error'

//  for (let i = 0; i < strArr.length; i ++) {
//             console.log(strArr[i])

//  }

// let arr = ['A', 'B', 'C'];
// arr = arr.filter(e => e !== 'B'); // will return ['A', 'C']

// console.log(arr);
// function swap(arr, i, j) {
//       // change places of array elements
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//     }

//     const unsortedNums = [1, 3, 2];

//     swap(unsortedNums, 1, 2);

//     console.log(unsortedNums);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// fruits.sort();

// console.log(fruits);

// fruits.reverse();
// const points = [40, 100, 1, 5, 25, 10];

// points.sort(function(a,b){return a - b});

// console.log(points);

// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

// let text = "";
// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }

// Task 2 - Using a 'for' loop print all even
// numbers up to and including n, as a comma separated string.
// Don’t include 0
// const n = 20;
// Example output:
// "2, 4, 6, 8, 10, 12, 14, 16, 18, 20"

// export function printEvenNumbers(n) {
//   let str = '';
//   for (let i = 2; i <= n; i += 2) {
//         str = `${str + i }, `;      
//   }
//      return str
// }


// strArr = ['error01', 'in a galaxy', 'start-error', 'far far', 'away', '0994-error']
// console.log(strArr.sort());
// Task 6 - filter array of string using 'for' or 'while' loop
// and keep only elements where length > 4 and without the word 'error'

//  const arr = ['error01', 'in a galaxy', 'start-error', 'far far', 'away', '0994-error'];

//  let rem = arr.splice(0,1).join()
//  let ret = rem.replace('error','');
//  arr.unshift(ret)
//  console.log(rem);
//  console.log(ret);
//  console.log(arr);
//  arr.splice(rem,1);

//  for (let i = 0; i < arr.length; i++) {
//             // console.log(arr[i].match('error'));
//       if (!arr[i].match('error')) {
//         console.log(arr[i])
//       }
//  }

// let  n = 22;
// let str = '';
// for( let i = 2; i <= n; i+=2) {
//         str += i + ', ';
        
// }

// console.log(str)

// arrayNums = [7,101,3,1,9,11,100,111];

// for (let i = 0; i < arrayNums.length; i++){
//         console.log(arrayNums[i])
//         arrayNums.sort(function(a, b){return a - b});
// }
//         console.log(arrayNums)


// const stringsArray = ["one-test", "cat", "parrot", "banana", "test-dog", "dog"];
// function filterStringsArray(array) {
//         let x = [];
//         for (let i = 0; i < array.length; i++) {
//                 //  console.log(array[i]);
//               if(!array[i].match('test')) {
//                   x.push(array[i]);
//               }
//         }
//     return x
//     }
// console.log(filterStringsArray(stringsArray));


// const numsArray = [1, 3, 5, 10, 19, 100, 200, 33];

// function sumNumbersInArray(array) {
//         array.reduce((accum, currentValue) => accum + currentValue)
// }

// const n = 22;
// function printNumbers(n) {
//         let str = "";
//         for (let i = 2; i <+ n; i += 2) {
//                if(i == n) {
//                     str = str + i   
//                } else {
//                        str = str + i + ', '
//                }
                     
//       }
//       return str;
// }
// //       str = str + i + ', ';
// console.log(printNumbers(n));

// / Task 2 - filter an array of strings and keep only
// a string, that doesn't contain the word 'test'



// const arr = ["one-test", "cat", "parrot", "banana", "test-dog", "dog"];
// // // // let tetsinclude = arr.includes('test')
// // // // console.log(tetsinclude)
// const newarr = arr.filter((value, index) => {
//     if (!value.includes('test')) 
//     {console.log(value)}
// })

// console.log(newarr);



// const nums = [1, 2, 3, 4, 3, 6];

// // filter numbers equal 3
// const filteredNums = nums.filter((num) => num !== 3);

// console.log('filtered nums array ', filteredNums);

// const newNums = nums.filter((value) => value !==3)

// console.log(newNums);



// array = [
//       { a: 1, b: 3 },
//       { a: 3, b: 3 },
//       { a: 6, b: 3 },
//       { a: 10, b: 10 },
//       { a: 41, b: 1 },
//       { a: 0, b: 4 }
//     ];



//     const addSum = array.reduce((accum, currValue) => {
//       if(currValue.a > 5) {
//         accum.push({
//           a: currValue.a,
//           b: currValue.b,
//           sum: currValue.a + currValue.b
//         })
//       }
//       return accum
//     }, []);

// console.log(addSum)



// // Task 5 - merge arrays and remove duplicates
// const arNum = [1, 2, 3, 4, 5, 6];
// const arNum2 = [15, 6, 3, 20, 11];

// const newarr = [...arNum, ...arNum2]

//    const arNum3 = arNum.concat(arNum2)
//     console.log(arNum3);
//  const filtered = arNum3.filter((value,index) => arNum3.indexOf(value) === index)

// console.log(filtered)


// var newArray = cartProducts.map(cart => ({
//     ...cart,
//     ...productDetails.find(prod => prod.productID === cart.productID)
//   }));

// const a1 = [
//   { dayOfWeek: 2, home1: "01:30" },
//   { dayOfWeek: 3, home1: "02:30" },
//   { dayOfWeek: 4, home1: "03:30" },
//   { dayOfWeek: 5, home1: "04:30" },
// ];
// const a2 = [
//   { dayOfWeek: 3, home1: "05:30" },
//   { dayOfWeek: 4, home1: "06:30" },
//   { dayOfWeek: 5, home1: "07:30" },
//   { dayOfWeek: 6, home1: "08:30" },
// ];

// const r = a1.concat(a2.filter(x => !a1.some(y => y.dayOfWeek == x.dayOfWeek)))

// console.log(r)





































