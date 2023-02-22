// const a=[1,2,3,4];
// const b=[5,6,7,8];
// // for (let i = 0; i < a.length; i++) {
// //     let x = a[i]
// // }
// // for (let i = 0; i < b.length; i++) {
// //     let y = b[i]
// // }

// // let callbacks = []
// // for (let i = 0; i <= 2; i++) {
// //     callbacks[i] = function () { return i * 2 }
// // }
// var i, x, y;
// for (i = 0; i < a.length; i++) {
//     x = a[i];
// }
// for (i = 0; i < b.length; i++) {
//     y = b[i];
// }

// var callbacks = [];
// for (var i = 0; i <= 2; i++) {
//     (function (i) {
//         callbacks[i] = function() { return i * 2; };
//     })(i);
// }
// console.log(callbacks[0]()); 
// console.log(callbacks[1]()); 
// console.log(callbacks[2]()); 
// function f (...a) {
//     return  a.length
// }
// console.log(f(0, 1, "hello", true, 0));
const array=[[7,8]];
const array1=[...array[0],5,6];
console.log(array1);