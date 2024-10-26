let data = [
  {
    name: 'Nacho',
    telephone: '966112233',
    age: 40,
  },
  {
    name: 'Ana',
    telephone: '911223344',
    age: 35,
  },
  {
    name: 'Mario',
    phone: '611998877',
    age: 15,
  },
  {
    name: 'Laura',
    telephone: '633663366',
    age: 17,
  },
];
console.log(data);
// Añadir dos elementos al final del array
data.push(
  {
    name: 'Pedro',
    telephone: '611944444',
    age: 25,
  },
  {
    name: 'Julia',
    phone: '633232323',
    age: 37,
  }
);
console.log(data);
// Ordenar el array 'data' por edad en orden ascendente
data.sort((a, b) => a.age - b.age);

console.log(data); // Verifica resultado

// Ordenar el array 'data' por nombre en orden ascendente
data.sort((a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
});

console.log(data); //Verifica resultado
//Crea y muestra un nuevo vector que contenga solo los mayores de 30 años.
let mayoresDe30 = data.filter((persona) => persona.age > 30);

console.log(mayoresDe30); //Verifica resultado
