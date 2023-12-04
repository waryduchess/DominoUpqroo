
function calcularPuntos(jugadorI) {
  var puntos = 0;
  for (const ficha of dominoplayers[jugadorI].fichas) {
    puntos += ficha.izquierda + ficha.derecha;
  }
  return dominoplayers[jugadorI].puntaje = puntos
}
var well = [1,2,3,4,5,6];
console.log(well[0],well[well.length-1])

module.exports = calcularPuntos 