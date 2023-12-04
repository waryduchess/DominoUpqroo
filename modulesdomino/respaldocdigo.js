// Importación de módulos necesarios
const rl = require("readline-sync");
const fichasRevueltas = require("./shuffle-fichas");
const selectOption = require("./seleccion-fichas");
const selectionDomino = require("./seleccion-fichas");

// Arrays que representan los posibles valores para los lados izquierdo y derecho de los dominós
var left = [1, 2, 3, 4, 5, 6];
var right = [1, 2, 3, 4, 5, 6];

// Posiciones posibles para colocar un domino
var position = ["horizontal", "vertical"];

// Objeto que representa un domino con valor izquierdo, valor derecho y posición
var fichas = {
  izquierda: null, // Valor izquierdo (0-6)
  derecha: null,    // Valor derecho (0-6)
  posicion: null    // Posición (horizontal o vertical)
};
async function jugar() {
  const dominos = [];
  var winner = false;
  // Generando todos los dominós posibles y agregándolos al array de dominós
  for (var cleft = 0; cleft <= left.length; cleft++) {
    for (let cright = cleft + 1; cright <= right.length; cright++) {
      dominos.push({ izquierda: cleft, derecha: cright, posicion: position[0] });
    }
  }

  // Agregando dominós especiales con valores dobles para posiciones verticales
  dominos.push({ izquierda: 0, derecha: 0, posicion: position[1] });
  dominos.push({ izquierda: 1, derecha: 1, posicion: position[1] });
  dominos.push({ izquierda: 2, derecha: 2, posicion: position[1] });
  dominos.push({ izquierda: 3, derecha: 3, posicion: position[1] });
  dominos.push({ izquierda: 4, derecha: 4, posicion: position[1] });
  dominos.push({ izquierda: 5, derecha: 5, posicion: position[1] });
  dominos.push({ izquierda: 6, derecha: 6, posicion: position[1] });

  // Mostrando todos los dominós generados
  console.log("las fichas con", dominos);

  // Preguntando al usuario por el número de jugadores
  const players = rl.question("¿cuantos jugadores seran?", {});
  // Calculando el número total de dominós necesarios para todos los jugadores
  const totalfichas = players * 5;

  // Barajando los dominós de forma aleatoria
  fichasRevueltas(dominos);

  // Objeto para almacenar los dominós de cada jugador
  var dominoplayers = {};

  // Distribuyendo dominós a cada jugador
  for (var cTfichas = 0; cTfichas < 5; cTfichas++) {
    for (var cPlayers = 0; cPlayers < players; cPlayers++) {
      if (!dominoplayers["player_" + cPlayers]) {
        dominoplayers["player_" + cPlayers] = {
          fichas: [],
          puntaje: 0
        };
      }

      dominoplayers["player_" + cPlayers].fichas.push(dominos.shift());
    }
  }

  // Mostrando los dominós asignados a cada jugador


  // Mostrando los dominós restantes en el pozo general
  console.log(dominos);

  // Array para almacenar los dominós seleccionados (actualmente vacío)
  var well = [];
  well.push(dominos.shift());

  function validationFichas(fichas) {
    if (
      fichas.izquierda == well[well.length - 1].izquierda ||
      fichas.derecha == well[well.length - 1].izquierda ||
      fichas.izquierda == well[well.length - 1].derecha ||
      fichas.derecha == well[well.length - 1].derecha
    ) {
      return true;
    } else {
      return false;
    }
  }
  let jugadorConMulaMasAlta;
  let valorMulaMasAlta = 0;


  for (const jugador in dominoplayers) {
    const mulaActual = Math.max(
      ...dominoplayers[jugador].fichas.filter(domino => domino.posicion === "vertical")
        .map(domino => domino.izquierda)
    );

    if (mulaActual > valorMulaMasAlta) {
      valorMulaMasAlta = mulaActual;
      jugadorConMulaMasAlta = jugador;
    }
  }
  var jugadorI = jugadorConMulaMasAlta

var inicioJuego = false
  console.log("jugador acual", jugadorConMulaMasAlta)
  var result = await (selectionDomino(dominoplayers[jugadorI].fichas, "CHOICE"))
  result = result.selectedOption
  console.log(well);
  if (
    result.izquierda === "+1"
  ) {
    dominoplayers[jugadorI].fichas.push(dominos.shift());
  } else if (inicioJuego = false) {
    console.log("derecha")
    inicioJuego = true;
  } else if(validationFichas(result)){
    well.push(dominoplayers[jugadorConMulaMasAlta].fichas.splice(dominoIndex, 1)[0]);
  }

  let dominoIndex = dominoplayers[jugadorI].fichas.findIndex((ficha) => {
    return ficha.izquierda == result.izquierda && ficha.derecha == result.derecha;
  });

jugadorI = (jugadorI + 1)% players; 

}











// Aqui va el index obtenido
// Buscar carta seleccionada
// obtener el index de la carta (buscar result en el arreglo cardsPlayers[player])

//llave de la funcion jugar

jugar();
// Array para almacenar todos los dominós posibles
