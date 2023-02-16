const inp=document.querySelector('input');
const btn=document.querySelector('button');
const outp=document.querySelector('output');
btn.addEventListener('click',event=>{
    if(isNaN(inp.value)){
        outp.textContent=`${inp.value} is not a number`;
    }
})