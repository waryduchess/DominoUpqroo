const rl = require("readline-sync");


var left = [1,2,3,4,5,6];
var right = [1,2,3,4,5,6];
var position = ["horizontal","vertical"];
var fichas = {
   izquierda: null, //0-6
   derecha: null,  // 0-6
   posicion : null
  };

const dominos = [];
for (var cleft = 0; cleft <= left.length; cleft++) {
  for (let cright = cleft+1; cright <= right.length; cright++) {
    dominos.push({ izquierda: cleft ,derecha: cright, posicion:position[0]});
  }
}
dominos.push({izquierda:0, derecha:0, posicion:position[1]})
dominos.push({izquierda:1, derecha:1, posicion:position[1]})
dominos.push({izquierda:2, derecha:2, posicion:position[1]})
dominos.push({izquierda:3, derecha:3, posicion:position[1]})
dominos.push({izquierda:4, derecha:4, posicion:position[1]})
dominos.push({izquierda:5, derecha:5, posicion:position[1]})
dominos.push({izquierda:6, derecha:6, posicion:position[1]})
console.log("las fichas con",dominos);
const players = rl.question("¿cuantos jugadores seran?", {});
const totalfichas = players * 5;
var dominoplayers = {};

for (var cTfichas = 0; cTfichas < 5; cTfichas++) {
    for (var cPlayers = 0; cPlayers < players; cPlayers++) {
      if (!dominoplayers["player_" + cPlayers]) {
        dominoplayers["player_" + cPlayers] = [];
      }

      dominoplayers["player_" + cPlayers].push(dominos.shift());
    }
  }
  console.log(dominoplayers);
  console.log(dominos)
  var well = [];
 
//well.push(dominos.shift());
  //console.log(well);
