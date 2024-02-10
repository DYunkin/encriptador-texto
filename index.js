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
        parrafo.textContent = "Ingres el texto que desees encriptar o desencriptar"
        alert("Debes ingresar algún texto");
    }
}

