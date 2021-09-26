function comprarProduto(){
    var nome = prompt("Qual produto você está comprando?");
    var preco = parseFloat(prompt("Quanto custa esse " + nome + " que você está comprando?"));
    var pagamento = parseFloat(prompt("Qual foi o valor que você deu para pagar " + nome + "?"));
    
    if (pagamento < preco) {
        alert("Erro!!! Pagamento menor que preço.\n" +
                "A compra não pode ser efetuada.");
    } else {
        calcularTroco(nome, preco, pagamento);
    }
}

function calcularTroco(nome, preco, pagamento) {
    var troco = pagamento - preco;

    alert("Você comprou " + nome + " que custou R$ " + 
            preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "\n" +
            
            "Deu " + pagamento.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + 
            " em dinheiro e vai receber " + troco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + 
            " de troco \n" +
            
            "Volte sempre!!!");
}

