console.log("\nTrabalhando com condicionais\n")
const listaDeDestinos = new Array(
    `Salvador`, 
    `São Paulo`, 
    `Rio de Janeiro`,
)

const idadeComprador = 19
const estaAcompanhada = false
const passagemCombrada = true

console.log("Escolha uma cidade para ir: ")
console.log(listaDeDestinos) 

if(idadeComprador >= 18 || estaAcompanhada == true){
    console.log("\nComprador maior de idade ou está acompanhado")
    listaDeDestinos.splice(1,1) //Remove item na lista, lista começa em 0
}
else{
    console.log("\nNão é maior de idade, e não tem ninguem acompanhado, com isso não posso vender!")
}

console.log(listaDeDestinos)

console.log("\nEmbarque")
if (idadeComprador >= 18 && passagemCombrada){
    console.log("Boa Viagem")
} else{
    console.log("Você não pode embarcar!")
}