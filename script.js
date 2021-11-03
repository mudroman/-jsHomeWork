

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

const d = new Date();
d.toDateString();
console.log(d.toDateString());