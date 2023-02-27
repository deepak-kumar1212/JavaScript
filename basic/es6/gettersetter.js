class person{
     constructor(name,profession){
         this._name=name;
         this._profession=profession;
     }
    set name(name){
        this._name=name;
    }
    get name(){
        return this._name;
    }
}
var deepak=new person(10,20);
//person.name=30;
console.log(person.name);
// class Rectangle {
//     constructor (width, height) {
//         this._width  = width
//         this._height = height
//     }
//     set width  (width)  { this._width = width               }
//     get width  ()       { return this._width                }
//     set height (height) { this._height = height             }
//     get height ()       { return this._height               }
//     get area   ()       { return this._width * this._height }
// }
// var r = new Rectangle(50, 20)
// console.log(r.height)