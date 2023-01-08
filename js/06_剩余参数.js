const sum = (...args) => { 
    let total = 0
    args.forEach((item) => { 
        total = total + item
     })
     return total
 }

 

 let ary = ["zhangsan", "lisi", "wangwu"]

 let [s1, ...s2] = ary

 console.log(s1);
 console.log(s2);