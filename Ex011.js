console.log("\nTrabalhando com while\n")
const listaDeDestinos = new Array(
    `Salvador`, 
    `São Paulo`, 
    `Rio de Janeiro`,
)

const idadeComprador = 19
const estaAcompanhada = false
let passagemCombrada = false
const destino = "São Paulo"

console.log("Escolha uma cidade para ir: ")
console.log(listaDeDestinos) 

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true

let destinoExiste = false
let contador = 0

while(contador < 3){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true
        break
    }
    else{
        destinoExiste = false
    }
    
    contador++
}

console.log("Destino existe:", destinoExiste)