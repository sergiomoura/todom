let tarefas = [
    {
        id: 1,
        texto: "Escovar os dentes",
        prioridade: 3,
        feito: true
    },
    {
        id: 2,
        texto: "Gravar realização de desafio",
        prioridade: 1,
        feito: true
    },
    {
        id: 3,
        texto: "Fazer almoço",
        prioridade: 2,
        feito: false
    },
    {
        id: 4,
        texto: "Pagar escolas",
        prioridade: 3,
        feito: false
    }
]

const render = (tarefas) => {

    // Capturar o elemento que contém a lista de tarefas
    let table = document.getElementById("table");

    // Alternativa para o document.getElementById("table");
    // table = document.querySelector("#table");

    // Limpar a lista
    table.innerText = "";

    // Criando a lista de tarefas
    for (const tarefa of tarefas) {

        // Criando uma linha de tabela
        let row = document.createElement('tr');

        // Criar o input checkbox
        let checkbox = document.createElement('input');
        checkbox.setAttribute("type","checkbox");

        // Criar a célula que vai conter o checkbox
        let tdCheck = document.createElement('td');
        tdCheck.appendChild(checkbox);

        // Adicionar esse tdCheck à row
        row.appendChild(tdCheck);

        // Criar a td de texto
        let tdTexto = document.createElement('td');
        tdTexto.innerText = tarefa.texto;
        row.appendChild(tdTexto);

        // Criar td de ações
        let tdAcoes = document.createElement('td');
        let i = document.createElement('i');
        i.className = "material-icons";
        i.innerText = "delete";
        tdAcoes.appendChild(i);
        row.appendChild(tdAcoes);

        // Adicionar a linha a tabela
        table.appendChild(row);

    }

}

/**
 * Criar função create(texto,prioridade) que recebe um texto e prioridade como parâmetros
 * Essa função deve retornar um objeto literal com os seguintes campos
 * texto: com o texto passado por parâmetro
 * prioridade: com base na prioridade passada como parâmetro
 * feito: false
 */
 const create = (texto,prioridade) => {
    return {
        id:tarefas[tarefas.length - 1].id + 1,
        texto,
        prioridade,
        feito: false
    }
 }


// Capturar elementos importantes da página
let form = document.getElementById('form'); // Capturar o form

// FORMA 1 = = = = = = = = = = = =
// form.onsubmit = (evt) => {
//     console.log("teste");
// }

// FORMA 2 = = = = = = = = = = = =
form.addEventListener('submit',(evt) => {

    // Evitar o comportamento padrão de um form
    evt.preventDefault();

    // Capturar o texto digitado pelo usuário
    let texto = document.getElementById("tf_2do").value;

    // Verificar se existe prioridade settada nesse texto
    let strInicio = texto.substr(0,3);
    let prioridade;
    switch (strInicio) {
        case '#1 ':
            prioridade = 1;
            texto = texto.slice(3);
            break;

        case '#2 ':
            prioridade = 2;
            texto = texto.slice(3);
            break;
        
        case '#3 ':
            prioridade = 3;
            texto = texto.slice(3);
            break;
    
        default:
            prioridade = 1;
            break;
    }

    // Criar o objeto de tarefa sabendo o texto e a prioridade
    let tarefa = create(texto,prioridade);

    // Adicionar o objeto tarefa ao array de tarefas
    tarefas.push(tarefa);

    // Renderizar a minha lista novamente
    render(tarefas);

    // Lipar o campo de texto
    document.getElementById("tf_2do").value = ""; 

});

render(tarefas);
