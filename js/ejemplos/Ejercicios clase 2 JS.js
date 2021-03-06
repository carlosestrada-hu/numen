suma(2,3);

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  var res = x+y;
  console.log(res);
}

function resta(x, y) {
  // "x" e "y" son números
  // Resta "x" de "y" y devuelve el valor
  // Tu código:
  console.log(y - x);
}

function multiplica(x, y) {
  // "x" e "y" son números
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  console.log(x * y);
}

function divide(x, y) {
  // "x" e "y" son números
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  console.log(x / y);
}

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  console.log(x % y);
}

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // Tu código:
  console.log(Math.pow(num, 2));
}

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  console.log(x===y);
}

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  console.log(str1.length === str2.length);
}

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  console.log(num < 90);
}

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  console.log(num > 50);
}

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  console.log(num % 2 == 0);
}

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  console.log(num % 2 != 0);
}

function comparacion() {
  //Asigna valores para val1 y val2 de modo que ingrese a la instrucción if:
  const val1 = 1;
  const val2 = 2;
  if (val1 && val2) {
    console.log("Entramos en la declaración if");
  }
}

function flujoCondicional() {
  const valor1 = 2 < 20 //asingar como valor el resultado de una operacion de comparacion
  const valor2 = 30

  //establecer los valores de valor1 y valor 2 para obtener los siguientes resultados:
  //'segundo if'
  //'primer if', y 'else final'
  //'primer if', y 'else if'
  //'else final'
  if (valor1) {
    console.log("primer if");
  }
  if (valor2 && !valor1) {
    console.log("segundo if");
  } else if (valor2 <= 12) {
    console.log("entrada al else if");
  } else {
    console.log("else final");
  }
}
  
/* 
    Crear un objeto sobre una temática a elección que contenga :
    - Un dato tipo string
    - Un dato tipo number
    - Un dato tipo boolean
    - Una función
*/
const miAuto = {
  marca: 'Chevrolet',
  modelo: 'Spin',
  puertas: 4,
  activo: true,

  detalle: function(){
    console.log('Detalle Auto '+this.marca+' '+this.modelo+' '+this.puertas+' Funciona? '+this.activo);
  }
}
//console.log(Object.values(miAuto));
console.log(miAuto.detalle());

/* 
    Crear un array sobre un temática a elección que contenga:
    - Un dato tipo string
    - Un dato tipo number
    - Un dato tipo boolean
    - Un array con al menos 3 valores

    Una vez creado remover del ultimo indice (el cual es un array) el primer y ultimo valor y agregarle el string "Primero" al comienzo, 
    y el string "Ultimo" al final. Utilizar los métodos vistos en clase.
*/
const miArray = ["Carlos",47,true, [13,17,20]]
console.log(miArray)
miArray[3].shift(13);
miArray[3].unshift('Primero');
miArray[3].pop();
miArray[3].push('Último');
console.log(miArray)