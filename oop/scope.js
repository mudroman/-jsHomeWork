// function createCalcFunction (n) {
//     return function () {
//         console.log (1000 * n)
//     }
// }

// const calc = createCalcFunction(42);
// calc();

// function createIncrement (n) {
//     return function (num) {
//         return n + num
//     }
// };

// const addOne = createIncrement(1);
// const addTen = createIncrement(10)

// console.log(addOne(10));
// console.log(addOne(41));
// console.log(addTen(10));
// console.log(addTen(42));

// const user = {
//     name: 'Michel',
//     age: 20,

//     sayHi () {console.log(this.name)}
// }

// user.sayHi();

// const arrowFun = () => {console.log(this)}

function Circle() {
  this.PI = 3.14;
  this.r = 20;

  this.getArea = () => {
    console.log(this);
    return this.PI * Math.pow(this.r, 2);
  };
}

const cr = new Circle();

// cr.getArea();

const a = 10;
// console.log(c);
function plusC() {
  const c = 100;
  return a + c;
}

// console.log(plusC())

let res = 0;
let res2 = 10;

// console.log(i);

for (let i = 0; i < 10; i++) {
  res += 1;
}
for (let i = 0; i < 10; i++) {
  res2 += 1;
}
// console.log(i)
// console.log(res)
// console.log(res2)

let o = 10;

const FN = () => {
  let a = 5;
  return console.log("Hi" + o + a);
};

// console.log(FN());
// console.log(a);

const Array = [1, 2, 3, 4, 5];
let res3 = 0;
Array.forEach((element) => {
  return (res3 += element);
});

// console.log(res3)
// console.log(element)

const x = 10;

function Foo() {
  const y = 20;
  function bar() {
    const z = 15;
    const output = x + y + z;
    return output;
  }
  return bar;
}

// console.log(Foo());
// console.log(Foo()());

const module = {
  x: 42,
  getX: function () {
    return this.x;
  },
};

const unboundGetX = module.getX;
console.log(unboundGetX());
