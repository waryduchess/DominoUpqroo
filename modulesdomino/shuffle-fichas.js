// Función que realiza el barajeo de las fichas de dominó en un array
const fichasShuffle = (dominos) => {
    // Se utiliza un bucle para recorrer el array de dominós en orden inverso
    for (let i = dominos.length - 1; i > 0; i--) {
        // Se genera un número aleatorio entre 0 e i (incluyendo i)
        const j = Math.floor(Math.random() * (i + 1));

        // Se intercambian las posiciones de los dominós en las posiciones i y j
        [dominos[i], dominos[j]] = [dominos[j], dominos[i]];
    }
}

// Exporta la función fichasShuffle para que pueda ser utilizada en otros archivos
module.exports = fichasShuffle;
