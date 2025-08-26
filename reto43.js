/**
 * Función de movimiento del juego de terminal
En este juego, el héroe se mueve de izquierda a derecha. El jugador lanza el dado y avanza el número de casillas que indica el dado dos veces .

Crea una función para el juego terminal que tome la posición actual del héroe y el lanzamiento (1-6) y devuelva la nueva posición.
move(3, 6) should equal 15
 */

const move = (position, move) =>{
    return  (position + (move * 2)) 

}
let posicion = 1
let dado = 5
console.log(move(posicion, dado))