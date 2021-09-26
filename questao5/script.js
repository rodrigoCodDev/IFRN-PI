// Obtendo todos os elementos HTML ligados a classe conversao
var listaConversao = document.getElementsByClassName("conversao");
var listaSufixos = [
    " quilômetros (Km)",
    " hectômetros (Hm)",
    " decâmetros (Dam)",
    " decímetros (dm)",
    " centímetros (cm)",
    " milímetros (mm)"
];


// Convertendo determinado valor
function converter(){

    // Obtendo valor
    var valor = parseFloat(prompt("Digite um valor de distância em metros(m):"));

    var apresentacao = document.getElementById("apresentacao");
    apresentacao.innerHTML = "A distância de " + valor.toString().replace(".", ",") + " metros, corresponde a...";

    
    // Alocando resultados aos campos
    var divisor = 1000;

    for(let contador = 0; contador < listaConversao.length; contador++){
        let conversao = (valor / divisor)
        conversao = conversao.toString().replace(".", ",");

        listaConversao[contador].innerHTML = conversao + listaSufixos[contador];
        divisor /= 10;

        if (contador == 2) {
            // Dividindo por 10 mais uma vez apos Dam
            divisor /= 10;
        } 
    }
}

