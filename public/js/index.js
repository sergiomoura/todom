// Declarando variável global para armazenar tarefas;
let tarefas = [];

// Array de prioridades
// const prioridades = ['baixa','média','alta'];
const prioridades = {1:'baixa',2:'média',3:'alta'}
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
        if(tarefa.feito){
            row.className = "done";
            // row.classList.add("done");
        }

        // Criar o input checkbox
        let checkbox = document.createElement('input');
        checkbox.setAttribute("type","checkbox");
        checkbox.checked = tarefa.feito;
        checkbox.id = "chk_" + tarefa.id;
        checkbox.addEventListener('click', onCheckClick);

        // Criar a célula que vai conter o checkbox
        let tdCheck = document.createElement('td');
        tdCheck.appendChild(checkbox);

        // Adicionar esse tdCheck à row
        row.appendChild(tdCheck);

        // Criar a td de texto
        let tdTexto = document.createElement('td');
        tdTexto.innerText = tarefa.texto;
        row.appendChild(tdTexto);

        // Criar a td da prioridade
        let tdPrioridade = document.createElement('td');
        tdPrioridade.innerText = prioridades[tarefa.prioridade];
        row.appendChild(tdPrioridade);

        // Criar td de ações
        let tdAcoes = document.createElement('td');
        let i = document.createElement('i');
        i.className = "material-icons";
        i.innerText = "delete";
        i.addEventListener('click', onDeleteClick);
        i.setAttribute("id", tarefa.id);
        tdAcoes.appendChild(i);
        row.appendChild(tdAcoes);

        // Adicionar a linha a tabela
        table.appendChild(row);

    }

}

const onDeleteClick = (evt) => {
    
    // Capturando id da tarefa a ser removida;
    let id = Number(evt.target.id);

    // Confirmar a exclusão
    if(!window.confirm("Tem certeza que deseja excluir a tarefa?")){

        // Usuário clicou em não. Abortando.
        return;

    }
    
    // Remover a tarefa do array
    destroy(id).then(
        () => render(tarefas)
    )

    // Renderizar a lista novamente
    
    
}

const onCheckClick = evt => {

    // capturando o id da tarefa clicada
    let id = Number(evt.target.id.replace('chk_',''));

    // Levantar tarefa do id capturado
    let tarefa = tarefas.find(t => t.id == id);

    // alterar o campo feito
    tarefa.feito = !tarefa.feito;

    // Alterando a classe da tr que contem o td que contem o checkbox;
    evt.target.parentNode.parentNode.classList.toggle('done');
    
}

/**
 * Criar função create(texto,prioridade) que recebe um texto e prioridade como parâmetros
 * Essa função deve retornar um objeto literal com os seguintes campos
 * texto: com o texto passado por parâmetro
 * prioridade: com base na prioridade passada como parâmetro
 * feito: false
 */
 const create = async (texto, prioridade) => {

    let response = await fetch(
        "/tarefas",
        {
            method:"POST",
            body: JSON.stringify({texto,prioridade}),
            headers: {
                authorization:`bearer ${sessionStorage.getItem('token')}`,
                "Content-Type":"application/json"
            }
        }
    )

    let tarefa = await response.json();

    // retornando a nova tarefa
    return tarefa;

 }

 /**
  * Criar uma função destroy que recebne o id de uma tarefa como parâmetro
  * e remove essa tarefa do array  * 
  */

const destroy = async (id) => {
    /**
     * Altere essa função para que ela dispare uma requisição delete
     * para a rota /tarefas/:id e, assim que obtiver a confirmação da
     * deleção da tarefa, remover a tarefa do front.
     */

    let response = await fetch(`/tarefas/${id}`, {
        method: "DELETE",
        headers:{
            "Authorization": `bearer ${sessionStorage.getItem('token')}`
        }
    });

    let msg = response.json();

    if(msg){
        tarefas = tarefas.filter(t => t.id != id);
    }

}

// Capturar elementos importantes da página
let form = document.getElementById('form'); // Capturar o form

// FORMA 1 = = = = = = = = = = = =
// form.onsubmit = (evt) => {
//     console.log("teste");
// }

// FORMA 2 = = = = = = = = = = = =

// Crio a função:
const onFormSubmit = async (evt) => {

    // Evitar o comportamento padrão de um form
    evt.preventDefault();
    
    // Capturar o texto digitado pelo utextosuário
    let texto = document.getElementById("tf_2do").value;

    // Testando se o texto é vazio 
    if (texto.trim() == '') {
        return;
    }

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
    let tarefa = await create(texto,prioridade);

    // Adicionar o objeto tarefa ao array de tarefas
    tarefas.push(tarefa);

    // Renderizar a minha lista novamente
    render(tarefas);

    // Lipar o campo de texto
    document.getElementById("tf_2do").value = ""; 

}

// Associo o evento à função
form.addEventListener('submit', onFormSubmit);

render(tarefas);
