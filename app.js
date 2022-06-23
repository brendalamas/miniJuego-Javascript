let puntajeUsuaria = 0;
let puntajeComputadora = 0;

const manoUsuario = document.querySelector(".mano-usuaria");
const manoComputadora = document.querySelector(".mano-computadora");

const configurarJuego = () => {
  const botonPiedra = document.querySelector(".opciones button.piedra");
  const botonPapel = document.querySelector(".opciones button.papel");
  const botonTijera = document.querySelector(".opciones button.tijera");

  botonPiedra.onclick = () => {
    limpiar();
    juego('piedra');
  }

  botonPapel.onclick = () => {
    limpiar();
    juego('papel');
  }

  botonTijera.onclick = () => {
    limpiar();
    juego('tijera');
  }
};

const limpiar = () => {
  const resultado = document.querySelector(".resultado");

  resultado.textContent = "🤨";

  manoUsuario.src = `./img/piedra_ada.png`;
  manoComputadora.src = `./img/piedra_computadora.png`;
}


const obtenerEleccionComputadora = () => {
  const opcionesComputadora = ['piedra', 'papel', 'tijera'];

  const numeroComputadora = Math.floor(Math.random() * 3);

  return opcionesComputadora[numeroComputadora];
}

const juego = (eleccionUsuaria) => {
  const tablero = document.querySelector(".tablero");

  setTimeout(() => {
    tablero.classList.remove('jugando');

    const eleccionComputadora = obtenerEleccionComputadora();

    comparar(eleccionUsuaria, eleccionComputadora);

    manoUsuario.src = `./img/${eleccionUsuaria}_ada.png`;
    manoComputadora.src = `./img/${eleccionComputadora}_computadora.png`;
  }, 1000);

  tablero.classList.add('jugando');
}

const actualizarPuntajes = () => {
  const playerScore = document.querySelector(".puntaje-usuaria p");
  const computerScore = document.querySelector(".puntaje-computadora p");

  playerScore.textContent = puntajeUsuaria;
  computerScore.textContent = puntajeComputadora;
};

const comparar = (eleccionUsuaria, eleccionComputadora) => {

  const resultado = document.querySelector(".resultado");

  if (eleccionUsuaria === eleccionComputadora) {
    resultado.textContent = "Empate 😶";
  } else if (eleccionUsuaria === "piedra") {
    if (eleccionComputadora === "tijera") {
      resultado.textContent = "¡Ganaste! 🎉";
      puntajeUsuaria++;
    } else {
      resultado.textContent = "Perdiste 😥";
      puntajeComputadora++;
    }
  } else if (eleccionUsuaria === "papel") {
    if (eleccionComputadora === "tijera") {
      resultado.textContent = "Perdiste 😥";
      puntajeComputadora++;
    } else {
      resultado.textContent = "¡Ganaste! 🎉";
      puntajeUsuaria++;
    }
  } else if (eleccionUsuaria === "tijera") {
    if (eleccionComputadora === "piedra") {
      resultado.textContent = "Perdiste 😥";
      puntajeComputadora++;
    } else {
      resultado.textContent = "¡Ganaste! 🎉";
      puntajeUsuaria++;
    }
  }

  actualizarPuntajes();
};

configurarJuego();