function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let munieco = document.getElementById("munieco");
    
    let textoCifrado = texto
            .replace(/e/gi, "enter")
            .replace(/i/gi, "imes")
            .replace(/a/gi, "ai")
            .replace(/o/gi, "ober")
            .replace(/u/gi, "ufat");

    if (texto.length !=0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent ="";
        munieco.src = "./img/Muñeco.png"; //cambier imagen muñeco.pgn
    } else{
        munieco.src = "./img/Muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje fué encontrado"
        parrafo.textContent = "Ingresa el texto que desees encriptar o desencriptar"
        swal("Sorry!", "debes ingresar un texto para seguir", "success");
    }
}

function desencriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let munieco = document.getElementById("munieco");
    let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

    if (texto.length !=0){
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent ="";
        munieco.src = "./img/Muñeco.png"; //cambier imagen muñeco.pgn
    } else {
        munieco.src = "./img/Muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje fué encontrado"
        parrafo.textContent = "Ingresa el texto que desees encriptar o desencriptar"
        swal("Sorry!", "debes ingresar un texto para seguir", "warning");
    }
}

