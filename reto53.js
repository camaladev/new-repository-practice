function resolveDependencies(deps) {
  const state = {};   // 0 = no visitado, 1 = en proceso, 2 = terminado
  const result = [];

  // Inicializar todos los nodos en 0
  for (let task in deps) {
    state[task] = 0;
  }
 

  function dfs(task) {
    console.log(task)
    if (state[task] === 1) return false; // ciclo detectado
    if (state[task] === 2) return true;  // ya procesado

    state[task] = 1; // en proceso

    for (let dep of deps[task]) {
      if (!dfs(dep)) return false;
    }

    state[task] = 2; // terminado
    result.push(task);
    return true;
  }

  // Revisar todas las tareas
  for (let task in deps) {
    if (state[task] === 0) {
      if (!dfs(task)) return null; // ciclo
    }
  }

  return result.reverse(); // orden válido
}

// ----------------------------
// Ejemplo válido
const tasks = {
  "T1": [],
  "T2": ["T1"],
  "T3": ["T2"],
  "T4": ["T1", "T3"]
};
console.log(resolveDependencies(tasks));
// → ["T1","T2","T3","T4"]

// Ejemplo con ciclo
const cyclic = {
  "A": ["B"],
  "B": ["C"],
  "C": ["A"]
};
console.log(resolveDependencies(cyclic));
// → null
