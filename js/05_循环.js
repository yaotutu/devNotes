let obj = {
  name: "ned",
  like: "man",
};
//这里是添加到了obj的对象身上，并不是添加到原型上，通过Object.hasOwn()判断，返回true
Object.defineProperty(obj, "age", {
  value: "18",
  enumerable: true,
});
// for (item in obj) {
//   console.log(item);
// }
//for in 遍历对像，
// 但是如果他的原型上面的某些属性被设置成了可被枚举，
// 那么也会遍历到原型对象上的某些属性
debugger;
for (const item in obj) {
  // if (Object.hasOwn(obj, item)) {
  //   console.log(item);
  // }
  console.log(Object.hasOwn(obj, item));
}
