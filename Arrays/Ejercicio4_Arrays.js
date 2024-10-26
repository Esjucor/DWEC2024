/*Crea un array llamado numeros con al menos seis números. Usa desestructuración 
para obtener los primeros dos números en variables individuales y almacena el
resto de los números en un array llamado resto.*/


//Crear array
let numeros = [10, 22, 33, 44, 55, 66];
//Usa desestructuración para obtener los primeros dos números en variables individuales.
let primerNumero = numeros[0];
let segundoNumero = numeros[1];
//almacena el resto de los números (desde la posición 2) en un array llamado resto.
let resto = numeros.slice(2);

console.log("Primer número:", primerNumero);
console.log('Segundo número:', segundoNumero);
console.log('Resto de números:', resto);





