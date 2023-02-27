// const array=[1,2,3,4];
// const array1=array.map((array)=>{
//    return array*array;
// })
// console.log(array1);
const array=[1,2,3,4];
const array1=array.map(myFun);
function myFun(array,b,c)
{
    console.log(c);
}
console.log(array1);