// Ejemplo:
// findMissingNumber([1, 2, 4, 5, 6]) → 3
// findMissingNumber([2, 3, 4, 5, 7]) → 6

function findMissingNumber(arr) {
    
    if(!Array.isArray(arr)){
        throw new Error("Los argumentos no son válidos")
    }

    let first_element = arr[0]
    let end_element = arr[arr.length - 1]

    let cantidad = (end_element - first_element + 1)

    let sum_ = ((first_element + end_element) * cantidad) / 2;
    
    let sum_real = arr.reduce((acc, value) => acc + value, 0 )
    
    return sum_- sum_real

}

let a = findMissingNumber([1,2,4,5,6])
console.log(a)