localStorage.setItem('tab', 0);
cont1=0;
totale=0;
cont=0
counter=0;
function lineS(x) {
  linea=document.querySelector('#lineStile');
  array=[50,180,283,460,587,692,800];
  for(var i=0;i<=6;i++){
    if(i==x){
      linea.style.width=array[i]+"px";
   }
  }
}
function lineSR(x) {
  linea=document.querySelector('#lineStile');
  linea.style.width="50px";
}

function lineC(x) {
  localStorage.setItem('tab', x);
  var linea=document.querySelector('#lineNasco');
  var linea2=document.querySelector('#lineStileP');
  var arDivSin=document.querySelectorAll('.proSin');
  var arDivDes=document.querySelectorAll('.proDes');
  var arImg=document.querySelectorAll('.imgPro');
  var mainDiv=document.querySelector('#main');
  var array=[15,102,233,339,516,643,749];
  var array2=[250,337,468,574,751,878,984];
  var arrayDim=[50,93,65,136,86,64,66];
  var arrayMainH=[9900,2000,2000,2000,1400,1400,2600];
  var arrayNumPro=[8,5,6,6,4,3,7];
  arrayProCar=["tutti","accessori","tShirt","f&g","pantaloni","shorts","scarpe"]
  for(var i=0;i<=6;i++){
    if(i==x){
      linea.style.width=array[i]+"px";
      linea2.style.marginLeft=array2[i]+"px";
      linea2.style.width=arrayDim[i]+"px";
      main.style.height=arrayMainH[x]+"px";
      if(x==1 || x==5 || x==6){
        if(x==1){
          arDivDes[2].style.visibility="hidden"
          arDivDes[1].style.visibility="visible"
          arDivDes[3].style.visibility="visible"
        }else if(x==5){
                arDivDes[1].style.visibility="hidden"
                arDivDes[2].style.visibility="visible"
                arDivDes[3].style.visibility="visible"
              }else if(x==6){
                      arDivDes[3].style.visibility="hidden"
                      arDivDes[1].style.visibility="visible"
                      arDivDes[2].style.visibility="visible"
                    }
      }else{
        arDivDes[2].style.visibility="visible"
        arDivDes[1].style.visibility="visible"
        arDivDes[3].style.visibility="visible"
      }
      for(var q=0;q<arrayNumPro[x];q++){
        cont1++;
        arImg[q].src="./img/"+arrayProCar[x]+"/pro"+cont1+".png";
      }
      cont1=0;
    }
  }
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text",ev.target.id);
  var dropZone=document.querySelector("#DivCarrello");
  dropZone.style.visibility="visible";
  dropZone.style.animation="car 1.2s forwards";
}

