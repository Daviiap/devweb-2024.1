//Etapa 1: Modificar o conteúdo de parágrafos. Se algum dos inputs não estiver preenchido, não modifique o seu respectivo texto.
//Dica01: Utilize a propriedade "textContent" para modificar o texto de um parágrafo.
//Dica02: Utilize a propriedade "value" para recuperar a informação preenchida nos campos de input.
const alterarTextos = () => {
    const text1 = document.getElementById("texto1");
    const text2 = document.getElementById("texto2");
    const text3 = document.getElementById("texto3");

    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    const input3 = document.getElementById("input3");

    const textValue1 = input1.value.trim() || "Texto 1";
    const textValue2 = input2.value.trim() || "Texto 2";
    const textValue3 = input3.value.trim() || "Texto 3";

    input1.value = "";
    input2.value = "";
    input3.value = "";

    text1.textContent = textValue1;
    text2.textContent = textValue2;
    text3.textContent = textValue3;
}

//Etapa 2: Adicionar e remover elementos no final da lista de itens
//Dica01: Utilize o método createElement para criar li
//Dica02: Utilize a propriedade "textContent" do li para modificar o seu conteúdo
//Dica03: Utilize a propriedade "ul.children.length" para saber a quantidade de itens na lista
//Dica04: Utilize a propriedade "ul.appendChild" para adicionar o li na lista
function adicionarItem() {
    const list = document.getElementById("listaItens");
    const listItem = document.createElement("li");

    listItem.textContent = `Item ${list.children.length + 1}`;
    list.appendChild(listItem);
}

//Dica05: Utilize as propriedades "ul.removeChild" e "ul.lastChild" para fazer remoções de li na lista
//Dica06: Lembre-se de só deixar remover se a lista tiver pelo menos um elemento
function removerItem() {
    const list = document.getElementById("listaItens");
    if (list.children.length > 1) {
        list.removeChild(list.lastChild);
    }
}

//Etapa 3: Modificar estilos de inputs do tipo text
//Obrigatório: Uso de callback function para alterar a cor de fundo de todos os inputs
//Dica01: Utilize a propriedade "style.backgroundColor" para modificar a cor de fundo dos inputs
function mudarCorFundo() {
    const inputs = document.querySelectorAll('input[type="text"]');
    const inputColor = document.getElementById("inputCor");

    const color = inputColor.value;
    inputColor.value = "";

    if (color) {
        inputs.forEach(input => {
            input.style.backgroundColor = color;
        });
    }
}

//Etapa 4: Ocultar e Exibir Elementos
//Dica01: Utilize a propriedade "style.display" e o valor da variável estilo para ocultar ou exibir a imagem
function ocultarImagem() {
    const display = 'none';
    modificaDisplayImagem(display);

    const image = document.getElementById("imagem");

    image.style.display = display;
}

function exibirImagem() {
    const display = 'block';
    modificaDisplayImagem(display);

    const image = document.getElementById("imagem");

    image.style.display = display;
}

function modificaDisplayImagem() {

}

//Etapa 5: Mover elementos na página
//Dica01: Utilize apenas as propriedades "box.style.left" e "box.style.top" para fazer a movimentação do elemento
function mover(direcao) {
    const box = document.getElementById('divDeslizavel');
    let left = parseInt(window.getComputedStyle(box).left) || 0;
    let top = parseInt(window.getComputedStyle(box).top) || 0;
    switch (direcao) {
        case 'esquerda':
            left--;
            break;
        case 'direita':
            left++;
            break;
        case 'cima':
            top--;
            break;
        case 'baixo':
            top++;
            break;
    }
    box.style.left = `${left}px`;
    box.style.top = `${top}px`;
}

//Exercício 6: Trocar Classe de Elementos
//Dica01: Utilize a propriedade "p.classList.toggle" para fazer a alternância
function alternarClasse() {
    const p = document.getElementById('classeParagrafo');

    p.classList.toggle('classeAzul');
    p.classList.toggle('classeVermelha');

    const classColor = p.className == "classeAzul" ? "azul" : "vermelha";

    p.textContent = `Este parágrafo é da classe ${classColor}.`;
}

//Exercício 7: Galeria de Imagens com Zoom
//Dica01: Utilize a função replace para substitutir o 100 por 300 no valor de src da imagem
function mostrarImagemMaior(img) {
    const imagemMaior = document.getElementById('imagem-maior');
    imagemMaior.src = img.src.replace("100", "300");
}

// Exercício 8: Validação de Formulário
//Obrigatório: É preciso aplicar estratégias de validação dos valores dos quatro campos do formulário.
//Pelo menos: não aceitar nome vazio, o cpf precisa estar mascarado e com 14 dígitos, 
//o email precisa ter pelo menos um @ e um ponto duas posições após o @ e a senha não deve conter menos que 8 caracteres.
function validarFormulario() {
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const erro = document.getElementById('mensagem-erro');

    const cpfRegex = /[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/;
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!nome) {
        erro.textContent = "invalid value for attribute 'nome'";
        return false;
    }
    if (!cpf || !cpfRegex.exec(cpf)) {
        erro.textContent = "invalid value for attribute 'cpf'";
        return false;
    }
    if (!email || !emailRegex.match(email)) {
        erro.textContent = "invalid value for attribute 'email'";
        return false;
    }
    if (!senha || senha.length < 8) {
        erro.textContent = "invalid value for attribute 'password'";
        return false;
    }

    erro.textContent = '';
    return true;
}

// Exercício 9: Contador Incremental
//Dica01: Utilize a propriedade "textContent" para modificar o texto de um parágrafo.
//Desafio01: Implemente a geração da música "Um Elefante Incomodaa Muita Gente"
//quando o número de versos for maior que 9, a função deve colocar reticência (...) para o caso
//do número de "incomodam" ser maior ou igual a 10.
let contador = 0;
function incrementar() {
    contador++;
    const c = document.getElementById("contador");
    c.textContent = contador;
    if (contador > 0)
        geraMusicaElefante(contador);
}

function decrementar() {
    contador--;
    const c = document.getElementById("contador");
    c.textContent = contador;
    if (contador > 0)
        geraMusicaElefante(contador);
}

function geraMusicaElefante(numVersos) {
    const mus = document.getElementById("paragrafoMusica");
    if (numVersos < 10) {
        mus.textContent = "Um Elefante Incomodaa Muita Gente ".repeat(numVersos - 1);
        mus.textContent += "Um Elefante Incomodaa Muita Gente";
    } else {
        mus.textContent = "Um Elefante Incomodaa Muita Gente ".repeat(9);
        mus.textContent += "...";
    }
}

// Exercício 10: Filtrar Itens de uma Lista com callback e arrow function
//Dica01: Utilize a propriedade "textContent" para modificar o texto de um parágrafo.
//Desafio02: Transforme a lista de itens em objetos (professor: nome, area, laboratorio, disciplina) e utilize o filtro para atuar considerando todos os atributos do projeto.
function filtrarItens() {
    const filtro = document.getElementById('filtro').value.toLowerCase();
    const itens = document.getElementById('lista-professores').getElementsByTagName('li');

    Array.from(itens).forEach(item => {
        const itemText = item.textContent || item.innerText;
        const itemJSON = JSON.parse(itemText);

        if (itemJSON.professor.nome.toLowerCase().indexOf(filtro) > -1 ||
            itemJSON.professor.area.toLowerCase().indexOf(filtro) > -1 ||
            itemJSON.professor.laboratorio.toLowerCase().indexOf(filtro) > -1 ||
            itemJSON.professor.disciplina.toLowerCase().indexOf(filtro) > -1) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    });
}
