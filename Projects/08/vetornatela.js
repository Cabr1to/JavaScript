let valores = [8, 2, 3, 4, 5]
valores.sort()
console.log(valores)

/*for(let pos = 0; pos < valores.length; pos++){
    console.log(`A posicao do vetor ${pos} tem o valor ${valores[pos]}`)
}*/

for(let pos in valores){
    console.log(`A posicao do vetor ${pos} tem o valor ${valores[pos]}`)

}