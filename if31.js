var rs = require("readline-sync")

var senha

senha = rs.question("Digite a senha para ter acesso: ")

if(senha == "1234")
{
    console.log("Acesso permitido")
}

else if(senha != "1234")
{
    console.log("Acesso negado")
}