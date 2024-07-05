
const pessoa = {
    nome: "João",
    peso: 70,     
    altura: 1.75  
};


function calcularIMC(pessoa) {
    const imc = pessoa.peso / (pessoa.altura * pessoa.altura);
    return imc.toFixed(2); 
}


const imcCalculado = calcularIMC(pessoa);

console.log(`O IMC de ${pessoa.nome} é: ${imcCalculado}`);
