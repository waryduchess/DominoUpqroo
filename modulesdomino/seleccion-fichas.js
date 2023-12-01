// Importando la librería 'inquirer' para realizar interacciones de consola interactivas
const inquirer = require("inquirer");

// Función asincrónica para permitir la selección de opciones mediante inquirer
async function selectOption(options, message = "Selecciona una opción:") {
    // Se utiliza inquirer para presentar una lista de opciones y obtener la selección del usuario
    const result = await inquirer.prompt([
        {
            type: "list",
            name: "selectedOption",
            message,
            choices: options,
        },
    ]);
    // Devuelve el resultado de la selección
    return result;
}

// Función que realiza la selección de un domino basado en la opción proporcionada
async function selectionDomino(opciones, option) {
    var seleccion = null;

    // Se utiliza un switch para determinar el comportamiento según la opción proporcionada
    switch (option) {
        case "CHOICE":
            // Se mapea el array de opciones de dominó a un formato compatible con inquirer
            const fichasArray = opciones.map((ficha) =>
                ({
                    value: ficha,
                    name: `Ficha: Izquierda: ${ficha.izquierda}, Derecha: ${ficha.derecha}, Posición: ${ficha.posicion}`,
                })
            )
            fichasArray.push({
                //agregar dos opciones nuevas(tomar del deck y decir uno)
                value: {izquierda:"+1", derecha:"+1",posicion:"N/A"}, 
                name: `agarrar ficha del pozo`
              });     
           // fichasArray.push({
             //   value: fichas,
               // name: `tomar ficha del pozo`
            //})
            // Se llama a la función selectOption para que el usuario elija una ficha de la lista
            seleccion = await selectOption(fichasArray, "Selecciona una ficha:");
            break;
        default:
            // En caso de que la opción no coincida con ninguna acción conocida, no se realiza ninguna selección
            break;
    }

    // Devuelve la selección realizada
    return seleccion;
}

// Exporta la función selectionDomino para que pueda ser utilizada en otros archivos
module.exports = selectionDomino;
