const lugaresT = [];   const qLugaresT = [];
const idioma = [];     const qIdioma = [];
const cantTur = [];    const qCantTur = [];
const perArg = [];     const qPerArg = [];
const verno = [];      const qVerano = [];
const primavera = [];  const qPrimavera = [];
const otoño = [];      const qOtoño = [];
const invierno = [];   const qInvierno = [];
const lugaresTx = [];  const siVisito = [];

lugaresT[0] = "Dubái, Emiratos Arabes Unidos "; idioma[0] ="Árabe";     cantTur[0] =16.70;  perArg[0] =false;  verno[0] =40; primavera[0]=24; otoño[0]=32; invierno[0]=18;  //lugaresTx[0]="";   
lugaresT[1] = "Londres, Reino Unido          "; idioma[1] ="Ingles";    cantTur[1] =19.56;  perArg[1] =false;  verno[1] =23; primavera[1]=19; otoño[1]=16; invierno[1]=11;  //lugaresTx[1]="";
lugaresT[2] = "Roma, Italia                  "; idioma[2] ="Italiano";  cantTur[2] =10.32;  perArg[2] =false;  verno[2] =28; primavera[2]=20; otoño[2]=15; invierno[2]=13;  //lugaresTx[2]="";
lugaresT[3] = "París, Francia                "; idioma[3] ="Francés";   cantTur[3] =19.09;  perArg[3] =false;  verno[3] =23; primavera[3]=14; otoño[3]=14; invierno[3]=8;   //lugaresTx[3]="";
lugaresT[4] = "Río de Janeiro, Brasil        "; idioma[4] ="Portugués"; cantTur[4] =2.33;   perArg[4] =false;  verno[4] =31; primavera[4]=27; otoño[4]=23; invierno[4]=20;  //lugaresTx[4]="";
lugaresT[5] = "Tokyo, Japón                  "; idioma[5] ="Japonés";   cantTur[5] =10.43;  perArg[5] =false;  verno[5] =28; primavera[5]=17; otoño[5]=14; invierno[5]=11;  //lugaresTx[5]="";
lugaresT[6] = "Estambul, Turquía             "; idioma[6] ="Turco";     cantTur[6] =14.70;  perArg[6] =false;  verno[6] =29; primavera[6]=17; otoño[6]=12; invierno[6]=10;  //lugaresTx[6]="";
lugaresT[7] = "Doha, Catar                   "; idioma[7] ="Árabe";     cantTur[7] =2.13;   perArg[7] =false;  verno[7] =42; primavera[7]=32; otoño[7]=26; invierno[7]=24;  //lugaresTx[7]="";
lugaresT[8] = "Bangkok, Tailandia            "; idioma[8] ="Tailandés"; cantTur[8] =25.84;  perArg[8] =false;  verno[8] =33; primavera[8]=29; otoño[8]=27; invierno[8]=25;  //lugaresTx[8]="";
lugaresT[9] = "Buenos Aires, Argentina       "; idioma[9] ="Español";   cantTur[9] =2.70;   perArg[9] =true;   verno[9] =27; primavera[9]=21; otoño[9]=16; invierno[9]=14;  //lugaresTx[9]="";

function mosDes() {
    var str = "<tr><th>Indice</th><th>Destinos Turisticos</th><th>Iidoma</th><th>Cantidad de Turistas (En 1 año)</th><th>Verano</th><th>Invierno</th><th>Otoño</th><th>Primavera</th></tr>";
    var str2 = "";
    for (var i = 0; i < lugaresT.length; i++) {
        str2 = str2 + "<tr><td>"+i+"</td><td>"+lugaresT[i]+"</td><td>"+idioma[i]+"</td><td>"+cantTur[i]+" Millones</td><td>"+verno[i]+"º</td><td>"+invierno[i]+"º</td><td>"+otoño[i]+"º</td><td>"+primavera[i]+"º</td><td>";
    }
    str2 = "<table borde=1>"+str+str2+"</table>";
    document.getElementById('tbVec').innerHTML = str2;
 }



