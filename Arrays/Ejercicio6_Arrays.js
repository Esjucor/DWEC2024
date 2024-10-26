/*Crea un Map que almacene nombres como claves y edades como valores. 
Luego, agrega algunos nombres y edades, actualiza la edad de uno de ellos, 
y finalmente imprime todos los nombres con sus edades.*/


// Crear un Map para almacenar nombres y edades
let edadesMap = new Map();

// Agregar algunos nombres y edades
edadesMap.set("Juan", 25);
edadesMap.set("Ana", 30);
edadesMap.set("Pedro", 22);
edadesMap.set("Laura", 28);

// Actualizar la edad de uno de ellos
edadesMap.set("Pedro", 23); // Actualizamos la edad de Pedro a 23

// Verificar resultados
console.log("Nombres y edades:");
edadesMap.forEach((edad, nombre) => {
    console.log(`${nombre}: ${edad}`);
});
