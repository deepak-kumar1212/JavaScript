const inp=document.querySelector('input');
const out=document.querySelector('output');
function view(event){
    out.textContent=`You pressed "${event.key}".`;
}
inp.addEventListener('keydown',view);