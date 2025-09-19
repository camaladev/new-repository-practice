// Ejemplo:
// findPrimesInRange(10, 30) → [11, 13, 17, 19, 23, 29]
// findPrimesInRange(1, 10) → [2, 3, 5, 7]

function isPrime(num){
    
    if(num < 0){
        return false
    }

    if( num == 2){
        return true
    }
    if(num % 2 == 0){
        return false
    }

    for (let i = 3; i < Math.sqrt(num); i += 2){

        if(num % i != 0){
            return true
        }
    }
}

function findPrimesInRange(start, end) {
    
    if(typeof(start) != 'number' || typeof(end) != 'number'){
        throw new  Error("Ningún numero es numero")
    }
    
    let pairs = []
    
    for (let i = start ; i <= end; i++){
        
        if(isPrime(i)){
            pairs.push(i)
        }
    }
    return pairs
}

let a = findPrimesInRange(1,100000085)
console.log(a)
