var agora = new Date()
var hora = agora.getHours()
console.log(hora)
if(idade < 16 ){
    console.log('Você ainda não vota')

}else if(idade <18 || idade >= 67){

    console.log('Voto opcional.')

}else{
    console.log('Voto Obrigatorio')
}