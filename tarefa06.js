//Escreva um programa que verifique se um número fornecido pelo usuário é positivo, negativo ou zero.
var numero = -5
var resultado
 
if (numero > 0) {
    var resultado = "Positivo"
} else {
    if (numero < 0) {
        var resultado = "Negativo"
    } else {
        var resultado = "Zero"
    }
}
console.log(resultado)