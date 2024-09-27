// Declarando a idade do nadador

let idade = 7

// Verificando em qual categoria ele se enquadra, de acordo com a sua idade

if (idade >= 5 && idade <= 7) {
    console.log("O nadador é da categoria Infantil A.")
} else if (idade >= 8 && idade <= 10) {
    console.log("O nadador é da categoria Infantil B")
} else if (idade >= 11 && idade <= 13) {
    console.log("O nadador é da categoria Juvenil A")
} else if (idade >= 14 && idade <= 17) {
    console.log("O nadador é da categoria Juvenil B")
} else if (idade >= 18) {
    console.log("O nadador é da categoria Adulto")
} else {
    console.log("O nadador é da categoria Bebês")
}
