//string = textos
//boolean =verdadeiro / falso
//float = numeros 'quebrados' com virgulas
//int = numeros inteiros

// variaveis 


var idadeUsuario = 20

//exibe mensagem na tela
//o simbolo "+" quando usado com texto a funcao dele é "concatenar"
console.log("idade do usuario:" +idadeUsuario)

// = é o operador de atribuição
// == é o operador de comparação iguais
// > operador maior
// < operador menor
// >= maior ou igual
// <= menor ou igual

console.log(idadeUsuario >= 18 )
// ao ter a comparação eu tenho o resultado boolean


// se = if (pergunta) e executa se for verdade
//senão = else executa caso o if for falso

if (idadeUsuario >= 18){
    console.log("O usuario pode dirigir!")
}else{
    console.log("desculpa vc ainda nn pode dirigir!")
}