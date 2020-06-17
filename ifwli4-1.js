//1. (OBRIGATÓRIO) Escreva um programa que pedirá para o usuário dois números entre 1
//e 100. O programa deve, então, iterar de um em um do menor pro maior, sempre
//imprimindo o número na tela do usuário. Entretanto, caso o número seja divisível por 7,
//o programa deve ao invés disso imprimir a palavra “Ping”. Caso o número seja divisível
//por 5, o programa deve imprimir “Pong”. Caso o número seja divisível por 7 e 5, o
//programa deveria imprimir a mensagem “Ping Pong”. Dica: Neste exercício vocês talvez
//precisem fazer uso do recurso “user.questionInt()” que transforma o conteúdo de um
//input do usuário de string para inteiro.
var rs = require("readline-sync")

var num1 = rs.questionInt("Digite o primeiro numero entre 1 e 100: ")
var num2 = rs.questionInt("Digite o segundo numero entre 1 e 100: ")
var cont = 0
while (num2 <= num1) {
    console.log("o primeiro numero deve ser menor que o segundo")
    var num1 = rs.questionInt("Digite o primeiro numero: ")
    var num2 = rs.questionInt("Digite o segundo numero: ")
    while (num2 >100 || num1> 100){
        console.log("os numeros devem ser menores que 100.")
        var num1 = rs.questionInt("Digite o primeiro numero: ")
        var num2 = rs.questionInt("Digite o segundo numero: ")
    }
}

while(num2 >= num1)
{
    if(num1 % 7 == 0 )
    {
        console.log(num1+" ping")
    }
    else if(num1 % 5 ==0){
        console.log(num1+" pong")
    }
    if (num1 % 5 == 0 && num1 % 7 ==0)
    {
        console.log(num1+" ping-pong")
    }
    num1 = num1+1
}

