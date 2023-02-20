const myObject = {
    city: "Madrid",
    greet() {
      console.log(`Greetings from ${this.city}`);
    },
  };
  
  console.log(myObject.toString()); 
  console.log(Object.getPrototypeOf(myObject));
  