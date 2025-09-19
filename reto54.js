// Ejemplo:
// countWords("Hola mundo, hola JavaScript") 
// → { hola: 2, mundo: 1, javascript: 1 }

function countWords(sentence) {
  
    if(typeof(sentence) != 'string'){
        throw new Error("no es numero es un string")
    }

    let clean_text = sentence.replace(/[\p{P}\p{S}]/gu, '').toLocaleLowerCase().split(' ')
   
    let repeat = clean_text.reduce((acc, value)=>{

        acc[value] = (acc[value]|| 0) + 1
        return acc
    },{})
   
    return repeat
    
    

}

let a  = countWords("Hola mundo, hola JavaScript")
console.log(a)