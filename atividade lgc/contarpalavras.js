function contarPalavrasUnicas(frase) {
    const palavras = frase.toLowerCase().match(/\b\w+\b/g);
    
    const palavrasUnicas = new Set(palavras);
    
    return palavrasUnicas.size;
}

const frase = "Esta é uma frase com algumas palavras repetidas, mas só contará as únicas.";
const numeroPalavrasUnicas = contarPalavrasUnicas(frase);
console.log("Número de palavras únicas na frase:", numeroPalavrasUnicas);
