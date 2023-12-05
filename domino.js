// Importación de módulos necesarios
const rl = require("readline-sync");
const fichasRevueltas = require("./modulesdomino/shuffle-fichas");
const selectionDomino = require("./modulesdomino/seleccion-fichas");
const contadorPuntos = require("./modulesdomino/puntos");
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


  function validationIzquierda(fichas) {
    if (
      fichas.izquierda == well[0].izquierda ||

      fichas.izquierda == well[0].derecha
    ) {
      return true;
    } else {
      return false;
    }
  }
  function validationDerecha() {
    if (

      fichas.derecha == well[well.length - 1].izquierda ||

      fichas.derecha == well[well.length - 1].derecha
    ) {
      return true;
    } else {
      return false;
    }
  }
  function calcularPuntos(jugadorI) {
    var puntos = 0;
    for (const ficha of dominoplayers[jugadorI].fichas) {
      puntos += ficha.izquierda + ficha.derecha;
    }
    return dominoplayers[jugadorI].puntaje = puntos;
  }

  // Calculamos los puntos para cada jugador


  // Mostramos los puntos de cada jugador

  let jugadorConMulaMasAlta;
  let valorMulaMasAlta = 0;

  for (const jugador in dominoplayers) {
    const mulaActual = Math.max(
      ...dominoplayers[jugador].fichas.filter(domino => domino.posicion === "vertical")
        .map(domino => domino.izquierda)
    );

    if (mulaActual > valorMulaMasAlta) {
      valorMulaMasAlta = mulaActual;
      jugadorConMulaMasAlta = jugador.substring(7); // Quita el prefijo "player_"
    }
  }

  var jugadorI = jugadorConMulaMasAlta;

  do {
    let finDelJuego = false
    let inicioJuego = false

    while (finDelJuego == false) {
      console.log("jugador actual", "player_" + jugadorI)
      console.log('ficha del lado izquierdo:', well[0]);
      console.log('ficha del lado derecho:', well[well.length - 1]);

      //well[0], "ficha del lado derecho", well[well.length])
      var result = await (selectionDomino(dominoplayers["player_" + jugadorI].fichas, "CHOICE"))

      result = result.selectedOption

      var indiceFicha = dominoplayers["player_" + jugadorI].fichas.findIndex((ficha) => {
        return ficha.izquierda == result.izquierda && ficha.derecha == result.derecha
      })

      if (
        result.izquierda === "+1"
      ) {
        dominoplayers["player_" + jugadorI].fichas.push(dominos.shift());
      } else if (result.izquierda === "saltarTurno") {
        jugadorI = (jugadorI + 1) % players

      } else if (result.izquierda === "terminar") {
        for (var i = 0; i < players; i++) {
          calcularPuntos("player_" + i);
          console.log("players_" + i, dominoplayers["player_" + i].puntaje, "puntos")
        }
        finDelJuego = !finDelJuego

      } else if (inicioJuego == false && result.izquierda == result.derecha) {
        console.log("funciona please")
        well.push(dominoplayers["player_" + jugadorI].fichas.splice(indiceFicha, 1)[0]);
        //inicioJuego = true;
        jugadorI = (jugadorI + 1) % players



      } else if (validationDerecha(result)) {

        console.log("funciona please")
        well.unshift(dominoplayers[jugadorI].fichas.splice(indiceFicha, 1)[0]);

      } else if (validationIzquierda(result)) {
        console.log("funciona please")
        well.push(dominoplayers["player_" + jugadorI].fichas.splice(indiceFicha, 1)[0]);





        

      }
      jugadorI = (jugadorI + 1) % players
    } winner == !winner

  } while (winner = false)
}

jugar();