function drop(ev) {
    tab=localStorage.getItem('tab');
    carrello=document.querySelector("#carrello");
    data = ev.dataTransfer.getData("text");
    dropZone=document.querySelector("#DivCarrello");
    mainDiv=document.querySelector('#main');
    dText=document.querySelector("#txtDrop");
    al=document.querySelector("#pop");
    alTxt=document.querySelector("#popTxt");
    totp=document.querySelector("#totP");
    divA=document.querySelector("#totDiv");
    p=document.createElement("p");
    p.style.color="white"

    arrayPro=[
      "Calvin Klein UNITED - Portafoglio",
      "Versace Jeans Couture Cappellino",
      "Jack & Jones - Occhiali da sole",
      "Tommy Jeans HERITAGE BUCKET - Cappello",
      "Versace Jeans Couture Cintura",
      "YOURTURN - T-shirt - dark green",
      "CUT SEW COLORBLOCK TEE - T-shirt",
      "ADDIDAS t-shirt festivo",
      "CLOSURE London FURY TEE - T-shirt ",
      "ONSAARON AZTEC - Camicia/t-shirt",
      "AROZ VERSACE - Camicia/t-shirt",
      "SUMMER JACKET - Giacca leggera",
      "LEVI'S SUPER MARIO - Giacca di jeans",
      "JERUSH - Giubbotto Bomber",
      "SIGNATURE HOODIE - Felpa",
      "LOCKER ADDIDAS - Felpa",
      "LOGO HOODY - Felpa con cappuccio",
      "ONSDESMOND CHECK PANTS - Pantaloni",
      "BOTEIN - Pantaloni cargo",
      "JJIPAUL JJFLAKE - Pantaloni cargo",
      "ONSLINUS - Chino",
      "M J JUMPMAN FLC SHORT - Shorts",
      "M NSW CE S - Shorts",
      "BURG C BLOCK - Shorts sportivi",
      "Rx-1977 Scarpe Da fitness",
      "nike air max unity v8",
      "AIR MAX 2090 - Sneakers basse",
      "WHY NOT ZER0.3 - Scarpe da basket",
      "Stringate sportive-Scarpe",
      "FLEXI - Scarpe senza lacci",
      "AIR MAX ALPHA SAVAGE - Scarpe da fitness"
    ]
    arrayPrez=[
      59.99,
      79.95,
      19.99,
      34.98,
      69.95,
      17.99,
      26.95,
      13.00,
      19.20,
      26.99,
      78.99,
      69.99,
      107.95,
      29.99,
      79.99,
      59.95,
      64.95,
      20.95,
      44.99,
      58.99,
      33.05,
      35.00,
      49.45,
      27.77,
      149.99,
      100.00,
      134.95,
      111.95,
      39.95,
      64.95,
      84.95
    ]
    if(tab==0){
      if(data==0){
        p.innerHTML=arrayPro[6]+"("+arrayPrez[6]+"€"+")";
        costo=arrayPrez[6];
      }
      if(data==1){
        p.innerHTML=arrayPro[10]+"("+arrayPrez[10]+"€"+")";
        costo=arrayPrez[10];
      }
      if(data==2){
        p.innerHTML=arrayPro[9]+"("+arrayPrez[9]+"€"+")";
        costo=arrayPrez[9];
      }
      if(data==3){
        p.innerHTML=arrayPro[14]+"("+arrayPrez[14]+"€"+")";
        costo=arrayPrez[14];
      }
      if(data==4){
        p.innerHTML=arrayPro[29]+"("+arrayPrez[29]+"€"+")";
        costo=arrayPrez[29];
      }
      if(data==5){
        p.innerHTML=arrayPro[30]+"("+arrayPrez[30]+"€"+")";
        costo=arrayPrez[30];
      }
      if(data==6){
        p.innerHTML=arrayPro[18]+"("+arrayPrez[18]+"€"+")";
        costo=arrayPrez[18];
      }
      if(data==7){
        p.innerHTML=arrayPro[19]+"("+arrayPrez[19]+"€"+")";
        costo=arrayPrez[19];
      }
      if(data==8){
        p.innerHTML=arrayPro[16]+"("+arrayPrez[16]+"€"+")";
        costo=arrayPrez[16];
      }
      if(data==9){
        p.innerHTML=arrayPro[15]+"("+arrayPrez[15]+"€"+")";
        costo=arrayPrez[15];
      }
      if(data==10){
        p.innerHTML=arrayPro[26]+"("+arrayPrez[26]+"€"+")";
        costo=arrayPrez[26];
      }
      if(data==11){
        p.innerHTML=arrayPro[1]+"("+arrayPrez[1]+"€"+")";
        costo=arrayPrez[1];
      }
      if(data==12){
        p.innerHTML=arrayPro[23]+"("+arrayPrez[23]+"€"+")";
        costo=arrayPrez[23];
      }
      if(data==13){
        p.innerHTML=arrayPro[12]+"("+arrayPrez[12]+"€"+")";
        costo=arrayPrez[12];
      }
      if(data==14){
        p.innerHTML=arrayPro[20]+"("+arrayPrez[20]+"€"+")";
        costo=arrayPrez[20];
      }
      if(data==15){
        p.innerHTML=arrayPro[13]+"("+arrayPrez[13]+"€"+")";
        costo=arrayPrez[13];
      }
      if(data==16){
        p.innerHTML=arrayPro[3]+"("+arrayPrez[3]+"€"+")";
        costo=arrayPrez[3];
      }
      if(data==17){
        p.innerHTML=arrayPro[17]+"("+arrayPrez[17]+"€"+")";
        costo=arrayPrez[17];
      }
      if(data==18){
        p.innerHTML=arrayPro[0]+"("+arrayPrez[0]+"€"+")";
        costo=arrayPrez[0];
      }
      if(data==19){
        p.innerHTML=arrayPro[27]+"("+arrayPrez[27]+"€"+")";
        costo=arrayPrez[27];
      }
      if(data==20){
        p.innerHTML=arrayPro[8]+"("+arrayPrez[8]+"€"+")";
        costo=arrayPrez[8];
      }
      if(data==21){
        p.innerHTML=arrayPro[7]+"("+arrayPrez[7]+"€"+")";
        costo=arrayPrez[7];
      }
      if(data==22){
        p.innerHTML=arrayPro[25]+"("+arrayPrez[25]+"€"+")";
        costo=arrayPrez[25];
      }
      if(data==23){
        p.innerHTML=arrayPro[24]+"("+arrayPrez[24]+"€"+")";
        costo=arrayPrez[24];
      }
      if(data==24){
        p.innerHTML=arrayPro[2]+"("+arrayPrez[2]+"€"+")";
        costo=arrayPrez[2];
      }
      if(data==25){
        p.innerHTML=arrayPro[4]+"("+arrayPrez[4]+"€"+")";
        costo=arrayPrez[4];
      }
      if(data==26){
        p.innerHTML=arrayPro[21]+"("+arrayPrez[21]+"€"+")";
        costo=arrayPrez[21];
      }
      if(data==27){
        p.innerHTML=arrayPro[5]+"("+arrayPrez[5]+"€"+")";
        costo=arrayPrez[5];
      }
      if(data==28){
        p.innerHTML=arrayPro[22]+"("+arrayPrez[22]+"€"+")";
        costo=arrayPrez[22];
      }
      if(data==29){
        p.innerHTML=arrayPro[11]+"("+arrayPrez[11]+"€"+")";
        costo=arrayPrez[11];
      }
      if(data==30){
        p.innerHTML=arrayPro[28]+"("+arrayPrez[28]+"€"+")";
        costo=arrayPrez[28];
      }
    }else if (tab==1) {
            if(data==0){
              p.innerHTML=arrayPro[0]+"("+arrayPrez[0]+"€"+")";
              costo=arrayPrez[0];
            }
            if(data==1){
              p.innerHTML=arrayPro[1]+"("+arrayPrez[1]+"€"+")";
              costo=arrayPrez[1];
            }
            if(data==2){
              p.innerHTML=arrayPro[2]+"("+arrayPrez[2]+"€"+")";
              costo=arrayPrez[2];
            }
            if(data==3){
              p.innerHTML=arrayPro[3]+"("+arrayPrez[3]+"€"+")";
              costo=arrayPrez[3];
            }
            if(data==4){
              p.innerHTML=arrayPro[4]+"("+arrayPrez[4]+"€"+")";
              costo=arrayPrez[4];
            }
          }else if (tab==2) {
                  if(data==0){
                    p.innerHTML=arrayPro[5]+"("+arrayPrez[5]+"€"+")";
                    costo=arrayPrez[5];
                  }
                  if(data==1){
                    p.innerHTML=arrayPro[6]+"("+arrayPrez[6]+"€"+")";
                    costo=arrayPrez[6];
                  }
                  if(data==2){
                    p.innerHTML=arrayPro[7]+"("+arrayPrez[7]+"€"+")";
                    costo=arrayPrez[7];
                  }
                  if(data==3){
                    p.innerHTML=arrayPro[8]+"("+arrayPrez[8]+"€"+")";
                    costo=arrayPrez[8];
                  }
                  if(data==4){
                    p.innerHTML=arrayPro[9]+"("+arrayPrez[9]+"€"+")";
                    costo=arrayPrez[9];
                  }
                  if(data==5){
                    p.innerHTML=arrayPro[10]+"("+arrayPrez[10]+"€"+")";
                    costo=arrayPrez[10];
                  }
                }else if (tab==3) {
                        if(data==0){
                          p.innerHTML=arrayPro[11]+"("+arrayPrez[11]+"€"+")";
                          costo=arrayPrez[11];
                        }
                        if(data==1){
                          p.innerHTML=arrayPro[12]+"("+arrayPrez[12]+"€"+")";
                          costo=arrayPrez[12];
                        }
                        if(data==2){
                          p.innerHTML=arrayPro[13]+"("+arrayPrez[13]+"€"+")";
                          costo=arrayPrez[13];
                        }
                        if(data==3){
                          p.innerHTML=arrayPro[14]+"("+arrayPrez[14]+"€"+")";
                          costo=arrayPrez[14];
                        }
                        if(data==4){
                          p.innerHTML=arrayPro[15]+"("+arrayPrez[15]+"€"+")";
                          costo=arrayPrez[15];
                        }
                        if(data==5){
                          p.innerHTML=arrayPro[16]+"("+arrayPrez[16]+"€"+")";
                          costo=arrayPrez[16];
                        }
                      }else if (tab==4) {
                              if(data==0){
                                p.innerHTML=arrayPro[17]+"("+arrayPrez[17]+"€"+")";
                                costo=arrayPrez[17];
                              }
                              if(data==1){
                                p.innerHTML=arrayPro[18]+"("+arrayPrez[18]+"€"+")";
                                costo=arrayPrez[18];
                              }
                              if(data==2){
                                p.innerHTML=arrayPro[19]+"("+arrayPrez[19]+"€"+")";
                                costo=arrayPrez[19];
                              }
                              if(data==3){
                                p.innerHTML=arrayPro[20]+"("+arrayPrez[20]+"€"+")";
                                costo=arrayPrez[20];
                              }
                            }else if (tab==5) {
                                    if(data==0){
                                      p.innerHTML=arrayPro[21]+"("+arrayPrez[21]+"€"+")";
                                      costo=arrayPrez[21];
                                    }
                                    if(data==1){
                                      p.innerHTML=arrayPro[22]+"("+arrayPrez[22]+"€"+")";
                                      costo=arrayPrez[22];
                                    }
                                    if(data==2){
                                      p.innerHTML=arrayPro[23]+"("+arrayPrez[23]+"€"+")";
                                      costo=arrayPrez[23];
                                    }
                                  }else if (tab==6) {
                                          if(data==0){
                                            p.innerHTML=arrayPro[24]+"("+arrayPrez[24]+"€"+")";
                                            costo=arrayPrez[24];
                                          }
                                          if(data==1){
                                            p.innerHTML=arrayPro[25]+"("+arrayPrez[25]+"€"+")";
                                            costo=arrayPrez[25];
                                          }
                                          if(data==2){
                                            p.innerHTML=arrayPro[26]+"("+arrayPrez[26]+"€"+")";
                                            costo=arrayPrez[26];
                                          }
                                          if(data==3){
                                            p.innerHTML=arrayPro[27]+"("+arrayPrez[27]+"€"+")";
                                            costo=arrayPrez[27];
                                          }
                                          if(data==4){
                                            p.innerHTML=arrayPro[28]+"("+arrayPrez[28]+"€"+")";
                                            costo=arrayPrez[28];
                                          }
                                          if(data==5){
                                            p.innerHTML=arrayPro[29]+"("+arrayPrez[29]+"€"+")";
                                            costo=arrayPrez[29];
                                          }
                                          if(data==6){
                                            p.innerHTML=arrayPro[30]+"("+arrayPrez[30]+"€"+")";
                                            costo=arrayPrez[30];
                                          }
                                        }
    if(cont<12){
      totale=totale+costo;
      totp.innerHTML=totale.toFixed(2);
    }
    cont++;
    if(cont==1){
      divA.style.animation="tot 1s forwards"
    }
    dText.style.visibility="hidden"
    if(cont>12){
      mainDiv.style.filter="blur(3px)"
      mainDiv.style.pointerEvents="none";
      alTxt.innerHTML="Carrello pieno!"
      al.style.animation="alert 1.5s forwards"
    }else{
      carrello.append(p);
    }
}
function chiudiPop() {
  top=document.querySelector('#topper');
  mainDiv=document.querySelector('#main');
  al=document.querySelector("#pop");
  mainDiv.style.filter="none"
  mainDiv.style.pointerEvents="auto";
  al.style.animation="alert-r 1.5s forwards"
}
function visPrezS(x) {
  tab=localStorage.getItem('tab');
  divP=document.querySelectorAll('.divPrezzoS');
  para=document.querySelectorAll('.paraS');
  for(var i=0;i<=15;i++){
    if(i==x){
      divP[i].style.animation="prez-1 1s forwards"
    }
  }
  arrayPrez=[
    59.99,
    79.95,
    19.99,
    34.98,
    69.95,
    17.99,
    26.95,
    13.00,
    19.20,
    26.99,
    78.99,
    69.99,
    107.95,
    29.99,
    79.99,
    59.95,
    64.95,
    20.95,
    44.99,
    58.99,
    33.05,
    35.00,
    49.45,
    27.77,
    149.99,
    100.00,
    134.95,
    111.95,
    39.95,
    64.95,
    84.95
  ]
  if(tab==0){
    if(x==0){
      para[x].innerHTML=arrayPrez[6]+"€";
      para[x].style.animation="opa 4s forwards"
    }
    if(x==1){
      para[x].innerHTML=arrayPrez[9]+"€";
      para[x].style.animation="opa 4s forwards"
    }
    if(x==2){
      para[x].innerHTML=arrayPrez[29]+"€";
      para[x].style.animation="opa 4s forwards"
    }
    if(x==3){
      para[x].innerHTML=arrayPrez[18]+"€";
      para[x].style.animation="opa 4s forwards"
    }
    if(x==4){
      para[x].innerHTML=arrayPrez[16]+"€";
      para[x].style.animation="opa 4s forwards"
    }
    if(x==5){
      para[x].innerHTML=arrayPrez[26]+"€";
      para[x].style.animation="opa 4s forwards"
    }
    if(x==6){
      para[x].innerHTML=arrayPrez[23]+"€";
      para[x].style.animation="opa 4s forwards"
    }
    if(x==7){
      para[x].innerHTML=arrayPrez[20]+"€";
      para[x].style.animation="opa 4s forwards"
    }
    if(x==8){
      para[x].innerHTML=arrayPrez[3]+"€";
      para[x].style.animation="opa 4s forwards"
    }
    if(x==9){
      para[x].innerHTML=arrayPrez[0]+"€";
      para[x].style.animation="opa 4s forwards"
    }
    if(x==10){
      para[x].innerHTML=arrayPrez[8]+"€";
      para[x].style.animation="opa 4s forwards"
    }
    if(x==11){
      para[x].innerHTML=arrayPrez[25]+"€";
      para[x].style.animation="opa 4s forwards"
    }
    if(x==12){
      para[x].innerHTML=arrayPrez[2]+"€";
      para[x].style.animation="opa 4s forwards"
    }
    if(x==13){
      para[x].innerHTML=arrayPrez[21]+"€";
      para[x].style.animation="opa 4s forwards"
    }
    if(x==14){
      para[x].innerHTML=arrayPrez[22]+"€";
      para[x].style.animation="opa 4s forwards"
    }
    if(x==15){
        para[x].innerHTML=arrayPrez[28]+"€";
      para[x].style.animation="opa 4s forwards"
    }
  }else if (tab==1) {
          if(x==0){
            para[x].innerHTML=arrayPrez[0]+"€";
            para[x].style.animation="opa 4s forwards"
          }
          if(x==1){
            para[x].innerHTML=arrayPrez[2]+"€";
            para[x].style.animation="opa 4s forwards"
          }
          if(x==2){
            para[x].innerHTML=arrayPrez[4]+"€";
            para[x].style.animation="opa 4s forwards"
          }
        }else if (tab==2) {
                if(x==0){
                  para[x].innerHTML=arrayPrez[5]+"€";
                  para[x].style.animation="opa 4s forwards"
                }
                if(x==1){
                  para[x].innerHTML=arrayPrez[7]+"€";
                  para[x].style.animation="opa 4s forwards"
                }
                if(x==2){
                  para[x].innerHTML=arrayPrez[9]+"€";
                  para[x].style.animation="opa 4s forwards"
                }
              }else if (tab==3) {
                      if(x==0){
                        para[x].innerHTML=arrayPrez[11]+"€";
                        para[x].style.animation="opa 4s forwards"
                      }
                      if(x==1){
                        para[x].innerHTML=arrayPrez[13]+"€";
                        para[x].style.animation="opa 4s forwards"
                      }
                      if(x==2){
                        para[x].innerHTML=arrayPrez[15]+"€";
                        para[x].style.animation="opa 4s forwards"
                      }
                    }else if (tab==4) {
                            if(x==0){
                              para[x].innerHTML=arrayPrez[17]+"€";
                              para[x].style.animation="opa 4s forwards"
                            }
                            if(x==1){
                              para[x].innerHTML=arrayPrez[19]+"€";
                              para[x].style.animation="opa 4s forwards"
                            }
                          }else if (tab==5) {
                                  if(x==0){
                                    para[x].innerHTML=arrayPrez[21]+"€";
                                    para[x].style.animation="opa 4s forwards"
                                  }
                                  if(x==1){
                                    para[x].innerHTML=arrayPrez[23]+"€";
                                    para[x].style.animation="opa 4s forwards"
                                  }
                                }else if (tab==6) {
                                        if(x==0){
                                          para[x].innerHTML=arrayPrez[24]+"€";
                                          para[x].style.animation="opa 4s forwards"
                                        }
                                        if(x==1){
                                          para[x].innerHTML=arrayPrez[26]+"€";
                                          para[x].style.animation="opa 4s forwards"
                                        }
                                        if(x==2){
                                          para[x].innerHTML=arrayPrez[28]+"€";
                                          para[x].style.animation="opa 4s forwards"
                                        }
                                        if(x==3){
                                          para[x].innerHTML=arrayPrez[30]+"€";
                                          para[x].style.animation="opa 4s forwards"
                                        }
                                      }
}

