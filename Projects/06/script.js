function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora sao ${hora} horas.`

    if(hora >= 0 && hora < 12 ){
        //BOMDIA
        img.scr = 'img/manha.jpg'
        document.body.style.background = 'aliceblue'

    }else if(hora >= 12 && hora <= 18){
        //BOATARDE
        img.src = 'img/tarde.jpg'
        document.body.style.background = 'orange'
    }else{
        //BOANOIT
        img.src = 'img/noite.jpg'
    }

}

