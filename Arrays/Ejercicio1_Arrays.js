/*1. Crea un array llamado paises que contenga: "España", "Francia", "Alemania", "Italia". 
Recorre el array e imprime el nombre de cada país. Después, elimina el primer país del array 
y vuelve a recorrerlo e imprimir el array de nuevo.*/


//Creamos el array paises
const paises = ['España', 'Francia', 'Alemania', 'Italia'];

// Recorre el array e imprime el nombre de cada país
for (let i = 0; i < paises.length; i++) {
  console.log(paises[i]);
}

// Elimina el primer país del array
let eliminado = paises.shift();
console.log('\nPaís eliminado:', eliminado);

// Vuelve a recorrer el array e imprime cada país nuevamente
for (let i = 0; i < paises.length; i++) {
  console.log(paises[i]);
}
