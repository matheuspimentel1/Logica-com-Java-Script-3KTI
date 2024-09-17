// Crie uma array com os valores: 1, 2, 3, 4, 5 e 6.
const numeros = [1, 2, 3, 4, 5, 6];

// 1. Determine o tamanho do array
console.log("O tamanho inicial da array:", numeros.length)

// 2. Adicione o número 7
numeros.push(7)
console.log("Array após adicionar o número 7:", numeros)

// 3. Remova os números 4 e 5
numeros.splice(3, 2)
console.log("Array após remover os números 4 e 5:", numeros)

// 4. Determine o novo tamanho da array
console.log("O tamanho novo da array:", numeros.length)
