// Função para retornar um novo array com o primeiro e o último número divididos por dois.

function dividirPrimeiroUltimoporDois(numeros){
    let primeiro = numeros[0]/2 // Dividimos o primiero número da array por dois
    let ultimo = numeros[numeros.length-1]/2 // Dividimos o último da array por dois
    return[primeiro, ultimo]
}

// Chamada
let arrayNumeros = [10,20,30,40,50]
let resultado = dividirPrimeiroUltimoporDois(arrayNumeros)

console.log("Novo array:", resultado)
