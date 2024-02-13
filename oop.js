let user = new Object();

// Properties
user.fName = "Mostafa";
user.lName = "Ahmed";
user.age = 20;

// Methods
user.fullName = () => `Full Name Is: ${user.fName} ${user.lName}`;
user.ageDays = () => `You Lived ${user.age * 365} Days`;

console.log(user.fName);
console.log(user.lName);
console.log(user.age);
console.log(user.fullName());
console.log(user.ageDays());
