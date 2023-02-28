class person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    display(){
        console.log(this.name);
    }
}
const deepak=new person('Deepak',22);
deepak.display();