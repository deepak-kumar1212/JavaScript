// try{
//     const name=42;
//     if(isNaN(name))
//     console.log(name);
//     else
//     throw name;
// }
// catch(name){
//    console.log("Not a string");
// }
// finally{
//     console.log("Success");
// }
try {
    try {
      throw new Error("oops");
    } finally {
      console.log("finally");
      return;
    }
  } catch (ex) {
    console.error("outer", ex.message);
  }
  
  // Logs:
  // "finally"
  // "outer" "oops"
  