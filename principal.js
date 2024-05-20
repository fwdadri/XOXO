
const display = document.querySelector('.msj');
  estado = ["", "", "", "", "", "", "", "", ""];// es el index qe se recorre
    ganes = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
// las siguienetes tres son funciones que van variando dependiendo de quien es el jugador
//son funciones porque cambian dependiendo del jugador
msj_ganador = () => `El jugador ${jugadorActual} ha ganado!`; // se llama cada vez que es el turno de un jugador
mjs_empate = () => `El juego ha terminado en empate!`;  // esas dos funciones se llaman cuando se ha terminado el juego
turno = () => `Turno del jugador ${jugadorActual}`; // esta funcion se llama dependiendo de quien es el jugador

let jugadorActivo = true; //si sigue la pasrtida activa signica que ninguno de los dos ha ganado o empatado
let jugadorActual = "⭐";// a que jugador le toca 

///////////////////////////////////////////////////////////////////////////////////////////////////////
function principal() {

 manejoDisplay(turno());
  listeners();

};

function listeners() {

  document.querySelector('.contenedor').addEventListener('click', handleCellClick);//se llamo al contenedor y se le puso a un evento click
  document.querySelector('.start').addEventListener('click', manejoStart);
   

};

function manejoDisplay(message) {
//mensaje es el resultado de las tres funciones de arriba
  display.innerHTML = message;

}

function manejoStart() {

  jugadorActivo = true;
  jugadorActual = "🍓";
  volverEmpezar();
  manejoDisplay(turno());
  document.querySelectorAll('.caja').forEach(cell => cell.innerHTML = "");

}

function handleCellClick(clickedCellEvent) {

  const clickedCell = clickedCellEvent.target;

  if (clickedCell.classList.contains('caja')) { //para asegurarno que hicimos click en una celda

    const clickedCellIndex = Array.from(clickedCell.parentNode.children).indexOf(clickedCell); //aqui se esta llamando a todos lo hijos del contenedor
//se esta convirtiendo a los hijos en un arrays
    if (estado[clickedCellIndex] !== '' || !jugadorActivo) {// si la posicion a la que le dimos click esta vacia, o el juego esta activo, se sale y no ejecuta lo que esta abajo
      return false;
    }

    handleCellPlayed(clickedCell, clickedCellIndex);//se le esta pasando la  funcion
    handleResultValidation();
  }
}

function handleCellPlayed(clickedCell, clickedCellIndex) {//se le paso el elemnto html y el index

  estado[clickedCellIndex] = jugadorActual;// agregar la fresa y la estrella donde corresponde
  clickedCell.innerHTML = jugadorActual;
  
}

function handleResultValidation() {
  let rondaGanada = false; //la variable por defecto empieza en false
  for (let i = 0; i < ganes.length; i++) { // Itera cada uno de las posibles combinaciones ganadores

    const condicionGane = ganes[i]; // esta recoriendo las condiciones de gane, si ninguna se cumple el juego sigue
      let posicion1 = estado[condicionGane[0]];//aqui se esta en el estao de posicion 0
      let posicion2 = estado[condicionGane[1]];
      let posicion3 = estado[condicionGane[2]]; 

    if (posicion1 === '' || posicion2 === '' || posicion3 === '') {//si las cajas estan vacias, aun nadie ha ganado
      continue; //pero si una de la siguientes tablas no esta vacia, continua y pasa por las siguientes validaciones
    }
    if (posicion1 === posicion2 && posicion2 === posicion3) {
      rondaGanada = true; // Si todas las posiciones coinciden entonces, dicho jugador ha ganado la partida
      break
    }
  }
  if (rondaGanada) {//aqui se comprueba si la variable ronda ganada es true, si es asi se muestra un msj

    manejoDisplay(msj_ganador());
    jugadorActivo = false;//aqui se impide que se siga colocando emojis en las cajas
    return

  }
  let rondaEmpatada = !estado.includes("") //aqui se comprueba si hay una caja vacia, si aun existe significa que se ha empatado Si todas las celdas tienen valor y la sentencia anterior fue falsa entonces es empate
 //.includesnos permite pasarle un valor, aqui esta verificandosi es true o false, si es true es que contiene dicho valor
  if (rondaEmpatada) {//si no existen cajas vacias significa que es un empate 

    manejoDisplay(mjs_empate());
    jugadorActivo = false;
    return/////se imprime el mensaje y se sale del juego

  }

  handlePlayerChange(); //si ninguna de las condiciones anterionres no se cumple se cambia dejugador
};

function handlePlayerChange() {
//se inserto una variable de arriba///aqui hay un operador ternario
 jugadorActual = jugadorActual === "⭐" ? "🍓" : "⭐";
 manejoDisplay(turno());// si es igual a x se almacena una se almacena una o
// se llamo a la funcion turno, nos dice el turno del jugador
};

function volverEmpezar() {// aqui se restablece el juego
  let i = estado.length;
  while (i--) {//cuentta los numeros negativos
    estado[i] = '';
  }
};

principal();


//function juegoIA() {
//    index = Math.floor(Math.random() * 9)
//   estado = ["", "", "", "", "", "", "", "", ""];

//    setTimeout(() => {

//        array[index].innerHTML = '🍓';

//   }, 1000);
//}