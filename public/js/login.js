// Capturar os campos de email, senha e o botão de login
const tfEmail = document.getElementById('email');
const tfSenha = document.getElementById('senha');
const btLogar = document.getElementById('btLogar');

// Crie uma função onBtLogarClick que escreve alguma no console...
const onBtLogarClick = () => {
    
    // Validando dados
    if(tfEmail.value == '' || tfSenha==''){
        alert("Preencha os campos de login e senha");
        return;
    }

    // Executando a função login;
    login(tfEmail.value, tfSenha.value);


}

// Associe uma função onBtLogarClick ao click da botão btLogar
btLogar.addEventListener('click', onBtLogarClick);

// Criar uma função login(email,senha) que deve disparar uma requisição post
// para a rota /login
const login = async (email,senha) => {

    // Capturei a resposta do servidor
    let response = await fetch('/login', {
        method: 'POST',
        body: JSON.stringify({ email: email ,senha: senha }),
        headers: { 'Content-Type': 'application/json' },
    });
    
    // Interpretar essa resposta como json
    let dados = await response.json();

    // Verificando se o login falhou
    if(dados.error){
        exibirErroDeLogin();
        return;
    }


    // Guardar o token no sessionStorage
    sessionStorage.setItem("token", dados.token);

    // Guardar o user no sessionStorage
    sessionStorage.setItem("user", JSON.stringify(dados.user));

    // Esconder o form de login e motrar a lista de tarefas
    toggleLogin();

    // Carregar as tarefas do servidor
    carregarTarefas();

}

const toggleLogin = () => {
    document.getElementById("login").style.display = "none";
    document.querySelector("main").style.display = "block";
}

const exibirErroDeLogin = () => {
    console.error("Falha no login");
}

const carregarTarefas = async () => {

    // Capturando response da req contra get "/tarefas"
    let response = await fetch('/tarefas', {
        method: "GET",
        headers:{
            authorization: `bearer ${sessionStorage.getItem('token')}`
        }
    });

    // Guardando as tarefas carregas no array
    // global tarefas
    tarefas = await response.json();

    // Exibindo as tarefas
    render(tarefas);



}