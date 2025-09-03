// Ejelo:
// isPalindrome("A man a plan a canal Panama") → true
// isPalindrome("race a car") → false

function isPalindrome(str) {

    if(typeof(str) != 'string'){
        throw new Error("error")
    }

    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reverse_string = cleanStr.split('').reverse().join('')

    return cleanStr == reverse_string
    
}
let a = 1
console.log(isPalindrome("race a car"))