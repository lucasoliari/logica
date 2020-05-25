var rs = require("readline-sync")

var num

num = rs.question("Digite um numero para saber se é par ou impar: ")

if (num % 2 == 0)
{
    console.log("o número é par")
}
else{
    console.log("o número é impar")
}