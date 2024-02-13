let user = {
  // Properties
  fName: "Mostafa",
  lName: "Ahmed",
  age: 20,
  // Methods
  fullName: function () {
    return `Full Name Is: ${this.fName} ${this.lName}`;
  },
  ageDays: function () {
    return `You Lived ${this.age * 365} Days`;
  },
};

console.log(user.fName);
console.log(user.lName);
console.log(user.age);
console.log(user.fullName());
console.log(user.ageDays());
