function even(num,b){
  if(num%2==0)
  return num,b;
}
const array=[1,2,3,4,5,6,7,8,9];
const array1=array.filter((even));
console.log(array1);