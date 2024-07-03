document.getElementById('IMC').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Captura os valores dos inputs
    const peso = parseFloat(document.getElementById('inputpeso').value);
    const altura = parseFloat(document.getElementById('inputaltura').value);

    // Verifica se os valores são válidos
    if (isNaN(peso) || isNaN(altura)) {
        alert("Por favor, insira valores válidos para peso e altura.");
        return;
    }

    // Calcula o IMC
    const imc = calculateIMC(peso, altura);

    // Determina a categoria do IMC
    let resultado = "Seu IMC é: " + imc + " - ";
    if (imc < 18.5) {
        resultado += "Abaixo do peso";
    } else if (imc < 24.9) {
        resultado += "Peso normal";
    } else if (imc < 29.9) {
        resultado += "Sobrepeso";
    } else {
        resultado += "Obesidade";
    }

    // Exibe o resultado no span com id "IMCResult" e mostra a caixa de alerta
    document.getElementById('IMCResult').innerText = resultado;
    document.getElementById('IMCAlert').style.display = 'block';
});

// Função para calcular o IMC
function calculateIMC(peso, altura) {
    return (peso / (altura * altura)).toFixed(2);
}

function testCalculateIMC() {
    let peso1 = 70;
    let altura1 = 1.75;
    let expectedIMC1 = 22.86;
    let result1 = calculateIMC(peso1, altura1);
    console.log(result1 == expectedIMC1 ? "Test case 1 passed" : "Test case 1 failed");
  
    let peso2 = 50;
    let altura2 = 1.65;
    let expectedIMC2 = 18.37;
    let result2 = calculateIMC(peso2, altura2);
    console.log(result2 == expectedIMC2 ? "Test case 2 passed" : "Test case 2 failed");
  
    let peso3 = 90;
    let altura3 = 1.80;
    let expectedIMC3 = 27.78;
    let result3 = calculateIMC(peso3, altura3);
    console.log(result3 == expectedIMC3 ? "Test case 3 passed" : "Test case 3 failed");
  }

testCalculateIMC();

