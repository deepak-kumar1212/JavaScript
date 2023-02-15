// const val='I\'m Deepak Kumar \'\'';
const count=["1","2","3"];
let value=6;
if(value==count.length){
    console.log(true);
}
else{
    let j=value-count.length
    for(let i=0;i<j;i++){
      count.unshift('*');
    }
    console.log(count);
}