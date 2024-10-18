console.log("Hola mundo");

//Variables
var variable="hola";
console.log(variable);

//Constantes
const constante=5;
console.log(constante);

//Las variables pueden cambiar de valor a lo largo del codigo pero las constantes no.

//Operaciones con variables
var numero1=4;
var numero2=4;
var solucion=Math.pow(numero1,numero2);
console.log("La potencia es: " + solucion);

//Operadore relacionales
var resultado=numero1==numero2;
console.log("El resultado es: " + resultado);

//Operadore logicos
var resultado=(numero1==numero2) && (numero1!=numero2);
console.log("El resultado es: " + resultado);

//Operadores de asignación
var a=2;
a+=5;
console.log("El resultado es: " + a)

//Condicionales
var numero=7;
if(numero==7){
    console.log("El número es igual a 7");
}
else if(numero==8){
    console.log("El número es igual a 8");
}
else{
    console.log("El numero es diferente");
}

//Bucle while
var i=0;
while(i<10){
    i+=1;
    console.log(i)
}

//Ciclo for
for(var i=0; i<=10; i++){
    console.log(i);
}

//Funciones
var funciones="Correcto";
function cafetera(variable1,variable2){
    if(variable1==1 && variable2==2){
        return funciones;
    }
}
var final=cafetera(1,2);
console.log(final);

//Aunque var y let pueden ser similares es muy importante saber que var puede ser modificado a lo largo del codigo mientras que let es inmutable