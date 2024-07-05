function gerarNumeroAleatorio(min, max) {
   
    return Math.floor(Math.random() * (max - min) + min);
}

function iniciarGeracaoAleatoria(min, max, intervalo) {
    setInterval(() => {
        const numeroAleatorio = gerarNumeroAleatorio(min, max);
        console.log("Número aleatório: " + numeroAleatorio);
    }, intervalo);
}


iniciarGeracaoAleatoria(1, 100, 2000);
