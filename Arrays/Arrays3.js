let = InventarioDrofo = ["Anel da invisibilidade"," par de botas mágicas"," par de botas mágicas"," porção do sono"," porção da inocência"," porção da inocência"];

let = InventarioTorper = ["Capa de  invisibilidade"," pedra do despertar"," varinha das varinhas"," porção da inocência"," porção da mentira"," porção da mentira"," porção ant-inteligência"];


delete InventarioTorper [5,1];
InventarioTorper.push("Um par de botas mágica");

delete InventarioDrofo[2]
InventarioDrofo.push("Escudo mágico","Espada mágica");

document.write ("<br><br><br>" + "Inventario do Topper: "+"</strong>"+InventarioTorper +"<br><br>");

document.write ("Inventario do Drofo: "+"</strong>"+InventarioDrofo +"<br>");
