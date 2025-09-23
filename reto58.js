// Criterios:
// - Mínimo 8 caracteres
// - Al menos 1 mayúscula
// - Al menos 1 minúscula  
// - Al menos 1 número
// - Al menos 1 carácter especial (!@#$%^&*)

// Ejemplo:
// validatePassword("Abc123!") 
// → { valid: true, errors: [] }

// validatePassword("abc123")
// → { valid: false, errors: ["Falta mayúscula", "Falta carácter especial"] }

function validatePassword(password) {

    let result = { 
      valid: true, 
      Errors: [] 
    }

    const validations = [
        {
            test: password.length >= 8,
            error: "Mínimo 8 caracteres requeridos"
        },
        {
            test: /[A-Z]/.test(password),
            error: "Falta mayúscula"
        },
        {
            test: /[a-z]/.test(password),
            error: "Falta minúscula"
        },
        {
            test: /\d/.test(password),
            error: "Falta número"
        },
        {
            test: /[!@#$%^&*]/.test(password),
            error: "Falta carácter especial"
        }
    ];

    validations.forEach(validation => {
        if (!validation.test) {
            result.valid = false;
            result.Errors.push(validation.error);
        }
    });
    
    return result;
}

let pass = validatePassword("asdfsf")
console.log(pass)