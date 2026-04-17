function obtenerColorAleatorio(elemento) {
    const colores = ["red", "blue", "green"];
    const indice = Math.floor(Math.random() * colores.length);
    elemento.style.color = colores[indice];
}