

function logIn() {
  var dato1=document.querySelector('input[name=nome]');
  var dato2=document.querySelector('input[name=cognome]');
  var dato3=document.querySelector('input[name=indirizzo]');
  var mas=document.querySelector('#pop');
  var masTxt=document.querySelector('#popText');
  var div=document.querySelector('#contenitore');
  var mainDiv=document.querySelector('#logDiv');
  var flag=0;
  var arrayDati=[dato1.value,dato2.value,dato3.value];
  var arrayNomeDati=["Nome","Cognome","Indirizzo"];
  if(dato1.value=="" || dato2.value=="" || dato3.value==""){
    if(dato1.value=="" && dato2.value=="" && dato3.value==""){
      masTxt.innerHTML=""
      masTxt.innerHTML="DATI inseriti non validi!"
      div.style.filter="blur(2px)"
      mas.style.display="block";
      mainDiv.style.pointerEvents = "none"
    }else{
      masTxt.innerHTML=""
      for(var i=0;i<3;i++){
        if(arrayDati[i]==""){
          masTxt.innerHTML+="-"+arrayNomeDati[i];
          flag++;
        }
      }
      if(flag==2){
        masTxt.innerHTML+=":"+"non sono validi!"
        div.style.filter="blur(2px)"
        mas.style.display="block";
        mainDiv.style.pointerEvents = "none"
      }else{
        masTxt.innerHTML+=":"+"non valido!"
        div.style.filter="blur(2px)"
        mas.style.display="block";
        mainDiv.style.pointerEvents = "none"
      }
    }
  }else{
    len1=dato1.value.length;
    len2=dato2.value.length;
    var br = document.createElement('br');
    if(len1<4 || len2<4 ){
      masTxt.innerHTML=""
      masTxt.innerHTML="Nome e Cognome(4 caratteri)!"
      div.style.filter="blur(2px)"
      mas.style.display="block";
      mainDiv.style.pointerEvents = "none"
    }else{
      localStorage.setItem("Nome", dato1.value);
      localStorage.setItem("Cognome", dato2.value);
      localStorage.setItem("Indirizzo", dato3.value);
      var masTxt=document.querySelector('#popText');
      var div=document.querySelector('#contenitore');
      var img=document.querySelector('#masImg');
      var entra=document.querySelector("#ok");
      var link=document.querySelector('#link');
      var div=document.querySelector('#contenitore');
      var mainDiv=document.querySelector('#logDiv');
      img.src="./img/ok.png"
      masTxt.innerHTML="dati salvati con successo nel localStorage!"
      div.style.filter="blur(2px)"
      entra.value="ENTRA!"
      mainDiv.style.pointerEvents = "none"
      mas.style.display="block";
      link.setAttribute("href", "./main/main.html");
    }
  }
}
function chiudiPop(){
  mainDiv=document.querySelector('#logDiv');
  var div=document.querySelector('#contenitore');
  var mas=document.querySelector('#pop');
  mas.style.display="none";
  div.style.filter="blur(0px)";
  mainDiv.style.pointerEvents = "auto";
}

function preventBack(){window.history.forward();}
 setTimeout("preventBack()", 0);
 window.onunload=function(){null;};
