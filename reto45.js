/**
 * Descripción:
Tú y un amigo habéis decidido jugar a un juego para ejercitar vuestra intuición estadística. El juego funciona así:

Tienes un montón de canicas rojas y azules. Para empezar el juego, coges un puñado de canicas de cada color 
 las metes en la bolsa, anotando cuántas de cada color entran. Por turnos, introduces la mano en la bolsa,
  adivinas un color y luego sacas una canica. Obtienes un punto si aciertas. El truco está en que solo tienes 
  tres segundos para adivinar, así que tienes que pensar rápido.

Has decidido escribir una función guessBlue()para calcular automáticamente si debes adivinar "azul" o "rojo". 
La función debe aceptar cuatro argumentos:

La cantidad de canicas azules que pones en la bolsa para empezar.
La cantidad de canicas rojas que pones en la bolsa para empezar.
la cantidad de canicas azules extraídas hasta el momento (siempre menor que la cantidad inicial de canicas azules)
la cantidad de canicas rojas extraídas hasta el momento (siempre menor que la cantidad inicial de canicas rojas)
guessBlue()Debería devolver la probabilidad de sacar una canica azul, expresada como un valor de punto flotante. 
Por ejemplo, guessBlue(5, 5, 2, 3)debería devolver 0.6.
 */

function guessBlue(blue, red, quantity_blue, quantity_red){

    if(typeof(red) !== "number" || typeof blue !== "number"){
        return -1
    }
    if(quantity_blue >  blue || quantity_red > red){
        return -1
    }
    if(typeof(quantity_red) !== "number" || typeof quantity_blue !== "number"){
        return -1
    }
    let total_blue = blue - quantity_blue
    let total_red = red - quantity_red
    
    let total_marbles = total_blue + total_red

    return total_blue / total_marbles
}
let average = guessBlue(5,5,2,3)
console.log(average);