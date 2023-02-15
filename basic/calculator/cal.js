// const results = document.querySelector('#results');
const calculate=document.getElementById('.extension');
const clearbtn=document.getElementById('.clear');
function calculate(){
    for(let i=1;i<10;i++){
        let j=2;
        const newnumber=`${i}x${j}=${i*j}`;
        calculate.textContent=`${newnumber}\n`;
    }
}
calculate.addEventListener('click',calculate);
clearbtn.addEventListener('click',results.textContent='');