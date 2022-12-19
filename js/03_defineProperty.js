let obj = {
  name: "zhangsan",
  age: 18,
  sex: "nan",
};

let _name = obj.name;
Object.defineProperty(obj, "name", {
  set: function (newVal) {
    console.log("name is changed", newVal);
    _name = newVal;
  },
  get: function () {
    console.log("name is readed");
    return _name;
  },
});
console.log(obj.name);
obj.name = "666";
