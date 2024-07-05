function Verificar(n1) {
    if (n1 < 0) {
        return "negativo";
    } else if (n1 === 0) {
        return "zero";
    } else {
        return "positivo";
    }
}

let resultado = Verificar(2);

if (resultado === "negativo") {
    console.log("negativo");
} else if (resultado === "zero") {
    console.log("zero");
} else if (resultado === "positivo") {
    console.log("positivo");
}