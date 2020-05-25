var rs = require("readline-sync")
var maca

maca = rs.question("Digite o numero de maçãs que serão compradas: ")

if (maca < 12){
   maca = maca*0.30
}
else if (maca >= 12){
    maca = maca*0.25
}

console.log(maca+"R$")