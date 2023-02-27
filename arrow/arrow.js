hobby="Agri"
const deepak={
     fname:"Deepak",
      age:32,
      hobby:"farming",
      Occupation:"Engineering",
      display(){
        console.log(this);
        console.log(this.Occupation);
      },
      dis:()=>{
        console.log(this);
        console.log(this.hobby);
        console.log(hobby);
      }
}
deepak.display();
deepak.dis();