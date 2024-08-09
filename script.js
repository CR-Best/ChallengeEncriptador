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
// Esta función toma un texto como argumento y verifica si cumple con ciertas reglas usando una expresión regular.
function validarTexto(texto) {
    
    // Declaración de la expresión regular
    // Aquí se define una expresión regular que solo permite letras minúsculas (de la 'a' a la 'z') y espacios.
    // ^ indica el inicio de la cadena, $ indica el final, y + significa "uno o más de lo que está entre corchetes".
    let expresionRegular = /^[a-z\s]+$/;

    // Validación del texto usando la expresión regular
    // El método test() de la expresión regular comprueba si el texto cumple con el patrón definido.
    // Si cumple, devuelve true; si no, devuelve false.
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

// Evento para el botón de encriptar
// Obtiene el elemento con el id "btn-encriptar" y agrega un evento 'click'
// Esto significa que cuando el botón con id "btn-encriptar" sea presionado, se ejecutará la función anónima que sigue.
document.getElementById("btn-encriptar").addEventListener('click', function (event) {

    // Obtiene el valor del elemento con el id "input-text" (donde el usuario ingresa texto).
    let textoEntrada = document.getElementById('input-text').value;

    // Verifica si el texto ingresado es válido usando la función validarTexto.
    if (validarTexto(textoEntrada)) {
        
        // Si el texto es válido, oculta cualquier alerta que pudiera estar visible.
        ocultarAlerta();

        // Encripta el texto ingresado usando la función encriptarTexto.
        let textoEncriptado = encriptarTexto(textoEntrada);

        // Obtiene el elemento donde se mostrará el texto encriptado.
        let textoSalida = document.getElementById('output-text');

        // Hace visible el campo de texto de salida (donde se mostrará el texto encriptado).
        textoSalida.style.display = 'block';

        // Establece el valor del campo de texto de salida al texto encriptado.
        textoSalida.value = textoEncriptado;

        // Limpia el campo de entrada de texto.
        document.getElementById('input-text').value = '';

        // Si hay un texto encriptado válido...
        if (textoEncriptado) {
            
            // Oculta la imagen de marcador de posición.
            document.getElementById('placeholder-img').style.display = 'none';
            
            // Hace visible el botón "copiar".
            document.getElementById('btn-copiar').style.display = 'block';

            // Remueve la clase 'con-imagen' del campo de salida, posiblemente para ajustar el diseño.
            textoSalida.classList.remove('con-imagen');
        } else {
            // Si no hay texto encriptado, muestra la imagen de marcador de posición.
            document.getElementById('placeholder-img').style.display = 'block';
            
            // Oculta el botón "copiar".
            document.getElementById('btn-copiar').style.display = 'none';

            // Añade la clase 'con-imagen' al campo de salida, posiblemente para ajustar el diseño.
            textoSalida.classList.add('con-imagen');
        }
    } else {
        // Si el texto no es válido, muestra una alerta indicando que el texto contiene caracteres no permitidos.
        mostrarAlerta('El texto contiene caracteres no permitidos o está vacio. Use solo letras minúsculas sin acentos ni caracteres especiales.');
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

    // Selecciona el texto en el campo de salida
    textoSalida.select();
    textoSalida.setSelectionRange(0, textoSalida.value.length); // Para asegurar la selección en dispositivos móviles

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
