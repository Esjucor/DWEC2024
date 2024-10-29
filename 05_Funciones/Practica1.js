
function pedirPalabras1(){
  let palabras = [];
  let palabra;
  // Bucle que se ejecuta mientras el usuario ingrese palabras

  while (true) {
    palabra = prompt(
      'Introduce una palabra (deja vacío o cancela para salir):'
    );

    //Sale del bucle si se presiona cancelar o se deja vacio.
    if (palabra === null || palabra.trim() === '') {
      break;
    }
    palabras.push(palabra.trim().toLowerCase());
  }
  // Eliminar duplicados usando un Set y convertir de nuevo a un array
  let palabrasUnicas = Array.from(new Set(palabras));
  // Ordenar alfabéticamente en español
  palabrasUnicas.sort((a, b) => b.localeCompare(a, 'es'));
  // Muestra las palabras únicas y ordenadas
  if (palabrasUnicas.length > 0) {
    alert('Palabras ingresadas (únicas y ordenadas en orden inverso):\n' + palabrasUnicas.join(', '));
  } else {
    alert('No has introducido ninguna palabra');
  }
}

/*
Crea una aplicación web que pida al usuario palabras continuamente hasta que el popup se deje vacío 
o se cancele. A continuación, se eliminarán todas las palabras repetidas y además se ordenarán en español, 
pero en orden inverso (de la Z a la A) y se mostrará el resultado por pantalla.
Utilizar funciones flecha si se considera apropiado.
Ayuda: cancelar el popup devuelve null.
*/