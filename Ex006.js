console.log(`Trabalhando com listas`)
const listaDeDestinos = new Array(
    `Salvador`, `São Paulo`, `Rio de Janeiro`,
)
listaDeDestinos.push(`Curitiba`) //Adiciona item na lista

console.log(listaDeDestinos) 
 
listaDeDestinos.splice(1,1) //Remove item na lista, lista começa em 0

console.log(listaDeDestinos)
console.log(listaDeDestinos[1])