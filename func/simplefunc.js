// const Marvel = {
//       yearCereation: 1939,
//       mainCharacter: 'Spider Man',
//       mainTeam: 'Avengers',
//     };

// //     function extendObject (obj, field, value) {
// //         const newObj = Object.assign({}, obj);
// //         newObj[field] = value;

// //     return newObj
// //     }

// // const NewMarvel = extendObject(Marvel, 'mainVillian', 'Venom');

    

// //     console.log('Marvel object:', Marvel);
// //     console.log('NewMarvel object', NewMarvel);

//     function extendExistingObject (obj, field, value) {
//         Marvel[field] = value;
//     }


// const NewMarvel = extendObject(Marvel, 'mainVillian', 'Venom');

    

//     console.log('Marvel object:', Marvel);
//     console.log('NewMarvel object', NewMarvel);


// 20. Write a JavaScript program to check from two given integers, whether one is positive and another one is negative

//=====
// My code
//====

const myFn = function (num1, num2){
    if (num1<0 || num2<0) {
        console.log('One of two number is negative')
    } 
};

// console.log(myFn(2, 2));
// console.log(myFn(-2, 2));
// console.log(myFn(2, -2));
// console.log(myFn(-2, -2));

//=======
// Solution
//======
// function positive_negative(x, y)
// {
//   if ((x < 0 && y > 0) || x > 0 && y < 0) 
//   {
//     return true;
//   }
//   else 
//   {
//     return false;
//   }
// }
// console.log(positive_negative(2, 2));
// console.log(positive_negative(-2, 2));
// console.log(positive_negative(2, -2));
// console.log(positive_negative(-2, -2));


//21. Write a JavaScript program to create a new string adding "Py" in front of a given string.
// If the given string begins with "Py" then return the original string.

//=====
// My code
//====

// let u = '';

// if ()