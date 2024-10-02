// Função que será executada quando o botão for clicado
function adicionandoGiria() {

    // Obtendo o valor inserido no campo de texto com o id "giriasInput"
     giria = document.getElementById("giriasInput").value
    // Selecionando a div onde os resultados serão exibidos
     resultadoDiv = document.getElementById("resultado")
    // Verificando se o campo do texto não está vazio
     if(giria) {
        novaGiria = document.createElement("p")
        // Definindo o conteúdo de texto do <p> como a gíria inserida
        novaGiria.textContent = "Gíria adicionada: " + giria
        // Exibindo a gíria adicionada na div
        resultadoDiv.appendChild(novaGiria)
        // Limpando o input
        document.getElementById("giriasInput").value = ''
    } else {
        alert("Por favor, insira uma gíria!")
    }
}