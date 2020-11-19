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
const login = (email,senha) => {

    fetch('/login', {
        method: 'POST',
        body: JSON.stringify({ email: email ,senha: senha }),
        headers: { 'Content-Type': 'application/json' },
    });

}

