/**
 * Defina una 
 * función que elimine duplicados de una matriz de números 
 * no negativos y los devuelva como resultado.
 * El orden de la secuencia tiene que permanecer igual.
 * [1, 1, 2] -> [1, 2]
 */

function sin_duplicados_filter(arr) {
   return[... new Set(arr)]

}
let arr_filter = [1, 1, 3, 1, 2];
console.log(sin_duplicados_filter(arr_filter))

