var rs = require("readline-sync")
var ano

ano = rs.question("Digite sua data de nascimento: ")

if(2020-ano < 16){
    console.log("Você não pode votar!")
}
else if(2020-ano == 16 || ano-2020 > 60 || ano- 2020 == 17)
{
    console.log("O voto para você é opcional")
}

else if(2020-ano > 18 || ano-2020 < 60)
{
    console.log("Você é obrigado a votar")
}

