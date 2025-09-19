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

    let values = { 
      valid: true, 
      Errors: [] 
    }

    const validations =[

        { 
            test : password.length > 8,
            error : "La contraseña tiene que tener mas de 8 caracteres "

        },
        {
            
        },
        {
            
        },
        {
            
        },
        {
            
        },
        {
            
        }
    ]
}