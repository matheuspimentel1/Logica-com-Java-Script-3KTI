// Método splice(i, n) - remove n elementos a partir da posição i

const letras = ["A", "B", "C", "D", "E", "F", "G", "H"]
// indices (i)   0    1    2    3    4    5    6    7
console.log(letras)

letras.splice(2, 1)
//    letras = ["A", "B", "D", "E", "F", "G", "H"]
// indices (i)   0    1    2    3    4    5    6
console.log(letras)

letras.splice(3, 2) // letras = [ "A", "B", "D", "G", "H"]
console.log(letras)
