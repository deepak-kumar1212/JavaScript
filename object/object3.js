const person={
    name:['Bob','Smith'],
    age:32,
    intro(){
        console.log(person.name[0]);
    }
};
person.name[1]='Charles';
person.intro();
//console.log(person.name);
// person.very=function(){
//      console.log('You eneterd the object');
// }
// person.very();
// person.height=22;
// console.log(person.height);