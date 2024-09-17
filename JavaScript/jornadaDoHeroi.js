/* A JORNADA DO HEROI TALENTOSO DO REINO DOS TALENTOS

Em um reino distante, um jovem aldeão descobre uma espada mágica que revela seu destino como herói. Com coragem e poucos recursos, ele parte
em uma jornada 

O Cenário:
"O jogador é um herói que embarca em uma jornada épica. Ao longo do caminho, ele encontrará inimigos, coletará"

*/ 

// Inventário inicial do herói
let inventario = ["Espada do destino", "Dragona das sombras", "Botas da agilidade", "Adaga Comum x2", "Anel do ladrão", "Amuleto da sorte"]

// Exibindo o inventário inicial
console.log("Seu inventário inicial:", inventario)

/*3. Encontrando um Tesouro:
"O herói encontra um baú de tesouro e ganha um novo item!" */

// Herói encontra um novo item
let novoItem = "Galho x3";
inventario.push(novoItem);

// Exibindo o inventário atualizado
console.log("Você encontrou um baú! Novo item adicionado ao seu inventário:", inventario, "\n")

/*4. Enfrentando um Inimigo:
"O herói enfrenta um goblin! Ele pode usar a espada ou o escudo do seu inventário para lutar." */

// Herói enfrenta um goblin
console.log("Um goblin apareceu! Prepare-se para a batalha.");

// Usando itens do inventário para lutar
let itemUsado1 = inventario[3]; // Usando Adaga comum x2
console.log(`Você ataca o goblin com sua ${itemUsado1}!`, "\n");

/*5. Securando:
"Durante a batalha, o herói perde vida e precisa se recuperar." */

let itemUsado2 = inventario[1]; // Usando um item para escapar
console.log(`Você utiliza sua ${itemUsado2} e se esconde nas sombras para se curar`)

/* Concluindo a aventura */ 