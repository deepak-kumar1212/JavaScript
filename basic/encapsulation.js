class Person{
    name='';
    constructor(name){
        this.name=name;
    }
    welcome(){
        console.log("Welcome to my encapsulation page");
    }
}
class person2 extends Person{
    #religion;
    constructor(name,religion){
        super(name);
        this.#religion=religion;
    }
    intro(){
        console.log(`hi!I'm ${this.name} from ${this.#religion}`);
    }
    #sample(){
        console.log(`I'm from ${this.#religion}`);
    }
    sampleIntro(){
        this.#sample();
    }
}
const kumar=new Person('kumar');
const deepak=new person2('Deepak','Hindu');
kumar.intro();
// deepak.welcome();
// deepak.intro();
// deepak.sampleIntro();

