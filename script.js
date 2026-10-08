let entrada = "";

document.addEventListener("DOMContentLoaded", function () {

  const botones = document.querySelectorAll(".boton");

  botones.forEach(function (boton) {

    const texto = boton.textContent.trim();

    if (texto >= "0" && texto <= "9") {
      boton.addEventListener("click", function () {
        numero(texto);
      });
    }

    if (texto === "×") {
      boton.addEventListener("click", borrar);
    }

    if (texto === "✓") {
      boton.addEventListener("click", comprobar);
    }

  });

});


function numero(n) {

  if (entrada.length >= 8) return;

  entrada += n;

  const posicion = entrada.length;

  const casilla = document.getElementById("d" + posicion);

  if (casilla) {
    casilla.textContent = n;
  }

}


function borrar() {

  if (entrada.length === 0) return;

  const posicion = entrada.length;

  entrada = entrada.slice(0, -1);

  const casilla = document.getElementById("d" + posicion);

  if (casilla) {
    casilla.textContent = "_";
  }

}


function comprobar() {

  const error = document.getElementById("error");

  console.log("Número introducido:", entrada);

  if (entrada.length < 8) {

    error.textContent = "Completa la fecha ♡";

    return;

  }


  if (entrada === "11102025") {

    error.textContent = "";

    const bloqueo = document.getElementById("bloqueo");
    const pagina = document.getElementById("pagina");
    const musica = document.getElementById("musica");


    // Mostrar la página

    pagina.style.display = "block";


    // Reproducir música

    if (musica) {

      musica.volume = 0.6;

      musica.play().catch(function (error) {

        console.log("El navegador bloqueó la reproducción automática.");

      });

    }


    // Animación de entrada

    setTimeout(function () {

      bloqueo.classList.add("ocultar");

    }, 100);


    // Quitar pantalla de bloqueo

    setTimeout(function () {

      bloqueo.style.display = "none";

    }, 1500);


    crearCorazones();


  } else {

    error.textContent = "La fecha no es correcta ♡";


    const caja = document.querySelector(".caja");

    if (caja) {

      caja.animate(
        [
          { transform: "translateX(0)" },
          { transform: "translateX(-8px)" },
          { transform: "translateX(8px)" },
          { transform: "translateX(-5px)" },
          { transform: "translateX(5px)" },
          { transform: "translateX(0)" }
        ],
        {
          duration: 400
        }
      );

    }


    setTimeout(function () {

      entrada = "";

      for (let i = 1; i <= 8; i++) {

        const casilla =
          document.getElementById("d" + i);

        if (casilla) {

          casilla.textContent = "_";

        }

      }

    }, 700);

  }

}


function crearCorazones() {

  setInterval(function () {

    const corazon =
      document.createElement("div");

    corazon.className = "corazon";

    corazon.textContent = "♡";

    corazon.style.left =
      Math.random() * 100 + "vw";

    corazon.style.fontSize =
      (15 + Math.random() * 20) + "px";

    document.body.appendChild(corazon);


    setTimeout(function () {

      corazon.remove();

    }, 7000);

  }, 900);

}
