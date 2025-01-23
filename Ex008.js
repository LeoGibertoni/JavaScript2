console.log(`Trabalhando com condicionais`)
const listaDeDestinos = new Array(
    `Salvador`, 
    `São Paulo`, 
    `Rio de Janeiro`,
)

const idadeComprador = 15
const estaAcompanhada = false
console.log(listaDeDestinos) 

if(idadeComprador >= 18){
    console.log("Comprador maior de idade!")
    listaDeDestinos.splice(1,1) //Remove item na lista, lista começa em 0
}
else{ //menor de idade
    if(estaAcompanhada == true){
        console.log("Não é maior de idade, mas está acompanhado, com isso posso vender!")
        listaDeDestinos.splice(1,1)
    }
    else{
        console.log("Não é maior de idade, e não tem ninguem acompanhado, com isso não posso vender!")
    }
}

console.log(listaDeDestinos)