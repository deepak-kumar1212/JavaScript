// const person={
//         name: ["Bob", "Smith"],
//         age: 32,
//         bio: function () {
//           console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
//         },
//         introduceSelf: function () {
//           console.log(`Hi! I'm ${this.name[0]}.`);
//         },
//         namere(num){
//             return this.name[num].length;
//         }
      
// };
// person.introduceSelf();
//console.log(person.namere(0));
const person={
        name: ["Bob", "Smith"],
        age: 32,
        bio: function () {
          console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
        },
        introduceSelf: function () {
          console.log(`Hi! I'm ${this.name[0]}.`);
        },
        namere(num){
            return this.name[num].length;
        }
      
};
function property(value){
  console.log(person[value]);
}
property("name");
