function typeIs(obj) {
  let res = Object.prototype.toString.call(obj).split(" ")[1];
  res = res.substring(0, res.length - 1).toLowerCase();
  return res;
}
console.log(typeIs(666));
console.log(typeIs("666"));
console.log(typeIs([]));
console.log(typeIs({}));
console.log(typeIs(new Date()));
