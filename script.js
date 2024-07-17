// Arrays con las reglas de encriptación y desencriptación
let letraOriginal = ['e', 'i', 'a', 'o', 'u'];
let letraEncriptada = ['enter', 'imes', 'ai', 'ober', 'ufat'];

// Función para encriptar el texto usando arrays
function encriptarTexto(texto) {
    let textoEncriptado = texto;
    for (let i = 0; i < letraOriginal.length; i++) {
        let expresionRegular = new RegExp(letraOriginal[i], "g");
        textoEncriptado = textoEncriptado.replace(expresionRegular, letraEncriptada[i]);
    }
    return textoEncriptado;
}

// Función para desencriptar el texto usando arrays
function desencriptarTexto(texto) {
    let textoDesencriptado = texto;
    for (let i = 0; i < letraEncriptada.length; i++) {
        let expresionRegular = new RegExp(letraEncriptada[i], "g");
        textoDesencriptado = textoDesencriptado.replace(expresionRegular, letraOriginal[i]);
    }
    return textoDesencriptado;
}

// Función para validar el texto
function validarTexto(texto) {
    let expresionRegular = /^[a-z\s]+$/;
    return expresionRegular.test(texto);
}

// Función para mostrar alertas
function mostrarAlerta(mensaje) {
    let alerta = document.getElementById('alert');
    alerta.textContent = mensaje;
    alerta.style.display = 'block';
}

// Función para ocultar alertas
function ocultarAlerta() {
    let alerta = document.getElementById('alert');
    alerta.style.display = 'none';
}

// Evento para el botón de encriptar
document.getElementById("btn-encriptar").addEventListener('click', function () {
    let textoEntrada = document.getElementById('input-text').value;

    if (validarTexto(textoEntrada)) {
        ocultarAlerta();
        let textoEncriptado = encriptarTexto(textoEntrada);
        let textoSalida = document.getElementById('output-text');
        textoSalida.style.display = 'block';
        textoSalida.value = textoEncriptado;

        if (textoEncriptado) {
            document.getElementById('placeholder-img').style.display = 'none';
            document.getElementById('btn-copiar').style.display = 'block';
            textoSalida.classList.remove('con-imagen');
        } else {
            document.getElementById('placeholder-img').style.display = 'block';
            document.getElementById('btn-copiar').style.display = 'none';
            textoSalida.classList.add('con-imagen');
        }
    } else {
        mostrarAlerta('El texto contiene caracteres no permitidos. Use solo letras minúsculas sin acentos ni caracteres especiales.');
    }
});

// Evento para el botón de desencriptar
document.getElementById("btn-desencriptar").addEventListener('click', function () {
    let textoEntrada = document.getElementById('input-text').value;

    if (validarTexto(textoEntrada)) {
        ocultarAlerta();
        let textoDesencriptado = desencriptarTexto(textoEntrada);
        let textoSalida = document.getElementById('output-text');
        textoSalida.style.display = 'block';
        textoSalida.value = textoDesencriptado;

        if (textoDesencriptado) {
            document.getElementById('placeholder-img').style.display = 'none';
            document.getElementById('btn-copiar').style.display = 'block';
            textoSalida.classList.remove('con-imagen');
        } else {
            document.getElementById('placeholder-img').style.display = 'block';
            document.getElementById('btn-copiar').style.display = 'none';
            textoSalida.classList.add('con-imagen');
        }
    } else {
        mostrarAlerta('El texto contiene caracteres no permitidos. Use solo letras minúsculas sin acentos ni caracteres especiales.');
    }
});

