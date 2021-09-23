
// Inserção da ação no botão

// Obtendo elementos do HTML que possuem class "botao"
var botoes = document.getElementsByClassName("botao");

// Inserindo ação de clique para cada um dos elementos de botoes
for(let index = 0; index < botoes.length; index++) {
    botoes[index].setAttribute("onclick", "clique(" + index + ")");
}


// Função de clique
function clique(index) {
    alert("Você clicou no "+ (index + 1) +"º botão.");
}


