function quantasvezes(letra,palavra){
    contadordeletras = 0;

    const palavraminuscula = palavra.toLowerCase();
    const letraminuscula = letra.toLowerCase();

    for(let i = 0; i < palavraminuscula.length; i++){
    if (palavraminuscula[i] === letraminuscula){
        contadordeletras++
        }
    }
}
    const palavra = "odeio";
    const letra = "o";
    resultado = quantasvezes(letra, palavra);

    console.log ("na palavra: " + palavra + " a letra " +  letra + " aparece " + contadordeletras + " vezes ");