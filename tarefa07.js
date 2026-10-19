//Escreva um programa que leia dois números e uma operação (adição, subtração, multiplicação, divisão) e realize a operação entre os dois números.
var numero1 = 10
var numero2 = 5
var operacao = "adicao"
var resultado
 
if (operacao == "adicao") {
    var resultado = numero1 + numero2
} else {
    if (operacao == "subtracao") {
        var resultado = numero1 - numero2
    } else {
        if (operacao == "multiplicacao") {
            var resultado = numero1 * numero2
        } else {
            if (operacao == "divisao") {
                var resultado = numero1 / numero2
            } else {
                var resultado = "Operacao invalida"
            }
        }
    }
}
console.log(resultado)