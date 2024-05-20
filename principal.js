//constantes

const display = document.querySelector('.msj');
  estado = ["", "", "", "", "", "", "", "", ""];
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
msj_ganador = () => `El jugador ${jugadorActual} ha ganado!`; // se llama cada vez que es el turno de un jugador
mjs_empate = () => `El juego ha terminado en empate!`;  // esas dos funciones se llaman cuando se ha terminado el juego
turno = () => `Turno del jugador ${jugadorActual}`; // esta funcion se llama dependiendo de quien es el jugador

let jugadorActivo = true; //si sigue la pasrtida activa signica que ninguno de los dos ha ganado o empatado
  jugadorActual = "⭐";

///////////////////////////////////////////////////////////////////////////////////////////////////////
function principal() {

 manejoDisplay(turno());
  listeners();

}

function listeners() {

  document.querySelector('.contenedor').addEventListener('click', handleCellClick);
  document.querySelector('.start').addEventListener('click', manejoStart);

}

function manejoDisplay(message) {

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

  if (clickedCell.classList.contains('caja')) {

    const clickedCellIndex = Array.from(clickedCell.parentNode.children).indexOf(clickedCell);

    if (estado[clickedCellIndex] !== '' || !jugadorActivo) {
      return false;
    }

    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();
  }
}

function handleCellPlayed(clickedCell, clickedCellIndex) {

  estado[clickedCellIndex] = jugadorActual;// agregar la fresa y la estrella donde corresponde
  clickedCell.innerHTML = jugadorActual;

}

function handleResultValidation() {
  let rondaGanada = false
  for (let i = 0; i < ganes.length; i++) { // Itera cada uno de las posibles combinaciones ganadores

    const condicionGane = ganes[i]; // Guarda las combinaciones por ejemplo: [0, 1, 2]

    let posicion1 = estado[condicionGane[0]];
      posicion2 = estado[condicionGane[1]];
      posicion3 = estado[condicionGane[2]]; 

    if (posicion1 === '' || posicion2 === '' || posicion3 === '') {
      continue; // Si hay algún valor vacio nadie ha ganado aún
    }
    if (posicion1 === posicion2 && posicion2 === posicion3) {
      rondaGanada = true; // Si todas las posiciones coinciden entonces, dicho jugador ha ganado la partida
      break
    }
  }
  if (rondaGanada) {

    manejoDisplay(msj_ganador());
    jugadorActivo = false;
    return

  }
  let rondaEmpatada = !estado.includes("") // Si todas las celdas tienen valor y la sentencia anterior fue falsa entonces es empate

  if (rondaEmpatada) {

    manejoDisplay(mjs_empate());
    jugadorActivo = false;
    return

  }

  handlePlayerChange();
};

function handlePlayerChange() {
  
 jugadorActual = jugadorActual === "⭐" ? "🍓" : "⭐";
 manejoDisplay(turno());
};

function volverEmpezar() {
  let i = estado.length;
  while (i--) {
    estado[i] = '';
  }
};

principal();