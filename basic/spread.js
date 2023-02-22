const obj1={
    fname:'Deepak',
    age:21
}
const obj={
    fname:'Kumar',
    age:22
}
const obj2={...obj1,...obj};
console.log(obj2.fname);