//actividad1 

function esPar(numero) {
    if (numero% 2 === 0){
     console.log("es par");
    } else {
        console.log("es impar");
    }
    
}

esPar (58);
esPar (3);

//actividad2

function sumaDigitos(numero){
    let suma = 0;
    let numeroString = numero.toString();
    for (let i = 0; i < numeroString.length; i++) {
    suma += parseInt (numeroString.charAt(i));      
    }
    return suma;
}
let numero =123;
let suma = sumaDigitos(numero); 
console.log(suma); 

//actividad3

function generarSecuencia(numero2) {
    for (let i = 1; i < numero2; i++) {
    console.log(i);
    }
    
}
let numero2 = 5;
generarSecuencia (numero2);

//actividad4

function tablaMultiplicar(numero3) {
    for (let y = 1; y <= 10; y++) {
      let resultado = numero3 * y;
      console.log(numero3 + ' x ' + y + ' = ' + resultado);
    }
  }
  let numero3 = 5;
  tablaMultiplicar(numero3);

//actividad 5

function esPrimo (numero4);{
if (numero4 <=1) {
    return false;
}
for (let i = 1; i < matchMedia; i++) {
    let numero4 = 2;
}
}
console.log(numero4);
let numero4 = 2;




