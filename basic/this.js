class Student{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    view(){
        console.log('Value');
    }
    display(){
        console.log(this);
    }
}
const deepak=new Student('Deepak',23);
deepak.display();
const kumar=new Student('Kumar',24);
kumar.display();
console.log(Object.keys(deepak));