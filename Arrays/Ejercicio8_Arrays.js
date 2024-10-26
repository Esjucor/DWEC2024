/*Se desea validar hasta qué punto la función Math.random es realmente aleatoria. 
Para tal fin, calcularemos 10.000 veces números aleatorios del 1 al 10. 
Por consola mostraremos cada número del 1 al 10 y a continuación el 
número de veces que ha salido ese número. */


// Creamos array de 10 elementos inicializados en 0.
const frecuencias = new Array(10).fill(0); 

// Generamos 10,000 números aleatorios entre 1 y 10
const totalGeneraciones = 10000;

for (let i = 0; i < totalGeneraciones; i++) {
  // Generamos un número aleatorio del 1 al 10
  const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
  // Incrementamos la frecuencia del número generado
  frecuencias[numeroAleatorio - 1]++;
}

//Verificamos resultados
console.log("Frecuencias:");
for (let j = 0; j < frecuencias.length; j++) {
    console.log(`Número ${j + 1}: ${frecuencias[j]}`);
}