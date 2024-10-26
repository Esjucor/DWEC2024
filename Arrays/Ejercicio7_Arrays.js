/*7. Mostrar por consola 50 combinaciones aleatorias de la lotería primitiva. 
Las combinaciones son 6 números del 1 al 49, pero debe tenerse en cuenta que 
no se pueden repetir los números en una misma combinación.*/

// Función para generar una combinación de 6 números únicos del 1 al 49
function generarCombinacion() {
    const numeros = new Set();

    // Generar números hasta que tengamos 6 únicos
    while (numeros.size < 6) {
        const numeroAleatorio = Math.floor(Math.random() * 49) + 1; // Números del 1 al 49
        numeros.add(numeroAleatorio); // Agregar al Set (solo números únicos)
    }

    // Convertir el Set a un array y ordenarlo
    return Array.from(numeros).sort((a, b) => a - b);
}

// Generar 50 combinaciones
const combinaciones = [];
for (let i = 0; i < 50; i++) {
    combinaciones.push(generarCombinacion());
}

// Mostrar las combinaciones en la consola
console.log("Combinaciones aleatorias de la lotería:");
combinaciones.forEach((combinacion, index) => {
    console.log(`Combinación ${index + 1}: ${combinacion.join(', ')}`);
});
