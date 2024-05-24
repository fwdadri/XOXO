let caja = document.querySelectorAll('.caja');
let start = document.querySelector("#start");
let jugador = "⭐";
let texto = document.querySelector('.msj');
let estado = 'juego'// el estado cambia con el gane, lo que hace que se impida seguir jugando
let mensaje=document.getElementById("mensaje")
let conteoEstrella = 0;
let conteoFresa = 0;

console.log(caja)

for (let index = 0; index < caja.length; index++) {
  
    caja[index].addEventListener("click",function  juego() {

      if (estado == 'juego') {

       if (caja[index].innerHTML != "⭐" && caja[index].innerHTML != "🍓") {
          caja[index].innerHTML= jugador
          mensaje.innerHTML="Turno de 🍓"
          if (ganes("⭐")) {

            
          }
         // ganes()// la funcion debe ir dentro de los event click para que funcione
         
         ganes();
         cambiarJugador();
        
         if (estado == "juego") {// aqui queda el estado gane y no pasa dentro del if
          juegoIA();
         }
        }     
      }
    });
};


function cambiarJugador() {

    if (jugador == "⭐") {//??????????
       jugador = "🍓";
       jugador = "⭐"; //si jugdor es estrella se va a mostrar "turno fresa" dentro del texto
    }
    return jugador;
};


function juegoIA() {
  
  
 
  
 
 let cajitasVacias=[]; //array con espacios vacios
 // el for de aqui es solo para guardar las cajas vacias
  for (let indice = 0; indice < caja.length; indice++) {// identificar cajas vacias

      if(caja[indice].innerHTML == "") {

        cajitasVacias.push(caja[indice]);// se añade las cajas vacias a la variable cajas vacias

      }
  } 
  let random = Math.floor((Math.random() * cajitasVacias.length));  

  estado = 'bot';
  
  console.log(random)
  
  

   setTimeout(() => {
     cajitasVacias[random].innerHTML = "🍓";
  
     ganes();
     
  }, 1000);

  mensaje.innerHTML="Turno de ⭐ "
   
   setTimeout(() => { 
    estado = "juego"
  }, 1000);
};


function ganes() {
    if (caja[0].textContent == "⭐" && caja[4].textContent == "⭐" && caja[8].textContent == "⭐") {
      texto.innerHTML = '⭐ Gano';
     
     estado = 'gane'
    }else if (caja[0].textContent == "🍓" && caja[4].textContent == "🍓" && caja[8].textContent == "🍓") {
      texto.innerHTML = '🍓 Gano';
     estado = 'gane';
    }
    if (caja[2].textContent == "⭐" && caja[4].textContent == "⭐" && caja[6].textContent == "⭐") {
      }else if (caja[2].textContent == "🍓" && caja[4].textContent == "🍓" && caja[6].textContent == "🍓") {
        texto.innerHTML = '🍓 Gano';
        estado = 'gane'
    }
    if (caja[0].textContent == "⭐" && caja[1].textContent == "⭐" && caja[2].textContent == "⭐") {
      texto.innerHTML = '⭐ Gano'
      }else if (caja[0].textContent == "🍓" && caja[1].textContent == "🍓" && caja[2].textContent == "🍓") {
        texto.innerHTML = '🍓 Gano';
        estado = 'gane'
    }
    if (caja[3].textContent == "⭐" && caja[4].textContent == "⭐" && caja[5].textContent == "⭐") {
      texto.innerHTML = '⭐ Gano'
      estado = 'gane'
      }else if (caja[3].textContent == "🍓" && caja[4].textContent == "🍓" && caja[5].textContent == "🍓") {
        texto.innerHTML = '🍓 Gano';
        estado = 'gane'
    }
    if (caja[6].textContent == "⭐" && caja[7].textContent == "⭐" && caja[8].textContent == "⭐") {
      texto.innerHTML = '⭐ Gano'
      estado = 'gane'
      }else if (caja[6].textContent == "🍓" && caja[7].textContent == "🍓" && caja[8].textContent == "🍓") {
        texto.innerHTML = '🍓 Gano';
        estado = 'gane'
    }
    if (caja[0].textContent == "⭐" && caja[3].textContent == "⭐" && caja[6].textContent == "⭐") {
      texto.innerHTML = '⭐ Gano'
      estado = 'gane'
      }else if (caja[2].textContent == "🍓" && caja[4].textContent == "🍓" && caja[7].textContent == "🍓") {
        texto.innerHTML = '🍓 Gano';
        estado = 'gane'
    }
    if (caja[1].textContent == "⭐" && caja[4].textContent == "⭐" && caja[7].textContent == "⭐") {
      texto.innerHTML = '⭐ Gano'
      estado = 'gane'
      }else if (caja[1].textContent == "🍓" && caja[4].textContent == "🍓" && caja[7].textContent == "🍓") {
        texto.innerHTML = '🍓 Gano';
        estado = 'gane'
    }
    if (caja[2].textContent == "⭐" && caja[5].textContent == "⭐" && caja[8].textContent == "⭐") {
      texto.innerHTML = '⭐ Gano'
      estado = 'gane'
      }else if (caja[2].textContent == "🍓" && caja[5].textContent == "🍓" && caja[8].textContent == "🍓") {
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
          estado = 'gane'
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

alone.onclick = function (){
  alert ('modo compañia activado')  
}


// cajitas = document.querySelectorAll('.cajita');
// cajitas[0]//<div>
// cajitas[1]//<div>
// cajitas[2]//<div>
// cajitas[3]//<div>
// cajitas[4]//<div>
// cajitas[5]//<div> //X
// cajitas[6]//<div>
// cajitas[7]//<div>
// cajitas[8]//<div>



// cajitas.lenght //9
// let cajitasVacias = [];
// for (let indice = 0; indice < cajitas.length; i++) {
//   if(cajitas[indice].innerHTML == "") {
//     cajitasVacias = cajitas[indice];
//   }
// }


// cajitasVacias.lenght //8
// cajitas[0]//<div>
// cajitas[1]//<div>
// cajitas[2]//<div>
// cajitas[3]//<div>
// cajitas[4]//<div>
// cajitas[6]//<div>
// cajitas[7]//<div>
// cajitas[8]//<div>
// cajitasVacias[0]//<div>
// cajitasVacias[1]//<div>
// cajitasVacias[2]//<div>
// cajitasVacias[3]//<div>
// cajitasVacias[4]//<div>
// cajitasVacias[6]//<div>
// cajitasVacias[7]//<div>



// let random = Math.floor((Math.random() * cajitasVacias.lenght));//0-7

// cajitasVacias[random] //1

// let bandera = true;

// if(condition) {//existen espacios vacios
//   while(bandera == true) {
//     let random = Math.floor((Math.random() * cajitas.lenght)); //5,6,7,6,4
//     if(cajitas[random].innerHTML == "") {
//       cajitas[random].innerHTML = "Fresa";
//       bandera = false;
//     }}}