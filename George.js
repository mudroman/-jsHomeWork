//==============================================
// Create Objedt
//==============================================

// const human = {
//     name : 'Bobby',
//     age : 25
// };

// console.log(human);

//==============================================
// Accsses Objedt
//==============================================
// const human = {
//     name : 'Bobby',
//     age : 25
// };
// const key = 'name'; // 1.через змінну
// human.age = 20;//2.через крапку
// console.log(human['name']); // 3.через квадратні дужки []

// const obj = {a : 1};//не можна в ключ записувати обєкт
// const obj2 = {a : 2};//не можна в ключ записувати обєкт
// human[obj] = 5;
// console.log(human);

//==============================================
// Accsses Objedt
//==============================================



// let student = { 
// name : "David Rayy",
// sclass : "VI",
// rollno : 12
// };

// console.log(Object.keys(student));

// let student = { 
// name : "David Rayy",
// sclass : "VI",
// rollno : 12
// };
// console.log(student);
// delete student.rollno;
// console.log(student);

// const arr = [6,4,0, 3,-2,1];

// console.log(arr.sort());



// Task 4 - should return a value by key in provided object
// provided object - { name: 'Name' }
// result - 'Name'

// object - { name: 'Name' }

// function valueByKeyInObject(key, obj = {}) {

// };

// console.log(valueByKeyInObject('name', object));

const object = { name: 'Roman' };

function valueByKeyInObject(key, obj = {}) {

   return obj[key]
 };

 console.log(valueByKeyInObject('name', object));










