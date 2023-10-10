function contar(){

    var ti = document.getElementById('txti')
    var tf = document.getElementById('txtf')
    var tp = document.querySelector('input#txtp')
    var res = document.querySelector('div#res')

    if(tp.value.length == 0 || tf.value.length == 0 || ti.value.length == 0){
        res.innerHTML = 'Impossivel contar.'
      
    } else {
        res.innerHTML = 'Contando: <br>'

        let i = Number(ti.value) 
        let f = Number(tf.value)
        let p = Number(tp.value)

        if(p <= 0){
            window.alert(`${p} eh invalido, considerando PASSO = 1`)
            p = 1
        }

        if( i < f){
            //Contagem crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} &#x27A1; ` 
            }
            

        } else {
            //Contagem regressiva
            for(let c = i ; c >= f; c -= p){
                res.innerHTML += ` ${c} &#x27A1; ` 
            }
        }
        res.innerHTML += `&#x1F525;`

        
    }

  
}

