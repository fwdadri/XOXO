for (let index = 0; index < caja.length; index++) {

    caja[index].addEventListener("click",function () {
    
      caja[index].innerHTML="⭐"
  
     setTimeout(() => {
      caja[4].innerHTML="🍓";
    }, 2000);  
    })
  
  };
  