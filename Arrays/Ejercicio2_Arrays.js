/*2. Crea un array vacío llamado letras. Inserta al principio del array 
las letras A, B y C. Luego, inserta al final las letras D y E. Finalmente, 
elimina el primer elemento y el último, e imprime el array final.*/

//Creamos el array vacío
const letras = [];
//Insertar al principio del array
letras.unshift("A","B","C");
console.log(letras);//Imprime lo que hemos insertado
//Insertar al final del array
letras.push("D","E");
console.log(letras);//Imprime lo que hemos insertado
