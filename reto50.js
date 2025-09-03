// Ejemplo:
// findPairs([1, 2, 3, 4, 5], 5) → [[1, 4], [2, 3]]
// findPairs([1, 1, 2, 3], 3) → [[1, 2]]

function findPairs(arr, target) {
    
    if(Array.isArray(arr)!= true){
        throw new Error("NO ES UN ARRAY")
    }
    const resultado  = []
    const usados = new Set()
    
   for (let i = 0; i< arr.length; i++){
        
        for(let j= i + 1; j< arr.length; j++){
            let a = arr[i]
            let b = arr[j]

            if(a + b  == target){
                
            let par_ordenado = [Math.min(a,b), Math.max(a,b)]
            let key = par_ordenado.join("-")
            
            if(!usados.has(key)){
                resultado.push(par_ordenado)
                usados.add(key)
            }
            

            }
        }
   }
   return resultado;
}

console.log(findPairs([1, 2, 3, 4, 5,8,1,2,3,6], 5))
