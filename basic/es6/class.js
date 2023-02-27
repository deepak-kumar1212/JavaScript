class shape{
    constructor(name,radius){
        this.name=name;
        this.radius=radius;
}
}
class circle extends shape{
    constructor(name,radius,validity){
        super(name,radius);
        this.validity=validity;
    }
}
const deepak=new circle('kumar',34,12);
console.log(deepak.name);