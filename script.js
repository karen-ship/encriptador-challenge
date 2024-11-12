



function pantallaResultado(){
    let preCambio = document.querySelector('.pre-ejecucion');
    let postCambio = document.querySelector('.post-ejecucion');

    let estilos = window.getComputedStyle(preCambio);

    if(estilos.display == "flex"){
        preCambio.style.setProperty("display", "none");
        postCambio.style.setProperty("display", "flex");
    }

    return;
}

function pantallaInicial(){
    let preCambio = document.querySelector('.pre-ejecucion');
    let postCambio = document.querySelector('.post-ejecucion');
    
    postCambio.style.setProperty("display", "none");
    preCambio.style.setProperty("display", "flex");

    return;
}



function encriptar() {
    let texto = recuperarEntrada();
    let encriptado = texto.replace(/e/gi, "enter")
                          .replace(/i/gi, "imes")
                          .replace(/a/gi, "ai")
                          .replace(/o/gi, "ober")
                          .replace(/u/gi, "ufat");
    mostrarResultado(encriptado);

    return;
}

function desencriptar() {
    let texto = recuperarEntrada();
    let desencriptado = texto.replace(/enter/gi, "e")
                             .replace(/imes/gi, "i")
                             .replace(/ai/gi, "a")
                             .replace(/ober/gi, "o")
                             .replace(/ufat/gi, "u");
    mostrarResultado(desencriptado);

    return;
}

function recuperarEntrada(){
    let entrada = document.getElementById('entrada').value;
    return entrada;
}


function mostrarResultado(texto){
    let valor = texto;
    let salida = document.getElementById('salida');

    if (valor == '') {
        pantallaInicial();
    }else{
        pantallaResultado();
        salida.value = valor;
    }
    
    return;
}

function copiarTexto(){
    let textarea = document.getElementById('salida');
    textarea.select();
    textarea.setSelectionRange(0, 99999); // Para móviles

    document.execCommand("copy");
}