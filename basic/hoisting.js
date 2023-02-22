// console.log(y);
// let y=15;

// const array=[];
// function display(array1){
//     array1.push(1);
//     console.log(array1);
// }
// display(array);
// console.log(array);
// var a=10;
// function display(b){
//     b=15;
//     console.log(b);
// }
// display(a);
// console.log(a);
const employees=[
    {
        Firstname:'Deepak',
        Lastname:'Kumar'
    },
    {
        Firstname:"Yogesh",
        Lastname:"Thenrajan"
    }
];
//  for(const emp of employees){
//      alert(`${emp.Firstname} ${emp.Lastname}`);
//  }
// console.log(employees[0]);
// for(let i=0;i<employees.length;i++){
//     alert(`${employees[i].Firstname} ${employees[i].Lastname}`);
// }
// for(const x in employees){
//     console.log(employees[0][x]);
// }
//console.log(employees[Firstname]);
// employees.forEach(join);
// for(let x in join){

// }
// {
//     console.log(name); // undefined
//     let name = 'Mukul Latiyan';
// }
const array=[1,2,3,4];
const array1=array.reduce((total,num)=>{
    return total+num;
});
console.log(array1);