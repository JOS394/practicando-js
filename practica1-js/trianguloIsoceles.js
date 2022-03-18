


function calculadoIsoceles(){

const inputBase=document.getElementById("baseTriangulo");
const inputLados=document.getElementById("ladosTriangulo");
const valorBase= inputBase.value;
    

const valorLados= inputLados.value;
const altura2= Math.sqrt(valorLados**2-valorBase**2/4);


let a2= Math.pow(valorLados,2);    
let b2= Math.pow(valorBase,2);    

const altura= Math.sqrt(a2-b2/4);

if (valorBase==valorLados){
    alert("no es isoceles");
    
}else{
    alert(altura);
}


}

