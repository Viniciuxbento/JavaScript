function carregar(){
    var msg=document.getElementById('msg')
    var img=document.getElementById('imag')
    var data= new Date()
    var hora= data.getHours()

    msg.innerHTML =`Agora são ${hora} horas.`

    if(hora >= 0 && hora <12){

        img.src='manha.avif'

    }

    else if (hora >=12 && hora <=18){
        img.src='tarde.avif'
    }

    else{ 
        img.src='images.png'}
}