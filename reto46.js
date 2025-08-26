/*
*Crea una función que reciba un número entero. La función debe encontrar
 la suma de todos los múltiplos de 3 o 5 
*que sean menores que ese número. Si un número es múltiplo de ambos (como 15), 
solo debe contarse una vez.
*/
function findNumber(number){
    let suma = 0;

    if(typeof(number) != 'number'){
       return -1
    }

    for(let i = 0; i < number; i++){
        
        if(i % 3 == 0 || i % 5 ==0){
            suma = suma + i
        }
    }
    return suma;
}

let numero = 15;

let a = findNumber(numero)
console.log(a)