/*Crea un array llamado valores que contenga números, algunos 
de los cuales son duplicados. Utiliza un Set para crear un nuevo 
array que contenga solo los números únicos y luego imprímelo.*/

// Crear un array valores
let valores = [1, 1, 22, 22, 5, 7, 77, 8, 4, 3, 33];

// Crear un Set para contar las ocurrencias de cada número
let contador = {};

valores.forEach(numero => {
    contador[numero] = (contador[numero] || 0) + 1; // Contar ocurrencias
});

// Filtrar números únicos (que aparecen solo una vez)
let valoresUnicos = valores.filter(numero => contador[numero] === 1);

// Verificar resultados
console.log('Números únicos:', valoresUnicos);
