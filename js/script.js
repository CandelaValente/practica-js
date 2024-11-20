//header


document.getElementById("header").innerHTML = `
    <header>
        <nav>
            <ul>
                <li><a href="./calculadora.html">calculadora</a></li>
                <li><a href="./frases.html">frases</a></li>
                <li><a href="./tareas.html">tareas</a></li>
                <li><a href="./cards.html">cards</a></li>
                
            </ul>
        </nav>
    </header>
    `;


//calculadora simple:

document.getElementById("calcular").addEventListener("click", () => {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operacion = document.getElementById("operacion").value;

    let resultado;
    if (operacion === "suma") {
        resultado = num1 + num2;
    } else if (operacion === "resta") {
        resultado = num1 - num2;
    } else if (operacion === "multiplicacion") {
        resultado = num1 * num2;
    } else if (operacion === "division") {
        resultado = num1 / num2;
    }
    document.getElementById("resultado").textContent = `Resultado: ${resultado}`;

    console.log(resultado);
});


//generador de frases:

const frases =
    ["Tu puedes ser lo que quieras ser, matel",
        "Bañando a Lulu, con su bañera musical",
        "Jugá al sapo toto y divertite a lo loco, su lengua es de espuma como ella no hay ninguna",
        "Yo solo duermo con canon canon es mi colchon",
        "dormir, soñar, con canon con canon me renuevo con canon con canon duermo yo"
    ];

document.getElementById("generar").addEventListener("click", () => {
    const aleatoria = Math.floor(Math.random() * frases.length);
    document.getElementById("frase").textContent = frases[aleatoria];

});

// lista de tareas:

const input = document.getElementById("tareaInput");
const boton = document.getElementById("agregarTarea");
const lista = document.getElementById("listaTareas");

boton.addEventListener("click", () => {
    if (input.value.trim() !== "") {
        const nuevaTarea = document.createElement("li");
        nuevaTarea.textContent = input.value;

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "eliminar";
        botonEliminar.style.marginLeft = "10px";
        botonEliminar.addEventListener("click", () => {
            lista.removeChild(nuevaTarea);
        });

        nuevaTarea.appendChild(botonEliminar);
        lista.appendChild(nuevaTarea);
        input.value = "";
    } else {
        alert("Por favor, escribe una tarea.");
    }

});

// generador de cards:


const botonCard = document.getElementById("agregarCard");
const container = document.getElementById("container");

botonCard.addEventListener("click", () => {
    if (nombre && edad && descripcion) {
        const nombre = document.getElementById("nombre").value;
        const edad = document.getElementById("edad").value;
        const descripcion = document.getElementById("descripcion").value;

        const nuevaCard = document.createElement("div");
        nuevaCard.className = "card";
        nuevaCard.innerHTML = `
        <h3>${nombre}</h3>
        <p>Edad: ${edad}</p>
        <p>${descripcion}</p>
        `;
        document.getElementById("container").appendChild(nuevaCard);
    } else {
        alert("Por favor, completa todos los campos.");
    }



});


/*
calculadora más completa de ejemplo:

document.getElementById("calcular").addEventListener("click", () => {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operacion = document.getElementById("operacion").value;
   
    console.log("Número 1:", num1); // Muestra el primer número
    console.log("Número 2:", num2); // Muestra el segundo número
    console.log("Operación seleccionada:", operacion); // Muestra la operación
   
    let resultado;
    if (operacion === "suma") {
      resultado = num1 + num2;
      console.log("Resultado de la suma:", resultado); // Resultado de la suma
    } else if (operacion === "resta") {
      resultado = num1 - num2;
      console.log("Resultado de la resta:", resultado); // Resultado de la resta
    } else if (operacion === "multiplicacion") {
      resultado = num1 * num2;
      console.log("Resultado de la multiplicación:", resultado); // Resultado de la multiplicación
    } else if (operacion === "division") {
      if (num2 === 0) {
        console.log("Error: División por cero"); // Validación de división por cero
        resultado = "Error: No se puede dividir entre 0";
      } else {
        resultado = num1 / num2;
        console.log("Resultado de la división:", resultado); // Resultado de la división
      }
    }
   
    document.getElementById("resultado").textContent = `Resultado: ${resultado}`;
  });*/