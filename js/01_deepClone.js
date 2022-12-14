function deepClone(obj = {}) {
  //判断参数是否为对象，null的 类型也为object，需要特殊处理下。
  if (typeof obj !== "object" || obj == null) {
    return obj;
  }
  //用于存储最终的结果
  let res;
  if (obj instanceof Array) {
    //判断数据类型是数组还是对象。
    res = [];
  } else {
    res = {};
  }
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      //只遍历对象自身的属性，不遍历原型的属性
      // res[key] = obj[key]
      // 递归调用该方法，保证能便利到对象中所有层级。
      res[key] = deepClone(obj[key]);
    }
  }
  return res;
}

let oldObj = {
  name: "caijie",
  age: "88",
  emp: {
    name: "oldYuan",
  },
  demoFn: function () {
    console.log("!!!");
  },
};
let newObj = deepClone(oldObj);
newObj.emp.name = "newYuan";
console.log(newObj.demoFn());
console.log(oldObj);

//TODO 后期优化对象引用导致的无限循环问题。
