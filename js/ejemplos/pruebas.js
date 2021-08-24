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