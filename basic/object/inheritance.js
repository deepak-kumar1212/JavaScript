 class person1{
//     constructor(name){
//         this.name=name;
//     }
    display(){
        console.log(`This is my ${this.name}`);     };
 }
  class person2 extends person1{

//     constructor(fname,profession){
//         super(fname);
//         this.profession=profession;
//     }
    display(){
        console.log(`This is my ${this.name},${this.profession}`);
    }
}
const people=new person2('Deepak');
 people.display();
// const hello="123";
// //Number(hello);
// console.log(typeof(Number(hello)));