function visPrezSr(x) {
  tab=localStorage.getItem('tab');
  divP=document.querySelectorAll('.divPrezzoS');
  para=document.querySelectorAll('.paraS');
  for(var i=0;i<=15;i++){
    if(i==x){
      divP[i].style.animation="prez-1r 1.5s forwards"
    }
  }
  para[x].style.animation="opa-r .5s forwards"
}


function visPrezD(x) {
  tab=localStorage.getItem('tab');
  divP=document.querySelectorAll('.divPrezzoD');
  para=document.querySelectorAll('.paraD');
  for(var i=0;i<=14;i++){
    if(i==x){
      divP[i].style.visibility="visible"
      divP[i].style.animation="prez-2 1s forwards"
    }
  }
  arrayPrez=[
    59.99,
    79.95,
    19.99,
    34.98,
    69.95,
    17.99,
    26.95,
    13.00,
    19.20,
    26.99,
    78.99,
    69.99,
    107.95,
    29.99,
    79.99,
    59.95,
    64.95,
    20.95,
    44.99,
    58.99,
    33.05,
    35.00,
    49.45,
    27.77,
    149.99,
    100.00,
    134.95,
    111.95,
    39.95,
    64.95,
    84.95
  ]
  if(tab==0){
    if(x==0){
      para[x].innerHTML=arrayPrez[10]+"€";
      para[x].style.animation="opa 4s forwards"
    }
    if(x==1){
      para[x].innerHTML=arrayPrez[14]+"€";
      para[x].style.animation="opa 4s forwards"
    }
    if(x==2){
      para[x].innerHTML=arrayPrez[30]+"€";
      para[x].style.animation="opa 4s forwards"
    }
    if(x==3){
      para[x].innerHTML=arrayPrez[19]+"€";
      para[x].style.animation="opa 4s forwards"
    }
    if(x==4){
      para[x].innerHTML=arrayPrez[15]+"€";
      para[x].style.animation="opa 4s forwards"
    }
    if(x==5){
      para[x].innerHTML=arrayPrez[1]+"€";
      para[x].style.animation="opa 4s forwards"
    }
    if(x==6){
      para[x].innerHTML=arrayPrez[12]+"€";
      para[x].style.animation="opa 4s forwards"
    }
    if(x==7){
      para[x].innerHTML=arrayPrez[13]+"€";
      para[x].style.animation="opa 4s forwards"
    }
    if(x==8){
      para[x].innerHTML=arrayPrez[17]+"€";
      para[x].style.animation="opa 4s forwards"
    }
    if(x==9){
      para[x].innerHTML=arrayPrez[27]+"€";
      para[x].style.animation="opa 4s forwards"
    }
    if(x==10){
      para[x].innerHTML=arrayPrez[7]+"€";
      para[x].style.animation="opa 4s forwards"
    }
    if(x==11){
      para[x].innerHTML=arrayPrez[24]+"€";
      para[x].style.animation="opa 4s forwards"
    }
    if(x==12){
      para[x].innerHTML=arrayPrez[4]+"€";
      para[x].style.animation="opa 4s forwards"
    }
    if(x==13){
      para[x].innerHTML=arrayPrez[5]+"€";
      para[x].style.animation="opa 4s forwards"
    }
    if(x==14){
      para[x].innerHTML=arrayPrez[11]+"€";
      para[x].style.animation="opa 4s forwards"
    }
  }if (tab==1) {
        if(x==0){
          para[x].innerHTML=arrayPrez[1]+"€";
          para[x].style.animation="opa 4s forwards"
        }
        if(x==1){
          para[x].innerHTML=arrayPrez[3]+"€";
          para[x].style.animation="opa 4s forwards"
        }
    }else if (tab==2) {
            if(x==0){
              para[x].innerHTML=arrayPrez[6]+"€";
              para[x].style.animation="opa 4s forwards"
            }
            if(x==1){
              para[x].innerHTML=arrayPrez[8]+"€";
              para[x].style.animation="opa 4s forwards"
            }
            if(x==2){
              para[x].innerHTML=arrayPrez[10]+"€";
              para[x].style.animation="opa 4s forwards"
            }
          }else if (tab==3) {
                  if(x==0){
                    para[x].innerHTML=arrayPrez[12]+"€";
                    para[x].style.animation="opa 4s forwards"
                  }
                  if(x==1){
                    para[x].innerHTML=arrayPrez[14]+"€";
                    para[x].style.animation="opa 4s forwards"
                  }
                  if(x==2){
                    para[x].innerHTML=arrayPrez[16]+"€";
                    para[x].style.animation="opa 4s forwards"
                  }
                }else if (tab==4) {
                        if(x==0){
                          para[x].innerHTML=arrayPrez[18]+"€";
                          para[x].style.animation="opa 4s forwards"
                        }
                        if(x==1){
                          para[x].innerHTML=arrayPrez[20]+"€";
                          para[x].style.animation="opa 4s forwards"
                        }
                      }else if (tab==5) {
                              if(x==0){
                                para[x].innerHTML=arrayPrez[22]+"€";
                                para[x].style.animation="opa 4s forwards"
                              }
                            }else if (tab==6) {
                                    if(x==0){
                                      para[x].innerHTML=arrayPrez[25]+"€";
                                      para[x].style.animation="opa 4s forwards"
                                    }
                                    if(x==1){
                                      para[x].innerHTML=arrayPrez[27]+"€";
                                      para[x].style.animation="opa 4s forwards"
                                    }
                                    if(x==2){
                                      para[x].innerHTML=arrayPrez[29]+"€";
                                      para[x].style.animation="opa 4s forwards"
                                    }
                                  }
}

function visPrezDr(x) {
  divP=document.querySelectorAll('.divPrezzoD');
  para=document.querySelectorAll('.paraD');
  for(var i=0;i<=14;i++){
    if(i==x){
      divP[i].style.animation="prez-2r 1.5s forwards"
    }
  }
  para[x].style.animation="opa-r .5s forwards"
}
function info(){
  infoD=document.querySelector('#info');
  note=document.querySelector('#iNote');
  if(counter%2==0){
    infoD.style.animation="info-a 1.3s forwards"
    note.style.animation="note-a 2.1s forwards"
  }else{
    infoD.style.animation="info-ar 1.3s forwards"
    note.style.animation="note-ar 1s forwards"
  }
  counter++;
}
