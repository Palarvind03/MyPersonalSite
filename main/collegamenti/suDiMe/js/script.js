cont=1;
setInterval( function() {
  var vet=[0,"un ragazzo","uno studente","un Indiano",];
  var testo=document.querySelector("#text2");
  if(cont==4){
    cont=1;
    testo.innerHTML=vet[cont];
  }else{
    testo.innerHTML=vet[cont];
    cont++;
  }
}, 3000);
function vaiHome() {
  var home=document.querySelector("#home");
  var suDiMe=document.querySelector("#in");

  home.style.color="#fda000";
  suDiMe.style.color="white";
}
function resta() {
  var home=document.querySelector("#home");
  var suDiMe=document.querySelector("#in");

  home.style.color="white";
  suDiMe.style.color="#fda000";
}
