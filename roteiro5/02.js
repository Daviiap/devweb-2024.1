const deu_ruim = "Eu odeio o prof. Florovsky!";
const deu_bom = "Muito bem! O aluno está apto a apresentar até o natal!";
const mais_ou_menos = "O trabalho está muito ruim!";
const apresentado = "TCC Apresentado!";
const nao_deu = "Não deu! Só no próximo ano agora.";

let entregue = 22;
let data_final = 23;

let diff = data_final - entregue;

if(diff >= 3) {
    console.log(deu_bom)
} else if (diff < 3 && diff >= 0) {
    console.log(mais_ou_menos)
    if(data_final + 2 <= 24 ) {
        console.log(apresentado)
    } else {
        console.log(nao_deu)
    }
} else {
    console.log(deu_ruim)
}
