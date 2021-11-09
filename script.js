
 
// let a = 10;
// leb b = 20;

// console.log(document.URL);



// // let a = 15;
// // let b = 10;

// // const summ = a < b ? console.log('true') : console.log('false');


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


// 8.Write a JavaScript program where the program takes a random integer between 1 to 10, 
// the user is then prompted to input a guess number. 
// If the user input matches with guess number, 
// the program will display a message "Good Work" otherwise display a message "Not matched".
//--------------------------------------------------------------------------------------------------------------
/*
MY JS!
const a = 3;
let invalue = prompt('Guess number from 1 to 10!Good Luck!');
let result;
result = invalue == a
 ? 'Good Work'
 : 'Not Matched';
console.log(result);

example
 const num = Math.ceil(Math.random() * 10);
console.log(num);
 const gnum = prompt('Guess the number between 1 and 10 inclusive');
 if (gnum == num)
   console.log('Matched');
  else
   console.log('Not matched, the number was '+gnum);






*/
//--------------------------------------------------------------------------------------------------------------

//9. Write a JavaScript program to calculate days left until next Christmas.

// let d = new Date();
// const cmas =  new Date(d.getFullYear(), 11, 25);
// if (d.getMonth()==11 && d.getDate() > 25) {
//   cmas.setFullYear(cmas.getFullYear() + 1);
// }


// const one_day = 1000*60*60*24;
// console.log(`${ Math.ceil ((cmas.getTime() - d.getTime()) / (one_day))} days left until Christmas!`)
//-------------------------------------------------------------

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

////-----------------------------------------------------------------------------------------



// function cToF (celsius){
//   let cTemp = celsius;
//   let cToFahr = cTemp * 9 / 5 + 32;
//   let message = cTemp+'\xBOC is ' + cToFahr + ' \xBOF.';
//   console.log(message);
// }

//------------------------------------05.11
// const Marvel = {
//   yearCereation: 1939,
//   mainCharacter: 'Spider Man',
//   mainTeam: 'Avengers',
// };

// const DC = {
//   yearCereation: 2013,
//   mainCharacter: 'Batman',
//   mainTeam: 'Justice League',

// };
// console.log('before', Marvel);
// const newField = 'owner';
// Marvel[newField] = 'Disney';

// Marvel.owner = 'Disney';
// console.log('after', Marvel);

// Object.freeze(DC);

// DC.yearCereation = 2021;

// console.log(Object.isExtensible(DC));

// const MarvelKiller = Object.assign({}, Marvel);
// MarvelKiller.better = true;
// console.log(MarvelKiller);

// hasOwnproperty

// if (!DC.hasOwnProperty('owner')) {
//   DC.[newField] = 'Warner Brothers'
// };

// console.log(DC);

// function specnumb (n)  {

//   if (n > 19) {
//     return (n - 19) * 3;

//   } else {
//     return 19 - n;
//   }
// }

// console.log(specnumb (18));


// const givenNumber = (a, b) => {

// if (a === 50 && b === 50 || a+b === 50){
//   return 'true'
// } else {
//   return 'false'
// }

// }

// console.log(givenNumber(20,20))

//19. Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.


// const givenInt = (n) => {

//   return (n >= 20 && n <= 100 || n <=400)
// };


// console.log(givenInt(25));
























