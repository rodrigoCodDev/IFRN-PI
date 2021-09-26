function converter(){

    // Obtendo valor
    var valor = parseFloat(prompt("Digite uma temperatura em ºC (Celsius):"));

    // Calculando valores de temperatura
    valorKelvin = valor + 273.15;
    valorFahrenheit = (valor * 1.8) + 32;
    
    // Apresentando resultados
    var apresentacao = document.getElementById("apresentacao");
    var kelvin = document.getElementById("kelvin");
    var fahrenheit = document.getElementById("fahrenheit");

    apresentacao.innerHTML = "A temperatura de " + valor.toString().replace(".", ",") + " ºC, corresponde a...";
    kelvin.innerHTML = valorKelvin.toString().replace(".", ",") + "ºK (Kelvin)";
    fahrenheit.innerHTML = valorFahrenheit.toString().replace(".", ",") + "ºF (Fahrenheit)";
}

