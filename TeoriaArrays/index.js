const respuesta=document.getElementById("resp");
const btnejecutar=document.getElementById("ejecuta")
let frutas=["Manzana",1,true,"Pera"];

btnejecutar.addEventListener('click', calcular);

function calcular() {
    frutas.forEach(function(item,index,array) {
        respuesta.innerText=array;
    })
}