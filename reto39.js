/**
 * Su tarea es eliminar todas las palabras duplicadas de una cadena, 
 * dejando solo entradas de palabras individuales (primeras).

Ejemplo:

Entrada:

'alfa beta beta gamma gamma gamma delta alfa beta beta gamma gamma gamma delta'

Salida:

'alfa beta gamma delta'
 */

function eliminar(string){
    
    if(string.trim().length === 0){
        return []

    }
    
    let datos_limpios = string.toLowerCase().trim()
    
    let arr_words = datos_limpios.split(' ')
    
    return [...new Set(arr_words)].join(" ")
}

let a = 'alfa beta beta gamma gamma gamma delta alfa beta beta gamma gamma gamma delta'
console.log(eliminar(a))