// Importa la biblioteca readline-sync para interactuar con la entrada del usuario
const rl = require("readline-sync");

// Función para que el jugador seleccione una ficha
function seleccionFichas(dominoplayers, well) {
  // Imprime el estado actual del juego (fichas en el pozo y fichas del jugador)
  imprimirJuego(dominoplayers, well);

  // Pide al jugador que ingrese el índice de la ficha que desea seleccionar
  const indice = rl.questionInt('Selecciona una ficha (índice): ', {});

  // Verifica si el índice proporcionado por el jugador es válido
  if (indice >= 0 && indice < dominoplayers["player_0"].length) {
    // Obtiene la ficha seleccionada por el jugador
    const fichaSeleccionada = dominoplayers["player_0"][indice];

    // Realiza las acciones necesarias con la ficha seleccionada (la agrega al pozo y la quita de las fichas del jugador)
    well.push(fichaSeleccionada);
    dominoplayers["player_0"].splice(indice, 1);
  } else {
    // Informa al jugador que el índice no es válido
    console.log('Índice no válido. Elige un índice válido.');
  }
}

// Función para imprimir el estado actual del juego
function imprimirJuego(dominoplayers, well) {
  console.log('Fichas en el pozo:', well);
  console.log('Tus fichas:', dominoplayers["player_0"]);
}

// Exporta la función seleccionFichas para que pueda ser utilizada en otros módulos
module.exports = seleccionFichas;
function jugadorConMasPuntos() {
  var maxPuntos = 0;
  var jugadoresConMaxPuntos = [];

  for (const jugadorI in dominoplayers) {
    var puntos = calcularPuntos("player_"+jugadorI);
    if (puntos > maxPuntos) {
      maxPuntos = puntos;
      jugadoresConMaxPuntos = ["player_"+jugadorI]; // Comienza una nueva lista de jugadores con la puntuación más alta
    } else if (puntos === maxPuntos) {
      jugadoresConMaxPuntos.push("player_"+jugadorI); // Agrega a este jugador a la lista de jugadores con la puntuación más alta
    }
  }

  // Imprime el jugador o los jugadores con más puntos
  if (jugadoresConMaxPuntos.length === 1) {
    console.log(`El jugador con más puntos es ${jugadoresConMaxPuntos[0]} con ${maxPuntos} puntos.`);
  } else {
    console.log(`Hay un empate entre los siguientes jugadores, todos con ${maxPuntos} puntos: ${jugadoresConMaxPuntos.join(", ")}`);
  }
}