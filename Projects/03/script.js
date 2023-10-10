let num = document.getElementById('txtn')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    return !!(Number (n) >= 1 && Number(n) <= 100);
}
 /*utilizei o codigo simplificado mas o completo seria assim:
 if (Number (n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }*/

function inLista(n , l){
    return l.indexOf(Number(n)) != -1;
}
    /*utilizei o codigo simplificado mas o completo seria assim:
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }*/

function adicionar(){
    
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''

    } else {
        window.alert('Valor invalido, digite outro.')

    }
    //Limpar o input e mudar o foco para o input
    num.value = ''
    num.focus()
}
function finalizar(){
    if(valores.length == 0) {
        window.alert('Adicione um valor antes de finalizar a lista.')

    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0 
        let media = 0

        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }

        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${total} numeros cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos valores o resultado eh ${soma}</p>`
        res.innerHTML += `<p>A media dos valores digitados e ${media}</p>`

    }

}