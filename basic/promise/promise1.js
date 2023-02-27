const deepak=new Promise((resolve,reject)=>{
    //resolve("Welcome to my page");
    reject("There is an error");
})
//deepak.then((value)=>console.log(value));
deepak.catch((value)=>console.log(value))