// Tasks 1 -  convert array of strings
// from lowercase to uppercase

// strArr = ['error01', 'in a galaxy', 'start-error', 'far far', 'away', '0994-error'];

// const newARR = strArr.toString();

// const toUpper = newARR.toUpperCase();

// const toArr = toUpper.split(',');

// console.log(newARR);
// console.log(toArr);

//=========================================================
// Task 2 - should calculate amount of provided letter in
// the provided string
// ('letter', 't') => 2

// let str = "should9run7and9replace0all1nums";
// let leter = 'a';

// const findletterinstr = (string, letter) => {

//     return string.indexOf(letter);
// };

// console.log(findletterinstr(str, leter))

// for (let i = 0; i < str.length; i ++) {
//             console.log(str[i])

// //             if (str[i] === str.match(/[a-z]/g)) {
// //                 console.log(str[i])
// //             }
// // }

// let newstr = str.replace(/[0-9]/g, '')

// let addspace = newstr.split(' ,');

// // const arr = str.split('')

// let a = 'mynameisroman';
// console.log(a.split('').join(' '));

// console.log(typeof(newstr));
// // console.log(str.split(''));

// let value = 'let5tter';

// var text = "JavaScript";
// newstr = newstr.split("").join(" ");
// console.log(text);

// Task 5 - return a new string that should contain
// a letter taken by index argument from every string in array
// if index is bigger than string length - add space instead
// let array = ["osmos", "uterque", "water", "crop", "&", "swap", "cat", "brew", "Esmeralda"];
// // index - 1
// // result "start wars"
// let str = '';
//     for (let i = 0; i < array.length; i++){
//            if (array[i].length > 1) {
//             console.log(str += array[i].charAt(1));
//            } else {
//                console.log(str += '  ');
//            }

//         // if (array[i].length > 1) {
//             //      newarr.push(array[i].charAt(1))
//             // } else {
//             //     newarr.push(' ')
//             // }
//     }

// Tasks 6 - check, if string is palindrome
// and return "The string is palindrome"
// or "The string is not palindrome"

// str = 'madam';
// newStr = '';
// for (let i = str.length -1 ; i >= 0; i--) {
//         newStr += str[i]
//         if (str === newStr) {
//             return console.log('String is palidrome')
//         } else {'The string is not palidrome'}
// }

// // palindromeValidator(str) {

// // }

// console.log(newStr)

// Task 2 - should calculate amount of provided letter in
// the provided string
// ('letter', 't') => 2

// let str = "should calculate 'a' letter";
// let x = "a";

// // function calculateLetters(string, letter) {
// //     return string.indexOf(letter);
// //   }

// let r = str.match(/[a]/g);
// let y = r.length;
// console.log(y);

// Task 2 - should calculate amount of provided letter in
// the provided string
// ('letter', 't') => 2

// let str = "should calculate 'a' letter";

// for (let i = 0; i < str.length; i++) {
//     // console.log(str[i]);
//     let amount = 0;
//     if (str[i] === 'a') {
//         ++ amount;
//         console.log(amount)

//     }
//     // console.log(count)
// }


// function calculateLetters(string, letter) {
//   let count = string.match(/[letter]/g);
//   let amount = count.length;
//   return amount;
// }

//Write a JavaScript program to find the largest of three given integers.

// function largInt (a,b,c) {
//     if (a > b || a > c){
//        return console.log('Largest Integer >> A ' + a)
//     } else if (b > a && b > c) {
//         console.log('Largest Integer >> B ' + b)
//     } else if (c > a || c > b) {
//         console.log('Largest Integer >>  C ' + c)
//     }
// }

// console.log(largInt(1110,45,125));

//Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.


// function nearTo (a,b) {
//     if ((100 - a) < (100 -b)) {
//         console.log('a is closer to 100 > ' + a);
//     } else {
//         console.log('b is closer to 100 > ' + b);
//     }
// }


// nearTo(90,80);

//Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.

function includeInt ()