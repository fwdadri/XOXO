let caja = document.querySelectorAll('.caja');
let start = document.querySelector("#start");
let jugador = "⭐";
let ia = "🍓"
let texto = document.querySelector('.msj');
let estado = 'juego'// el estado cambia con el gane, lo que hace que se impida seguir jugando

let conteoEstrella = 0;
let conteoFresa = 0;

console.log(caja)

for (let index = 0; index < caja.length; index++) {
  
    caja[index].addEventListener("click",function () {

      if (estado == 'juego') {

       if (caja[index].innerHTML != "⭐" && caja[index].innerHTML != "🍓") {
    
          caja[index].innerHTML= jugador
         // ganes()// la funcion debe ir dentro de los event click para que funcione

         juegoIA()
        }     
      }
    });
};


function cambiarJugador() {

    if (jugador == "⭐") {//??????????
        ia = "🍓";
        texto.innerHTML = 'turno de ⭐';
    }else{
      jugador = "⭐";
      texto.innerHTML = 'turno de 🍓'; //si jugdor es estrella se va a mostrar "turno fresa" dentro del texto
    }
    return jugador;
    
};



function juegoIA() {

 estado = 'bot';
 
 let cajita =[];

 let valorRam = Math.floor(Math.random()*9)

 for (let index = 0; index < caja.length; index++) {
          
   // console.log(caja[index].textContent);
   if (caja[index].textContent == '') {

    cajita.push(index)

    console.log(cajita)

   }
    if (caja[index].textContent != "⭐" && caja[index].textContent != "🍓") {

      cajita.push(index)// se supone que el push sube elementos a un array?
      


    }
   }
    
 }






function ganes() {
    if (caja[0].innerHTML == "⭐" && caja[4].innerHTML == "⭐" && caja[8].innerHTML == "⭐") {
     texto.innerHTML = '⭐ Gano';
     estado = 'gane'
    }else if (caja[0].innerHTML == "🍓" && caja[4].innerHTML == "🍓" && caja[8].innerHTML == "🍓") {
      texto.innerHTML = '🍓 Gano';
     estado = 'gane';
    }
    if (caja[2].innerHTML == "⭐" && caja[4].innerHTML == "⭐" && caja[6].innerHTML == "⭐") {
      texto.innerHTML = '⭐ Gano'
      }else if (caja[2].innerHTML == "🍓" && caja[4].innerHTML == "🍓" && caja[6].innerHTML == "🍓") {
        texto.innerHTML = '🍓 Gano';
        estado = 'gane'
    }
    if (caja[0].innerHTML == "⭐" && caja[1].innerHTML == "⭐" && caja[2].innerHTML == "⭐") {
      texto.innerHTML = '⭐ Gano'
      }else if (caja[0].innerHTML == "🍓" && caja[1].innerHTML == "🍓" && caja[2].innerHTML == "🍓") {
        texto.innerHTML = '🍓 Gano';
        estado = 'gane'
    }
    if (caja[3].innerHTML == "⭐" && caja[4].innerHTML == "⭐" && caja[5].innerHTML == "⭐") {
      texto.innerHTML = '⭐ Gano'
      estado = 'gane'
      }else if (caja[3].innerHTML == "🍓" && caja[4].innerHTML == "🍓" && caja[5].innerHTML == "🍓") {
        texto.innerHTML = '🍓 Gano';
        estado = 'gane'
    }
    if (caja[6].innerHTML == "⭐" && caja[7].innerHTML == "⭐" && caja[8].innerHTML == "⭐") {
      texto.innerHTML = '⭐ Gano'
      estado = 'gane'
      }else if (caja[6].innerHTML == "🍓" && caja[7].innerHTML == "🍓" && caja[8].innerHTML == "🍓") {
        texto.innerHTML = '🍓 Gano';
        estado = 'gane'
    }
    if (caja[0].innerHTML == "⭐" && caja[3].innerHTML == "⭐" && caja[6].innerHTML == "⭐") {
      texto.innerHTML = '⭐ Gano'
      estado = 'gane'
      }else if (caja[2].innerHTML == "🍓" && caja[4].innerHTML == "🍓" && caja[7].innerHTML == "🍓") {
        texto.innerHTML = '🍓 Gano';
        estado = 'gane'
    }
    if (caja[1].innerHTML == "⭐" && caja[4].innerHTML == "⭐" && caja[7].innerHTML == "⭐") {
      texto.innerHTML = '⭐ Gano'
      estado = 'gane'
      }else if (caja[1].innerHTML == "🍓" && caja[4].innerHTML == "🍓" && caja[7].innerHTML == "🍓") {
        texto.innerHTML = '🍓 Gano';
        estado = 'gane'
    }
    if (caja[2].innerHTML == "⭐" && caja[5].innerHTML == "⭐" && caja[8].innerHTML == "⭐") {
      texto.innerHTML = '⭐ Gano'
      estado = 'gane'
      }else if (caja[2].innerHTML == "🍓" && caja[5].innerHTML == "🍓" && caja[8].innerHTML == "🍓") {
        texto.innerHTML = '🍓 Gano';
        estado = 'gane'
    }else{
      for (let index = 0; index < caja.length; index++) {// conteo de fresas y estrellas
  
        if (caja[index].textContent=="⭐") {
          conteoEstrella++
        }
        if (caja[index].textContent=="🍓") {
          conteoFresa++
        }
        if (conteoEstrella == 5 && conteoFresa==4) {
          texto.innerHTML = '🍓 SE EMPATO ⭐ ';
        }
      }
      conteoEstrella=0/// es necesario colocarlos aqui adentro ???????
      conteoFresa=0
    };
  };

start.addEventListener("click", function () {
    for (let index = 0; index < caja.length; index++) {
      caja[index].innerHTML= "";//elimina todo en las cajas
      texto.innerHTML = 'comienza ⭐';
      estado = 'juego'
}});