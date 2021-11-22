// class Cat {
//     constructor(name, color) {
//         this.name = name;
//         this.color = color;
//     }

//     run() {
//         console.log(this.name +  " is running");
//     }

//     sound() {
//         console.log("Meow! Meow!");
//     }
//     getColor() {
//         return this.color
//     }
// }

// class LazyCat extends Cat {
//     constructor(name,color) {
//         super(name,color);
//     }
//     run() {
//         console.log(this.name + ' is too lazy to run');
//     }
// }

// const Garfield = new LazyCat('Garfield', 'red');
// Garfield.run();


// const Felix = new Cat("Felix", "white");

// Felix.run();
// console.log(Felix.getColor());


class Dog {
    constructor(name, color) {
    this.name = name;
    this.color = color;
    }

    run() {console.log(this.name +'run fast')};
    sound() {console.log(this.name + 'says Whoof, whoof!')}
    getColor () {return this.color}

}

class happyDog extends Dog {
    constructor(name,color) {
        super(name,color) 
    }

    jump() {console.log(this.name + ' can jump over fence')}
}


const Joric = new happyDog('Jorik', 'white');
Joric.jump();

Joric.run();

console.log(Joric)