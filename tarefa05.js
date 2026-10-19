//Faça um programa que leia o nome de um aluno e suas três notas, calcule a média e informe se ele está aprovado (média maior ou igual a 7) ou reprovado
var nomeAluno = "Pietro"
var nota1 = 8
var nota2 = 8
var nota3 = 5
 
var media = (nota1 + nota2 + nota3) / 3
 
if (media >= 7) {
    var situacao = "Aprovado"
} else {
    var situacao = "Reprovado"
}
 console.log(nomeAluno, media, situacao)