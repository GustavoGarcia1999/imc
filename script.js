

const nome = document.getElementById("nome");
const peso = document.getElementById("peso");
const altura = document.getElementById("altura");


function calcularImc() {
    let imc = peso.value / (altura.value * altura.value);
    let mensagem = nome.value+", seu IMC é: "+imc.toFixed(3);
    alert(mensagem);
}