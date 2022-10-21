let contagem =0
let numero=[]

while(contagem<=20){
    let numeroRecebido= parseInt(prompt("Digite um número"));
    numero.push(numeroRecebido)
    contagem++
}
document.write(numero);