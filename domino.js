const rl = require("readline-sync");


var left = [1,2,3,4,5,6];
var right = [1,2,3,4,5,6];
var fichas = {
   izquierda: null,
   derecha: null
  };

const dominos = [];
for (var cleft = 0; cleft <= left.length; cleft++) {
  for (let cright = cleft; cright <= right.length; cright++) {
    dominos.push({ izquierda: cleft ,derecha: cright });
  }
}
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
 
  well.push(dominos.shift());
  console.log(well);
