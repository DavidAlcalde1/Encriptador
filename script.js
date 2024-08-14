// Obtener los elementos del DOM
const textArea = document.querySelector('.text-area');
const messageArea = document.querySelector('.mensaje');
const btnEncrypt = document.querySelector('.btn-encrypt');
const btnDecrypt = document.querySelector('.btn-decrypt');
const btnCopy = document.querySelector('.btn-copy');
const nonMessage = document.querySelector('.noMessage');


// Función para encriptar el texto
function encryptText(text) {
    const rules = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };
    return text.replace(/[eioua]/g, match => rules[match]);
}

// Función para desencriptar el texto
function decryptText(text) {
    const rules = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };
    return text.replace(/enter|imes|ai|ober|ufat/g, match => rules[match]);
}


// Agregar evento para el botón de encriptar
btnEncrypt.addEventListener('click', () => {
    const text = textArea.value;
    const encryptedText = encryptText(text);
    messageArea.value = encryptedText;
    messageArea.style.backgroundImage = 'none'; // Ocultar la imagen de fondo
    nonMessage.style.display = 'none';

});

// Agregar evento para el botón de desencriptar
btnDecrypt.addEventListener('click', () => {
    const text = textArea.value;
    const decryptedText = decryptText(text);
    messageArea.value = decryptedText;
    messageArea.style.backgroundImage = 'none'; // Ocultar la imagen de fondo
    nonMessage.style.display = 'none';
});

// Agregar evento para el botón de copiar
btnCopy.addEventListener('click', () => {
    const textToCopy = messageArea.value;
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            console.log('Texto copiado al portapapeles');
            messageArea.value = ''; 
            nonMessage.style.display = 'flex';
            // messageArea.style.backgroundImage = 'url("images/munieco.png")';
            textArea.value = '';
            if (window.innerWidth > 768) {
                messageArea.style.backgroundImage = 'url("images/munieco.png")'; 
                
            }
            if (window.innerWidth < 768) {
                nonMessage.style.display = 'flex'; // Mostrar el div noMessage en pantallas pequeñas
            }

            

        })
        .catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
});
