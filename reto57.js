// Ejemplo:
// flattenArray([1, [2, 3], [4, [5, 6]]]) → [1, 2, 3, 4, 5, 6]
// flattenArray([1, 2, [3, [4, [5]]]]) → [1, 2, 3, 4, 5]

function flattenArray(arr) {
    if(!Array.isArray(arr)){
        throw new Error("Valida las entradas")
    }

    let result = []
    let stack = [...arr]
    
    while (stack.length > 0){
        
        const elem = stack.pop()
    
        if(Array.isArray(elem)){
            stack.push(...elem)
          
            
        }
        else{
            result.unshift(elem)
         
        }
    }
    return result;
}
let a = flattenArray([1, [1,2,3,[123.5]]]) 
console.log(a)