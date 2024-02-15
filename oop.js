/*
  Object.defineProperties & Trainings
*/

const myObject = {
  a: 1,
  b: 2,
};

Object.defineProperty(myObject, "a", {
  writable: false,
  enumerable: false,
  configurable: false,
  value: 500,
});

Object.defineProperty(myObject, "c", {
  value: 3,
});

myObject.d = 4;

Object.defineProperties(myObject, {
  e: {
    value: 5,
  },
  f: {
    value: 6,
  },
  g: {
    value: 7,
  },
});

console.log(myObject);
console.log(Object.getOwnPropertyDescriptor(myObject, "a"));
console.log(Object.getOwnPropertyDescriptor(myObject, "c"));
console.log(Object.getOwnPropertyDescriptor(myObject, "d"));

console.log(Object.getOwnPropertyNames(myObject));
console.log(Object.keys(myObject));
