//==============
// Callback
//=============

// function fn (callback) {
//     console.log('fn');
//     callback();
// }

// const sayHello = () => {
//     console.log('Hello');
// }

// fn(sayHello);

//==================================
// Абстрагування повторення
//==================================

// function repeat (count, callback) {
//     for(let i=0; i<count; i += 1) {
//         callback();
//     }
// };

// function sayHello () {
//     console.log('Hello');

// }
// function sayBye () {
//     console.log('Bye');

// }

// repeat(5, sayHello);
// repeat(5, sayBye);

//==================================
// Фільтрація масивів
//==================================



// function filter (arr) {
//     const result = [];

//     for(let i=0;i<arr.length; i +=1){
//         result.push(arr[i]);
//     }
    
//     return result;
// }
// const numbers = [1, 2, 3, 4, 5, 6];
// filter(numbers);

// console.log(arr);