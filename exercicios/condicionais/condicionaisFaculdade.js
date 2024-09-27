// Função para verificar se uma pessoa pode cursar uma faculdade
function podeCursarFaculdade(ensinoMedio, idade, outraFaculdade) {
    
    // Verificar se a pessoa atende à todos os requisitos
    if (ensinoMedio && idade >= 18 && !outraFaculdade ) {
        console.log("Você pode cursar uma faculdade pública!")
    } else if (ensinoMedio && idade >= 18 && outraFaculdade) {
        console.log("Você pode cursar uma faculdade privada, se estiver cursando outra faculdade privada.")
    } else {
        console.log("Você ainda não pode cursar uma faculdade. Seja paciente e continue se esforçando!")
    }
}
// Definição dos valores e apresentação do resultado
podeCursarFaculdade(true, 27, true)
