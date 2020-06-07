window.onload = function() {
  var x = localStorage.getItem("Nome");
  var nomePara = document.querySelector("p[name=nomeX]");
  var img=document.querySelector("#proEstate");
  nomePara.innerText+=x;
}

function divImg(x){
  div=document.querySelectorAll(".mainPro");
  line=document.querySelector("#divStile");
  line2=document.querySelector("#divStile2");
  line3=document.querySelector("#divStile3");
  if(window.innerWidth>=1280){
    if(x==1){
      div[0].style.width="385px"
      div[0].style.height="385px"
      line.style.animation='linea 2s forwards'
    }else if(x==2){
            div[1].style.width="385px"
            div[1].style.height="385px"
            line2.style.animation='linea-p2 2s forwards'
          }else if(x==3){
                  div[2].style.width="385px"
                  div[2].style.height="385px"
                  line3.style.animation='linea-p3 2s forwards'
                }
  }else if(window.innerWidth<=1280 || window.innerWidth>500){
          if(x==1){
            div[0].style.width="315px"
            div[0].style.height="315px"
            line.style.animation='linea 2s forwards'
          }else if(x==2){
                  div[1].style.width="315px"
                  div[1].style.height="315px"
                  line2.style.animation='linea-p2 2s forwards'
                }else if(x==3){
                        div[2].style.width="315px"
                        div[2].style.height="315px"
                        line3.style.animation='linea-p3 2s forwards'
                      }
        }else if(window.innerWidth<=500){
                  if(x==1){
                    div[0].style.width="315px"
                    div[0].style.height="315px"
                    line.style.animation='linea 2s forwards'
                  }else if(x==2){
                          div[1].style.width="315px"
                          div[1].style.height="315px"
                          line2.style.animation='linea-p2 2s forwards'
                        }else if(x==3){
                                div[2].style.width="280px"
                                div[2].style.height="280px"
                                line3.style.animation='linea-p3 2s forwards'
                              }
                }

}

function divImgR(x){
  div=document.querySelectorAll(".mainPro");
  line=document.querySelector("#divStile");
  line2=document.querySelector("#divStile2");
  line3=document.querySelector("#divStile3");
  if(window.innerWidth>=1280){
        if(x==1){
          div[0].style.width="350px"
          div[0].style.height="350px"
          line.style.animation='linea-r 2s forwards'
        }else if(x==2){
                div[1].style.width="350px"
                div[1].style.height="350px"
                line2.style.animation='linea-r-p2 2s forwards'
              }else if(x==3){
                      div[2].style.width="350px"
                      div[2].style.height="350px"
                      line3.style.animation='linea-r-p3 2s forwards'
                    }
  }else if(window.innerWidth<=1280 || window.innerWidth<500){
            if(x==1){
              div[0].style.width="280px"
              div[0].style.height="280px"
              line.style.animation='linea-r 2s forwards'
            }else if(x==2){
                    div[1].style.width="280px"
                    div[1].style.height="280px"
                    line2.style.animation='linea-r-p2 2s forwards'
                  }else if(x==3){
                          div[2].style.width="280px"
                          div[2].style.height="280px"
                          line3.style.animation='linea-r-p3 2s forwards'
                        }
        }else if(window.innerWidth<=500){
                  if(x==1){
                    div[0].style.width="350px"
                    div[0].style.height="350px"
                    line.style.animation='linea-r 2s forwards'
                  }else if(x==2){
                          div[1].style.width="350px"
                          div[1].style.height="350px"
                          line2.style.animation='linea-r-p2 2s forwards'
                        }else if(x==3){
                                div[2].style.width="350px"
                                div[2].style.height="350px"
                                line3.style.animation='linea-r-p3 2s forwards'
                              }
                }

}
function testoG(){
  var testo=document.querySelector("#Percento");
  testo.style.color="#fda000"
}

function noTestoG(){
  var testo=document.querySelector("#Percento");
  testo.style.color="white"
}
