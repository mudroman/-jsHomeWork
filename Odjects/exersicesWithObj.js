// // 1. Write a JavaScript program to list the properties of a JavaScript object. Go to the editor
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
// Sample Output: name,sclass,rollno

const student = {
    name: 'David Rayy',
    class: 'VI',
    rollno: 12
}

const output = Object.keys(student);
console.log(output);
const result = output.toString();
console.log(result);

