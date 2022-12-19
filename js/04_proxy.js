const obj = {
  name: "zhangsan",
  age: 13,
  sex: "nan",
};
const objProxy = new Proxy(obj, {
  set: function (target, key, newVal) {
    //接受三个参数，目标对象，目标对象的key值，要设置新值。修改该对象的时候，触发该函数
    console.log(`监听： 监听${key}的设置值：`, newVal);
    target[key] = newVal + "666";
  },
  get: function (target, key) {
    // 接受两个参数，目标对象和目标对象的key，读取该数据时，触发该函数
    console.log(`监听： 监听${key}的获取`);
    return target[key];
  },
});
// console.log(obj.name);
// objProxy.name = "demo";
// console.log(obj.name);
