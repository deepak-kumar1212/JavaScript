async function populate(){
    const request='source.json';
    const supering=new Request(request);
    const response=await fetch(supering);
    const details=await response.json();
    info(details);
    function info(obj){
         console.log(obj.name);
    }
}

