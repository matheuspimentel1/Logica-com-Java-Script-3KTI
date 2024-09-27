// Valor da compra

let valorDaCompra = 500

// Verificando a faixa de desconto e calculando o valor final

if (valorDaCompra <= 100){
    console.log("Você não tem desconto. O valor da compra ficou R$ " + valorDaCompra.toFixed(2))
} else if (valorDaCompra > 100 && valorDaCompra <= 500) {
    console.log("Você tem 10% de desconto. O valor da compra ficou R$ " + valorDaCompra.toFixed(2) * 0.9)
} else {
    console.log("Você tem 15% de desconto. O valor da compra ficou R$ " + valorDaCompra.toFixed(2) * 0.85)
}
