let mainObj = {
  hasDiscount: true,
  showMsg: function () {
    return `You${this.hasDiscount ? "" : " Don't"} Have Discount`;
  },
};

console.log(mainObj.hasDiscount);
console.log(mainObj.showMsg());

let otherObj = Object.create(mainObj);

otherObj.hasDiscount = false;
console.log(otherObj.hasDiscount);
console.log(otherObj.showMsg());

let lastObj = Object.create(mainObj);

console.log(lastObj.hasDiscount);
console.log(lastObj.showMsg());
