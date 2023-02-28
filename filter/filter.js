const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter((words,b,c) =>{ 
if(words.length > 6){
    console.log(b);
    return words;
}});
console.log(result);