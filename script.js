// Arrays con las reglas de encriptación y desencriptación
let letraOriginal = ['e', 'i', 'a', 'o', 'u'];
let letraEncriptada = ['enter', 'imes', 'ai', 'ober', 'ufat'];

// Función para encriptar el texto usando arrays
function encriptarTexto(texto) {
    // 1. Se define una variable llamada "textoEncriptado" y se le asigna el valor del texto original que recibe la función como parámetro.
    let textoEncriptado = texto;
    
    // 2. Se inicia un bucle "for" que recorrerá el array "letraOriginal" desde la primera posición (índice 0) hasta la última.
    for (let i = 0; i < letraOriginal.length; i++) {
        // 3. En cada iteración, se crea una nueva expresión regular usando "RegExp". 
        //    Esta expresión busca todas las ocurrencias de una letra específica del array "letraOriginal".
        //    El parámetro "g" indica que debe buscarse esa letra en todo el texto, no solo en la primera coincidencia.
        let expresionRegular = new RegExp(letraOriginal[i], "g");
        
        // 4. Usando el método "replace", se sustituye cada aparición de la letra encontrada (usando la expresión regular)
        //    por el texto correspondiente en el array "letraEncriptada". 
        //    El texto encriptado se va almacenando en la variable "textoEncriptado".
        textoEncriptado = textoEncriptado.replace(expresionRegular, letraEncriptada[i]);
    }
    
    // 5. Después de que todas las letras han sido sustituidas, la función retorna el texto completamente encriptado.
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
    let alerta = document.getElementById('alerta');
    alerta.textContent = mensaje;
    alerta.style.display = 'block';
}

// Función para ocultar alertas
function ocultarAlerta() {
    let alerta = document.getElementById('alerta');
    alerta.style.display = 'none';
}

// Función para cambiar el color de fondo del botón temporalmente
function cambiarColorTemporalmente(boton, colorOriginal, colorTemporal) {
    boton.style.backgroundColor = colorTemporal;
    setTimeout(() => {
        boton.style.backgroundColor = colorOriginal;
    }, 200);
}

// Evento para el botón de encriptar
document.getElementById("btn-encriptar").addEventListener('click', function (event) {
    let textoEntrada = document.getElementById('input-text').value;

    if (validarTexto(textoEntrada)) {
        ocultarAlerta();
        let textoEncriptado = encriptarTexto(textoEntrada);
        let textoSalida = document.getElementById('output-text');
        textoSalida.style.display = 'block';
        textoSalida.value = textoEncriptado;

        document.getElementById('input-text').value = '';

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
document.getElementById("btn-desencriptar").addEventListener('click', function (event) {
    let textoEntrada = document.getElementById('input-text').value;

    if (validarTexto(textoEntrada)) {
        ocultarAlerta();
        let textoDesencriptado = desencriptarTexto(textoEntrada);
        let textoSalida = document.getElementById('output-text');
        textoSalida.style.display = 'block';
        textoSalida.value = textoDesencriptado;

        document.getElementById('input-text').value = '';

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

// Evento para el botón de copiar
document.getElementById("btn-copiar").addEventListener('click', function () {
    let textoSalida = document.getElementById('output-text');

    // Usando la API de Portapapeles para copiar texto
    navigator.clipboard.writeText(textoSalida.value)
        .then(() => {
            // Puedes mostrar una notificación o realizar alguna acción después de copiar
            console.log('Texto copiado al portapapeles');
        })
        .catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
});