function idio() {
    const iduser = document.getElementById("user").value;
    var str = "<tr><th>Destinos Turisticos</th><th>Iidoma</th><th>Cantidad de Turistas (En 1 año)</th><th>Verano</th><th>Invierno</th><th>Otoño</th><th>Primavera</th></tr>";
    var str2 = "";
    for (var i = 0; i < lugaresT.length; i++) {
        if (idioma[i] == iduser) {
           str2 = str2 + "<tr><td>"+lugaresT[i]+"</td><td>"+idioma[i]+"</td><td>"+cantTur[i]+" Millones</td><td>"+verno[i]+"º</td><td>"+invierno[i]+"º</td><td>"+otoño[i]+"º</td><td>"+primavera[i]+"º</td><td>"; 
        }
    }
    str2 = "<table borde=1>"+str+str2+"</table>";
    document.getElementById('table').innerHTML = str2;
 }

 function cantTurM(){
    const can = document.getElementById("cant");
    const C = parseFloat(can.value);
    var str = "<tr><th>Destinos Turisticos</th><th>Iidoma</th><th>Cantidad de Turistas (En 1 año)</th><th>Verano</th><th>Invierno</th><th>Otoño</th><th>Primavera</th></tr>";
    var str2 = "";
    for(var i = 0; i < lugaresT.length; i++){
        if(cantTur[i] > C){
            str2 = str2 + "<tr><td>"+lugaresT[i]+"</td><td>"+idioma[i]+"</td><td>"+cantTur[i]+" Millones</td><td>"+verno[i]+"º</td><td>"+invierno[i]+"º</td><td>"+otoño[i]+"º</td><td>"+primavera[i]+"º</td><td>";
        }
    }
    str2 = "<table borde=1>"+str+str2+"</table>";
    document.getElementById("table").innerHTML = str2;
 }

 function cantTurMe (){
    const can = document.getElementById("cant");
    const C = parseFloat(can.value);
    var str = "<tr><th>Destinos Turisticos</th><th>Iidoma</th><th>Cantidad de Turistas (En 1 año)</th><th>Verano</th><th>Invierno</th><th>Otoño</th><th>Primavera</th></tr>";
    var str2 = "";
    for(var i = 0 ; i < lugaresT.length; i++){
        if(cantTur[i] < C){
            str2 = str2 + "<tr><td>"+lugaresT[i]+"</td><td>"+idioma[i]+"</td><td>"+cantTur[i]+" Millones</td><td>"+verno[i]+"º</td><td>"+invierno[i]+"º</td><td>"+otoño[i]+"º</td><td>"+primavera[i]+"º</td><td>";
        }
    }
    str2 = "<table borde=1>"+str+str2+"</table>";
    document.getElementById("table").innerHTML = str2;
 }

 function argVerdadero(){
    var str = "<tr><th>Destinos Turisticos</th><th>Iidoma</th><th>Cantidad de Turistas (En 1 año)</th><th>Verano</th><th>Invierno</th><th>Otoño</th><th>Primavera</th></tr>";
    var str2 = "";
    for(let i = 0; i < lugaresT.length; i++){
        if (perArg[i] == (true)) {
            str2 = str2 + "<tr><td>"+lugaresT[i]+"</td><td>"+idioma[i]+"</td><td>"+cantTur[i]+" Millones</td><td>"+verno[i]+"º</td><td>"+invierno[i]+"º</td><td>"+otoño[i]+"º</td><td>"+primavera[i]+"º</td><td>";
        }
    }
    str2 = "<table borde=1>"+str+str2+"</table>";
    document.getElementById("table").innerHTML = str2;
 }

 function argFalso(){
    var str = "<tr><th>Destinos Turisticos</th><th>Iidoma</th><th>Cantidad de Turistas (En 1 año)</th><th>Verano</th><th>Invierno</th><th>Otoño</th><th>Primavera</th></tr>";
    var str2 = "";
    for (let i = 0; i < lugaresT.length; i++) {
        if (perArg[i] == (false)) {
            str2 = str2 + "<tr><td>"+lugaresT[i]+"</td><td>"+idioma[i]+"</td><td>"+cantTur[i]+" Millones</td><td>"+verno[i]+"º</td><td>"+invierno[i]+"º</td><td>"+otoño[i]+"º</td><td>"+primavera[i]+"º</td><td>";
        }
        
    }
    str2 = "<table borde=1>"+str+str2+"</table>";
    document.getElementById("table").innerHTML = str2;
 }

 function veranoM(){
    const vera = document.getElementById("ver");
    const V = parseFloat(vera.value);
    var str = "<tr><th>Destinos Turisticos</th><th>Iidoma</th><th>Cantidad de Turistas (En 1 año)</th><th>Verano</th><th>Invierno</th><th>Otoño</th><th>Primavera</th></tr>";
    var str2 = "";
    for(let i = 0; i < lugaresT.length; i++){
        if (verno[i] > V) {
            str2 = str2 + "<tr><td>"+lugaresT[i]+"</td><td>"+idioma[i]+"</td><td>"+cantTur[i]+" Millones</td><td>"+verno[i]+"º</td><td>"+invierno[i]+"º</td><td>"+otoño[i]+"º</td><td>"+primavera[i]+"º</td><td>";
        }
    }
    str2 = "<table borde=1>"+str+str2+"</table>";
    document.getElementById("table").innerHTML = str2;
 }

 function veranoMe(){
    const vera = document.getElementById("ver");
    const V = parseFloat(vera.value);
    var str = "<tr><th>Destinos Turisticos</th><th>Iidoma</th><th>Cantidad de Turistas (En 1 año)</th><th>Verano</th><th>Invierno</th><th>Otoño</th><th>Primavera</th></tr>";
    var str2 = "";
    for(let i = 0; i < lugaresT.length; i++){
        if (verno[i] < V) {
            str2 = str2 + "<tr><td>"+lugaresT[i]+"</td><td>"+idioma[i]+"</td><td>"+cantTur[i]+" Millones</td><td>"+verno[i]+"º</td><td>"+invierno[i]+"º</td><td>"+otoño[i]+"º</td><td>"+primavera[i]+"º</td><td>";
        }
    }
    str2 = "<table borde=1>"+str+str2+"</table>";
    document.getElementById("table").innerHTML = str2;
 }

 function inviernoM(){
    const invi = document.getElementById("inv");
    const In = parseFloat(invi.value);
    var str = "<tr><th>Destinos Turisticos</th><th>Iidoma</th><th>Cantidad de Turistas (En 1 año)</th><th>Verano</th><th>Invierno</th><th>Otoño</th><th>Primavera</th></tr>";
    var str2 = "";
    for(let i = 0; i < lugaresT.length; i++){
        if (invierno[i] > In) {
            str2 = str2 + "<tr><td>"+lugaresT[i]+"</td><td>"+idioma[i]+"</td><td>"+cantTur[i]+" Millones</td><td>"+verno[i]+"º</td><td>"+invierno[i]+"º</td><td>"+otoño[i]+"º</td><td>"+primavera[i]+"º</td><td>";
        } 
    }
    str2 = "<table borde=1>"+str+str2+"</table>";
    document.getElementById("table1").innerHTML = str2;
 }

 function inviernoMe(){
    const invi = document.getElementById("inv");
    const In = parseFloat(invi.value);
    var str = "<tr><th>Destinos Turisticos</th><th>Iidoma</th><th>Cantidad de Turistas (En 1 año)</th><th>Verano</th><th>Invierno</th><th>Otoño</th><th>Primavera</th></tr>";
    var str2 = "";
    for(let i = 0; i < lugaresT.length; i++){
        if (invierno[i] < In) {
            str2 = str2 + "<tr><td>"+lugaresT[i]+"</td><td>"+idioma[i]+"</td><td>"+cantTur[i]+" Millones</td><td>"+verno[i]+"º</td><td>"+invierno[i]+"º</td><td>"+otoño[i]+"º</td><td>"+primavera[i]+"º</td><td>";
        }
    }
    str2 = "<table borde=1>"+str+str2+"</table>";
    document.getElementById("table1").innerHTML = str2;
 }

 function otoñoM(){
    const otoñ = document.getElementById("oto");
    const O = parseFloat(otoñ.value);
    var str = "<tr><th>Destinos Turisticos</th><th>Iidoma</th><th>Cantidad de Turistas (En 1 año)</th><th>Verano</th><th>Invierno</th><th>Otoño</th><th>Primavera</th></tr>";
    var str2 = "";
    for(let i = 0; i < lugaresT.length; i++){
        if (otoño[i] > O) {
            str2 = str2 + "<tr><td>"+lugaresT[i]+"</td><td>"+idioma[i]+"</td><td>"+cantTur[i]+" Millones</td><td>"+verno[i]+"º</td><td>"+invierno[i]+"º</td><td>"+otoño[i]+"º</td><td>"+primavera[i]+"º</td><td>";
        }
    }
    str2 = "<table borde=1>"+str+str2+"</table>";
    document.getElementById("table2").innerHTML = str2;
 }

 function otoñoMe(){
    const otoñ = document.getElementById("oto");
    const O = parseFloat(otoñ.value);
    var str = "<tr><th>Destinos Turisticos</th><th>Iidoma</th><th>Cantidad de Turistas (En 1 año)</th><th>Verano</th><th>Invierno</th><th>Otoño</th><th>Primavera</th></tr>";
    var str2 = "";
    for(let i = 0; i < lugaresT.length; i++){
        if (otoño[i] < O) {
            str2 = str2 + "<tr><td>"+lugaresT[i]+"</td><td>"+idioma[i]+"</td><td>"+cantTur[i]+" Millones</td><td>"+verno[i]+"º</td><td>"+invierno[i]+"º</td><td>"+otoño[i]+"º</td><td>"+primavera[i]+"º</td><td>";
        }
    }
    str2 = "<table borde=1>"+str+str2+"</table>";
    document.getElementById("table2").innerHTML = str2;
 }

 function primaveraM(){
    const pr = document.getElementById("pri");
    const P = parseFloat(pr.value);
    var str = "<tr><th>Destinos Turisticos</th><th>Iidoma</th><th>Cantidad de Turistas (En 1 año)</th><th>Verano</th><th>Invierno</th><th>Otoño</th><th>Primavera</th></tr>";
    var str2 = "";
    for(let i = 0; i < lugaresT.length; i++){
        if (primavera[i] > P) {
            str2 = str2 + "<tr><td>"+lugaresT[i]+"</td><td>"+idioma[i]+"</td><td>"+cantTur[i]+" Millones</td><td>"+verno[i]+"º</td><td>"+invierno[i]+"º</td><td>"+otoño[i]+"º</td><td>"+primavera[i]+"º</td><td>";
        }
    }
    str2 = "<table borde=1>"+str+str2+"</table>";
    document.getElementById("table3").innerHTML = str2;
 }

 function primaveraMe(){
    const pr = document.getElementById("pri");
    const P = parseFloat(pr.value);
    var str = "<tr><th>Destinos Turisticos</th><th>Iidoma</th><th>Cantidad de Turistas (En 1 año)</th><th>Verano</th><th>Invierno</th><th>Otoño</th><th>Primavera</th></tr>";
    var str2 = "";
    for(let i = 0; i < lugaresT.length; i++){
        if (primavera[i] < P) {
            str2 = str2 + "<tr><td>"+lugaresT[i]+"</td><td>"+idioma[i]+"</td><td>"+cantTur[i]+" Millones</td><td>"+verno[i]+"º</td><td>"+invierno[i]+"º</td><td>"+otoño[i]+"º</td><td>"+primavera[i]+"º</td><td>";
        }
    }
    str2 = "<table borde=1>"+str+str2+"</table>";
    document.getElementById("table3").innerHTML = str2;
 }
 function guardarRec(){
    const num = document.getElementById("nro");
    const newLugar = document.getElementById("lugarVisit");
    const n = parseFloat(num.value);
    const visit = newLugar.value;
    lugaresTx.push(lugaresT[n]);
    siVisito.push(visit);
    
 }

 function mostrar(){
    var str = "<tr><th>Destinos Turisticos</th><th>Recomendaciones</th>";
    var str2 = "";
    for (let i = 0; i < lugaresT.length; i++) {
        if (lugaresTx[i] != undefined) {
            str2 = str2 + "<tr><td>"+lugaresTx[i]+"</td><td>"+siVisito[i]+"</td>"
        }
        
    }
    str2 = "<table border=1>"+str+str2+"</table>";
    document.getElementById("recom").innerHTML = str2;
 }

 function cambiar(){
    const name = document.getElementById("name").value;
    const newName = document.getElementById("newName").value;
    const newIdio = document.getElementById("newIdio").value;
    const newCan = document.getElementById("newCan");
    const verano = document.getElementById("verano");
    const invierno = document.getElementById("invierno");
    const otoño = document.getElementById("otoño");
    const primavera = document.getElementById("primavera");

    const nCant = parseFloat(newCan.value);
    const nver = parseFloat(verano.value);
    const ninv = parseFloat(invierno.value);
    const noto = parseFloat(otoño.value);
    const npri = parseFloat(primavera.value);

    for (let i = 0; i < lugaresT.length; i++) {
        if (lugaresT[i] == name) {
            lugaresT[i] = newName;
            idioma[i] = newIdio;
            cantTur[i] = nCant;
            verno[i] = nver;
            invierno[i] = ninv;
            otoño[i] = noto;
            primavera[i] = npri
        }
        
    }
 }

 function mosRar(){
    var str = "<tr><th>Indice</th><th>Destinos Turisticos</th><th>Iidoma</th><th>Cantidad de Turistas (En 1 año)</th><th>Verano</th><th>Invierno</th><th>Otoño</th><th>Primavera</th></tr>";
    var str2 = "";
    for (var i = 0; i < lugaresT.length; i++) {
        str2 = str2 + "<tr><td>"+i+"</td><td>"+lugaresT[i]+"</td><td>"+idioma[i]+"</td><td>"+cantTur[i]+" Millones</td><td>"+verno[i]+"º</td><td>"+invierno[i]+"º</td><td>"+otoño[i]+"º</td><td>"+primavera[i]+"º</td><td>";
    }
    str2 = "<table borde=1>"+str+str2+"</table>";
    document.getElementById('tb1').innerHTML = str2;
 }
 /*
    var str = "<tr><th>Destinos Turisticos</th><th>Recomendaciones</th>";
    var str2 = "";
    for (let i = 0; i < lugaresT.length; i++) {
        if(lugaresTx[i] == ""){
            str2 = str2 + "<tr><td>"+lugaresTx[i]+"</td><td>"+siVisito[i]+"</td>"

        }
        
    }
    str2 = "<table border=1>"+str+str2+"</table>";
    document.getElementById("recom").innerHTML = str2;
    
    
    */