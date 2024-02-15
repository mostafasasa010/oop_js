// Create zFill Function Python
String.prototype.zFill = function (w) {
  let re = this;
  while (re.length < w) {
    re = `0${re}`;
  }
  return re.toString();
};

console.log("21".zFill(5));
