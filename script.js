function calcularTempoDeNamoro() {
    const dataInicio = new Date("2024-04-13");
    const hoje = new Date();
    
    const diferencaTempo = hoje - dataInicio;
    const dias = Math.floor(diferencaTempo / (1000 * 60 * 60 * 24));
    const anos = Math.floor(dias / 365);
    const meses = Math.floor((dias % 365) / 30);
    const diasRestantes = (dias % 365) % 30;

    document.getElementById("tempoDeNamoro").innerText = 
        `${anos} anos, ${meses} meses e ${diasRestantes} dias ❤️`;
}

function atualizarContagemRegressiva() {
    const hoje = new Date();
    const anoAtual = hoje.getFullYear();
    let proximoAniversario = new Date(anoAtual, 3, 13);

    if (hoje > proximoAniversario) {
        proximoAniversario = new Date(anoAtual + 1, 3, 13);
    }

    const diferenca = proximoAniversario - hoje;
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    document.getElementById("contagemRegressiva").innerText = 
        `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos ⏳`;

    setTimeout(atualizarContagemRegressiva, 1000);
}

function mudarCorDeFundo() {
    const cores = ["#ffe6f2", "#ffccff", "#ff99cc", "#ff66b2", "#ff3385"];
    const indice = new Date().getDate() % cores.length;
    document.body.style.backgroundColor = cores[indice];
}

document.getElementById("surpresa").addEventListener("click", function() {
    document.getElementById("mensagemSurpresa").classList.toggle("hidden");
});

calcularTempoDeNamoro();
atualizarContagemRegressiva();
mudarCorDeFundo();
