console.log(`Trabalhando com condicionais`)
const listaDeDestinos = new Array(
    `Salvador`, 
    `São Paulo`, 
    `Rio de Janeiro`,
)

const idadeComprador = 15
console.log(listaDeDestinos) 

if(idadeComprador >= 18){
    console.log("Comprador maior de idade!")
    listaDeDestinos.splice(1,1) //Remove item na lista, lista começa em 0
}
else{
    console.log("Não é maior de idade, com isso não posso vender!")
}

console.log(listaDeDestinos)