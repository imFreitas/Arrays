let maior=[]
let menor=[]
let contador = 0 ;

while(contador<12){
    let Recebido= parseInt(prompt("Digite um número"))
    contador++;

    if(Recebido>50){
        maior.push(Recebido)

    }else if(Recebido<50){
        
        menor.push(Recebido)
    }
}
document.write("Os número maiores que 50 foram: "+ maior + "<br/>"+"<br/>");
document.write("Os número menores que 50 foram:" + menor )