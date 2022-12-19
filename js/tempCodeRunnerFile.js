let arr = [
  {
    name: "gaoduan",
    img: "123",
  },
  {
    name: "pujinka",
    img: "fjlkads",
  },
  {
    name: "xingzuoka",
    img: "jfkladsj",
  },
  {
    name: "pujinka",
    img: "fjlkads",
  },
];

let res = arr.filter((item, index) => {
  //   console.log(item);
  //   console.log(index);
  return item.name == "pujinka";
});
console.log(res);
