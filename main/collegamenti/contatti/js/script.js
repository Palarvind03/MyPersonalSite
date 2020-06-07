var flag=0
function ricevuto() {
  mes=document.querySelector("#pop");
  mesImg=document.querySelector("#popImg");
  popTxt=document.querySelector("#popTesto");
  nome=document.querySelector("#input1");
  email=document.querySelector("#input2");
  testo=document.querySelector("#input3");
  div=document.querySelector("#mainDiv");
  tCont=document.querySelector("#txtC");
  imgCont=document.querySelector("#imgC");
  array=[0,nome,email,testo];
  array2=[0,"Nome","Email","Commento"]
  if(nome.value=="" || email.value=="" || testo.value==""){
    if(nome.value=="" && email.value=="" && testo.value==""){
      popTxt.innerHTML="";
      div.style.pointerEvents="none";
      div.style.filter="blur(3px)"
      tCont.style.filter="blur(3px)"
      imgCont.style.filter="blur(3px)"
      popTxt.innerHTML="Dati inseriti non validi!"
      mes.style.display="block"
    }else{
      popTxt.innerHTML="";
      for(var i=1;i<4;i++){
        if(array[i].value==""){
          popTxt.innerHTML+=array2[i]+"-";
          flag++;
        }
      }
      if(flag==2){
        popTxt.innerHTML+="non validi"
      }else{
        popTxt.innerHTML+="non valido"
      }
      imgCont.style.filter="blur(3px)"
      tCont.style.filter="blur(3px)"
      div.style.filter="blur(3px)"
      div.style.pointerEvents="none";
      mes.style.display="block"
    }
  }else{
    imgCont.style.filter="blur(3px)"
    tCont.style.filter="blur(3px)"
    div.style.filter="blur(3px)"
    popTxt.innerHTML="";
    div.style.pointerEvents="none";
    mesImg.src="./img/ok.png"
    popTxt.innerHTML="Grazie per il tuo feedback!"
    mes.style.display="block"
  }
}
function chiudiPop() {
  div=document.querySelector("#mainDiv");
  mes=document.querySelector("#pop");
  tCont=document.querySelector("#txtC");
  imgCont=document.querySelector("#imgC");
  imgCont.style.filter="blur(3px)"
  tCont.style.filter="blur(3px)"
  tCont.style.filter="none"
  imgCont.style.filter="none"
  div.style.filter="none"
  div.style.pointerEvents="auto";
  mes.style.display="none";
}

function vaiHome() {
  var home=document.querySelector("#home");
  var contatti=document.querySelector("#in");

  home.style.color="#fda000";
  contatti.style.color="rgb(63, 61, 86,1)";
}
function resta() {
  var home=document.querySelector("#home");
  var contatti=document.querySelector("#in");

  home.style.color="rgb(63, 61, 86,1)";
  contatti.style.color="#fda000";
}
