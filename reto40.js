/**
 * Escriba una función que acepte una matriz de números como parámetro y 
 * devuelva la matriz después de eliminar todos los números duplicados.

Ejemplo removeDuplication([1,2,3,2,4,6,2,6,7]) Salida [1,3,4,7].

Aquí 2,6 están duplicados en la matriz, por lo que debemos eliminar 
todos los números que están duplicados. La salida será 1,3,4,7 después de retirar 2,6.

Entrada : [1,2,1,2,1,1,2,2] , Salida : [].

Entrada : [2,5,6,7,5,2,6] , Salida: [7].
 */
function eliminar_duplicados(arr){

    if(arr.length === 0){
        return []
    }
    
    let eliminar_valor  = arr.reduce((acc, item) =>{
        acc[item] = (acc[item] || 0) +1
        return acc
    
    },{})
     

    let valor_reducido = Object.keys(eliminar_valor).filter(valor =>{
    return eliminar_valor[valor] === 1; 
    }).map(Number)
      return valor_reducido
        }
  


a = [2,5,6,7,5,2,6]
console.log(eliminar_duplicados(a))