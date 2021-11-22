function Car(model) {
  this.model = model;

  this.getModel = () => this.model;
  this.drive = () => console.log("Driving....");
}

const BMW = new Car("BMW");
const Volvo = new Car("Volvo");
const VW = new Car("VW");

console.log(BMW.getModel());
console.log(Volvo.getModel());
console.log(VW.getModel());

BMW.drive(); // Driving...
Volvo.drive(); // Driving...
VW.drive();
console.log(BMW);
console.log(Volvo);
console.log(VW);
console.log(typeof BMW);
console.log(typeof Car);
console.log(BMW instanceof Car);