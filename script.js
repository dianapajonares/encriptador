const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const div = document.getElementById(".msj");
const copiar = document.getElementById("copy");

function btnEncriptar() {
    const txtEncriptado = encriptar(textArea.value);
    mensaje.value = txtEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    msj.style.display = "none";
    copy.style.display = "block";

}

function btnDesencriptar() {
    const txtEncriptado = desencriptar(textArea.value);
    mensaje.value = txtEncriptado;
    textArea.value = "";
}


function copiar(){
    mensaje.ariaSelected();
    
}

function encriptar(stringEncriptador) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    console.table(matrizCodigo)
    stringEncriptador = stringEncriptador.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptador.includes(matrizCodigo[i][0])) {
            stringEncriptador = stringEncriptador.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);

        }

    }
    return stringEncriptador
}

function desencriptar(stringDesencriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    console.table(matrizCodigo)
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);

        }

    }
    return stringDesencriptado
}


