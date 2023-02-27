class Employee{
    constructor(name,age){
        this.name=name;
        this.age=age;

    }
     display(){
        console.log(this.name);
    }
}
const emp=new Employee('Deepak',12);
emp.display();