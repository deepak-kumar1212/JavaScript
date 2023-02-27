const array=[1,2,3,4];
const array1=array.map(array=>
    array*array);
console.log(array1);
const array2=array1.reduce((total,num)=>{
     return total+num;
});
console.log(array2);