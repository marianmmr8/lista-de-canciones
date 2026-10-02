//lista de canciones 

const canciones[
    "Luz - Rosalia",
    "Por la raja de tu falda - Estopa",
    "Por tí - Natos y Waors",
    "Gasolina - Daddy Yanke",
    "Friends - Solomun"
];

//elementos de la pagina
const contador = document.getElementById("contador");
const  casillaNueva = document.getElementById("nueva");
const  botonAñadir= document.getElementById("añadir");
const  casillaBuscar= document.getElementById("buscar");
const  mensaje= document.getElementById("mensaje");
const lista = document.getElementById("lista");

// muestra todas las canciones y cuantas hay


function pintarLista() {
    lista.innerHTML = ""
    for (let i = 0 ; i < canciones.length; i++){
        const elemento.textContent = canciones[i];
        lista.append(elemento);
        }
    contador.textContent = canciones.length + "canciones";
}

function añadir({
    const titulo = casillaNueva.value.trim();
    if (titulo === "") {
        mensaje.textContent = "Escribe el titulo de la cancion";
        return;
    }
    
})
