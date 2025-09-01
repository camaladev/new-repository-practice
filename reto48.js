/**

## 2. El Número Solitario
Te daremos un array de números donde todos los números se repiten dos veces, excepto uno. 
Tu tarea es encontrar y devolver ese número único.

Ejemplo 1: solitario([2, 2, 1]) debería devolver 1

Ejemplo 2: solitario([4, 1, 2, 1, 2]) debería devolver 4

Ejemplo 3: solitario([1, 1, 2, 2, 3, 4, 4, 5, 5]) debería devolver 3

Pista: ¿Cómo podrías contar la frecuencia de cada número en el array?
 */

function findSolidary(arr){

    if(arr.length <= 0) {
        throw new Error("el valor debe ser mayor a 0")
    }
    
    return arr.reduce((acc, num) => acc ^ num)
    
  
}
console.log(findSolidary([1, 1, 2, 2, 3, 4, 4, 5, 5]))