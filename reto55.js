// Ejemplo:
// filterAndSquare(|, 10) → [16, 36]
// Explicación: pares son [2,4,6] → [4,16,36] → solo [16,36] > 10

function filterAndSquare(numbers, threshold) {
    
    if(!Array.isArray(numbers)){
        throw new Error("No es un array")
    }
    
 return numbers
        .filter(value => !isNaN(value))      // Solo números
        .filter(value => value % 2 === 0)    // Solo pares
        .map(value => Math.pow(value, 2))    // Elevar al cuadrado
        .filter(value => value > threshold);
}
let a = filterAndSquare([1, 2, "ds", 4, 5, 6],10)
console.log(a)
