class Person{

  //name='';
  //this.name=name;
    constructor(name) {
      this.name = name;
    }
  
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}`);
    }
  
  }
  class Professor extends Person {

 
  
     constructor(name, teaches) {
      super(name);
      this.teaches = teaches;
    }
  
    introduceSelf() {
      console.log(`My name is ${this.name}, and I will be your ${this.teaches} professor.`);
    }
  
    grade() {
      const grade = Math.floor(Math.random() * (5 - 1) + 1);
      console.log(grade);
    }
  
  }
  const walsh = new Professor('Walsh');
  walsh.grade('my paper');
  //walsh.introduceSelf();
     