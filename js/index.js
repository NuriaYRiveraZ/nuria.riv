// Array con frases relacionadas a tu app tipo Instagram
const phrases = [
    "tus mejores momentos",
    "fotos increíbles",
    "historias únicas",
    "tus recuerdos favoritos",
    "tu vida en imágenes"
];

// Función para cambiar el contenido del span
function changeContent() {
    const span = document.querySelector('.changecontent');
    let i = 0;

    setInterval(() => {
        span.textContent = phrases[i];
        i = (i + 1) % phrases.length;
    }, 1000); // Cambia cada 2 segundos
}

// Llama a la función cuando la página se haya cargado
document.addEventListener('DOMContentLoaded', changeContent);
