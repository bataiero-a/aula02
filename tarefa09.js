//Escreva um programa que leia uma data (dia, mês, ano) e verifique se é uma data válida.
var dia = 15
var mes = 12
var ano = 2026
var resultado
 
if (mes >= 1 && mes <= 12) {
    if (dia >= 1 && dia <= 31) {
        if (mes == 2 && dia > 29) {
            var resultado = "Data invalida"
        } else {
            if ((mes == 4 || mes == 6 || mes == 9 || mes == 11) && dia > 30) {
                var resultado = "Data invalida"
            } else {
                if (mes == 2 && dia == 29 && (ano % 4 != 0)) {
                    var resultado = "Data invalida"
                } else {
                    var resultado = "Data valida"
                }
            }
        }
    } else {
        var resultado = "Data invalida"
    }
} else {
    var resultado = "Data invalida"
}
console.log(resultado)