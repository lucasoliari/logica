var rs = require("readline-sync")

var valores
var valores1
var valores2
valores = rs.questionInt("Digite o primeiro numero: ")
valores1 = rs.questionInt("Digite o segundo numero: ")
valores2 = rs.questionInt("Digite o terceiro numero: ")

if (valores < valores1 && valores1 < valores2) {
    console.log(valores, valores1, valores2)
}
else if (valores1 < valores && valores < valores2) {
    console.log(valores1, valores, valores2)
}
else if (valores2 < valores && valores < valores1) {
    console.log(valores2, valores, valores1)
}
else if (valores1 < valores && valores < valores2) {
    console.log(valores1, valores, valores2)
}