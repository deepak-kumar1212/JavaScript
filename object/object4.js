function setName(name){
     this.fname=name,
     this.intro=function(){
        console.log(this.fname);
     };
};
const name1=new setName('Deepak');
name1.intro();
const name2=new setName('Kumar');
name1.intro();