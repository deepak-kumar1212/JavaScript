const s=new Set();
s.add('hello'); s.add('world');s.add('hello');
console.log(s.size);
for (let key of s.values()) 
    console.log(key)
const name='Deepak';
console.log(name.repeat(3));