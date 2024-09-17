// Objeto cachorro

const cachorro = {
    nome: 'Ramona',
    idade: 11,
    raca: 'Yorkshire',
    cor: 'Marrom',
    latir: function(){
        console.log("Au, au, au")
    },
    buscarBrinquedo: function(){
        console.log("PARA RAMONA!")
    },
    unificando: function(){
        console.log(`Esta é a ${this.nome} uma ${this.raca} de ${this.idade} anos e cor ${this.cor}`)
    }
}

// fazendo a chamada

cachorro.latir()
console.log("\n")
cachorro.buscarBrinquedo()
console.log("\n")
cachorro.unificando()
