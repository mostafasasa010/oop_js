function Phone(serial) {
  // this is The Created Object From The Constrcutor Function
  console.log(this);
  this.serial = `#${serial}`;
}

let phone1 = new Phone(123456);
let phone2 = new Phone(528951);
let phone3 = Phone(125698);

console.log(phone1.serial);
console.log(phone2.serial);
console.log(window.serial);

console.log(phone1 instanceof Phone);
console.log(phone2 instanceof Phone);
console.log(phone3 instanceof Phone);

console.log(phone1.constructor === Phone);
console.log(phone2.constructor === Phone);
// console.log(phone3.constructor === Phone); // Error

function sayHelloTo(someone) {
  // someone => Parameter
  return `Hello ${someone}`;
}

console.log(sayHelloTo("Osama")); // Osama => Argument
