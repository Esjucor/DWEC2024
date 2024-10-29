function pedirPalabras2() {
  let palabras = [];
  let palabra;

  while (true) {
    palabra = prompt(
      'Introduce una palabra (deja vacío o cancela para salir):'
    );

    // Sale del bucle si se presiona cancelar o se deja vacío
    if (palabra === null || palabra.trim() === '') {
      break;
    }

    // Agrega la palabra al array, eliminando espacios y convirtiendo a minúsculas
    palabras.push(palabra.trim().toLowerCase());
  }

  // Mostrar palabras ingresadas en la lista del DOM
  mostrarPalabras(palabras);

  // Mostrar el conteo de palabras
  mostrarConteoPalabras(contarPalabras(palabras));
}

function mostrarPalabras(palabras) {
  const lista = document.getElementById('listaPalabras');
  lista.innerHTML = ''; // Limpiar lista anterior

  palabras.forEach((palabra) => {
    const listItem = document.createElement('li');
    listItem.textContent = palabra;
    lista.appendChild(listItem);
  });
}

function contarPalabras(palabras) {
  const mapaConteo = {};

  palabras.forEach((palabra) => {
    // Si la palabra ya existe en el mapa, incrementa su conteo
    if (mapaConteo[palabra]) {
      mapaConteo[palabra]++;
    } else {
      // Si no existe, inicializa el conteo en 1
      mapaConteo[palabra] = 1;
    }
  });

  return mapaConteo;
}

function mostrarConteoPalabras(mapaConteo) {
  const lista = document.getElementById('listaPalabras');

  // Agrega un separador y título para la lista de conteos
  const separador = document.createElement('hr');
  lista.appendChild(separador);
  const tituloConteo = document.createElement('h4');
  tituloConteo.textContent = 'Conteo de Palabras';
  lista.appendChild(tituloConteo);

  // Muestra cada palabra con su conteo
  for (const [palabra, conteo] of Object.entries(mapaConteo)) {
    const listItem = document.createElement('li');
    listItem.textContent = `${palabra}: ${conteo}`;
    lista.appendChild(listItem);
  }
}

/*
Crea una aplicación web que pida al usuario palabras continuamente hasta que el popup se deje vacío 
o se cancele. Crear una función que recibirá todas las palabras y devolverá un mapa
que contenga como clave cada palabra y cuyo valor será el número de veces que aparece 
esa palabra en el array. Mostrar los resultados por pantalla.
Ayuda: Como en las 2 prácticas se pide introducir las palabras y devolver el resultado de la misma forma, 
podéis sacar esa parte del código a un script común que utilicen las 2 prácticas (main.js).
*/
