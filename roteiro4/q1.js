const initial_array = [1, 60, 232, 7, 25, 76, 29, 74, 92];

const lista = initial_array.filter(val => val > 60 && val < 300);

let somatorio = 0;

lista.forEach(val => somatorio += val);

console.log(`A lista dos valores maiores que 60 é: [${lista}]. A soma dos elementos da lista é: ${somatorio}.`);
