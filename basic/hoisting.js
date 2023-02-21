//console.log(x);
// let x=15;

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
// for(const emp of employees){
//     alert(`${emp[0].Firstname},${emp[0].Lastname}`);
// }
console.log(employees[0]);
for(let i=0;i<employees.length;i++){
    alert(`${employees[i].Firstname} ${employees[i].Lastname}`);
}