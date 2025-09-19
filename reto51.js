// Ejemplo:
const users = [
    { name: "Ana", age: 25, city: "Lima" },
    { name: "Carlos", age: 30, city: "Lima" },
    { name: "María", age: 25, city: "Cusco" },
    { name: "José", age: 30, city: "Lima" }
];

// groupBy(users, "city") → { Lima: 3, Cusco: 1 }
// groupBy(users, "age") → { 25: 2, 30: 2 }

function groupBy(arr, propertys) {
    
    if(!Array.isArray(arr)){
        throw new Error("TIENE QUE SER UN ARRAY")
    }


    let data = arr.reduce((acc,value) =>{
        
        acc[value[propertys]] = (acc[value[propertys]] || 0) + 1
        return acc
    },{})

    console.log(data)
}
groupBy(users, "age")
