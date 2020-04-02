// let a = 3;
// let b = new Number(3);
// let c = 3;
// console.log(a == b);
// console.log(a == c);
// console.log(a === b);
// console.log(b === c);
//=========================
const a = {};
const b = { key: "b" };
const c = { key: "c" };
a[b] = 123;
a[c] = 456;
console.log(a);
console.log(a[b]);


const res = Object.prototype.toString.call({})
console.log(res);

const getSum = new Function('a', 'b' , 'return a + b')
console.log(getSum(1,2));

console.log(typeof value)
if (true) {  
  let value = 'blue'
}

