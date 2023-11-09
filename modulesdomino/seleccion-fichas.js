const inquirer = require("inquirer");
async function selectOption(options, message = "Selecciona una opción:") {
    const result = await inquirer.prompt([
      {
        type: "list",
        name: "selectedOption",
        message,
        choices: options,
      },
    ]);
    return result;
  }
  
  function selectionDomino(opciones, option) {
    var seleccion = null;
    switch (option) {
      case "CHOICE":
        const fichasArray = opciones.map((ficha, index) =>
          ({
            value: index,
            name: `Ficha: Izquierda: ${ficha.izquierda}, Derecha: ${ficha.derecha}, Posición: ${ficha.posicion}`,
          })
        );
        seleccion = selectOption(fichasArray, "Selecciona una ficha:");
        break;
      default:
        break;
    }
    return seleccion;
  }
  

module.exports = selectionDomino;
