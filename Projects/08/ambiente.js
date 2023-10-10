let num = [7,4,2]

num[3] = 6
num.push(1)
num.sort()
console.log(num)
console.log(`O tamanho do vetor e ${num.length}`)
console.log(`o primeiro valor do array eh ${num[0]}`)

let pos = num.indexOf(1)

if(pos >= 0){
    console.log(`o valor esta na posicao ${pos}`)

} else {
    console.log(`o valor nao foi encontrado `)

}
