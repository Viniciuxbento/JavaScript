var hora =1
console.log(`São ${hora} horas.`)
if( hora >6 && hora<=12){
    console.log("Bom dia.")
}else if( hora<18){
    console.log("Boa tarde.")
}else if(hora<24){
    console.log("Boa Noite.")
}else if(hora<6){
    console.log("Boa Madrugada.")
}
