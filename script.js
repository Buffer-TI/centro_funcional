var centrosFuncionais = {
    "BLM QB MT": "após conclusão da atividade.",
    "BHE ES MT": "após conclusão da atividade.",
    "BRU AL AT": "após conclusão da atividade.",
    "RPO TB AT": "após conclusão da atividade.",
    "BRU AL MT": "após conclusão da atividade.",
    "BHE ES AT": "após conclusão da atividade.",
    "GVS JK MT": "após conclusão da atividade.",
    "JFA JC MT": "após conclusão da atividade.",
    "CAS BC AT": "após conclusão da atividade.",
    "SJC EB AT": "após conclusão da atividade.",
    "SOC PH AT": "após conclusão da atividade.",
    "ULA MA MT": "após conclusão da atividade.",
    "URA FR MT": "após conclusão da atividade.",
    "RPO TB AT": "após conclusão da atividade.",
    "SJC EB MT": "após conclusão da atividade.",
    "PPE CM MT": "após conclusão da atividade.",
    "SJC EB MD": "após conclusão da atividade.",
    "SRR QN MT": "após conclusão da atividade.",
    "RPO TB MT": "após conclusão da atividade.",
    "MNS EM MT": "após conclusão da atividade.",
    "MNS LM MD": "após conclusão da atividade.",
    "RJO AM MT": "em conjunto com a atividade.",
    "VGA TG MT": "em conjunto com a atividade.",
    "SRR QN AT": "em conjunto com a atividade."
    // Adicionar todas as siglas e estações aqui
    };

function buscarEstacao() {
var sigla = document.getElementById("sigla").value.toUpperCase().trim(); // Obtém a sigla inserida pelo usuário em letras maiúsculas
var estacaoLabel = document.getElementById("resultado"); // Obtém o elemento HTML onde será exibido o resultado

// Verifica se a sigla existe no dicionário
if (centrosFuncionais.hasOwnProperty(sigla)) {
var estacao = centrosFuncionais[sigla]; // Obtém o nome da estação correspondente à sigla
estacaoLabel.textContent = "Será executado " + estacao; // Exibe o resultado no elemento HTML
} else {
estacaoLabel.textContent = "Sigla não encontrada"; // Exibe mensagem de erro caso a sigla não seja encontrada
}
}

function limparDados() {
document.getElementById("sigla").value = ""; // Limpa o campo de input
document.getElementById("resultado").textContent = ""; // Limpa o resultado anterior
}

document.getElementById("sigla").addEventListener("keydown", function(event) {
if (event.key === "Enter") {
event.preventDefault(); // Impede o comportamento padrão do Enter de inserir uma quebra de linha
buscarEstacao();
}
});

document.addEventListener("keydown", function(event) {
if (event.key === "Escape") {
event.preventDefault(); // Impede o comportamento padrão do ESC de fechar a janela
limparDados();
}
});
