/* 
## 1. Inversor de Palabras
*Escribe una función que reciba una cadena de texto (string) y 
*devuelva una nueva cadena donde cada palabra esté invertida, pero manteniendo el 
*orden original de las palabras.

*Ejemplo 1: inversor("Hola Mundo") debería devolver "aloH odnuM"

*Ejemplo 2: inversor("Esto es una prueba") debería devolver "otsE se anu abeurp"

*Pista: Piensa en cómo puedes dividir la cadena en palabras, trabajar con cada una y luego unirlas de nuevo.

*/
function inversor(texto){

    if(typeof(texto) != 'string'){
        throw new Error("Valida que sea un string")
    }
    
    return texto
    .split(" ")
    .map(l => l.split("").reverse().join("")).join(" ")

    
}


console.log(inversor("HOla como estas"))