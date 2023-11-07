const fichasShuffle = (dominos) => { 
    //se crea una fincion y le pasamos el arreglo (deck)
    for (let i = dominos.length - 1; i > 0; i--) { 
        //se crea un for, declqaramos "i", 
        //que es el indice y se iguala a deck.legth que 
        //es su tamaño y luego "deck.length - 1; i > 0; i--" 
        //abajo hasta el 1, se utiliza para iterar a travez 
        //de los elementos de la matriz en oreden inverso, 
        //desde el ultimo hasta el inicio 
        const j = Math.floor(Math.random() * (i + 1));
        //"j" es un numero de punto flotante 
        //entre cero (inclusive) y uno (exclusivo)
        [dominos[i], dominos[j]] = [dominos[j], dominos[i]];
        //los elementos de "i" y "j", se intercambian 
        //mediante una asignacion desestructurante 
    }
//deck [i] y deck [j] se intercambian 
//y asi se baragea el deck y nos da el orden aleatorio 
}

module.exports = fichasShuffle