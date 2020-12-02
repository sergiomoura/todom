// Capturar elementos da página em constantes (tfEmail, tfSenha, btLogin):
const tfEmail = document.getElementById("email");
const tfSenha = document.getElementById("senha");
const btLogin = document.getElementById("btnLogin");
const formLogin = document.getElementById("formLogin");

// Verificando se capturou os três elementos;
console.log(tfEmail,tfSenha,btLogin)

// Criem uma função login que submeta uma string json
// na forma {"email":_____, "senha":_____} via post para a rota "/login"
const login = (email, senha) => {

    // Construir a string json que vai ser enviada
    let strJson = JSON.stringify({email, senha});

    // Enviar requisição...
    fetch("/login",{
        method:"POST",
        body:strJson,
        headers: {
            "content-type":"application/json"
        }
    });
}

// Associar a execução da função login a submissão do formulário formLogin
formLogin.addEventListener(
    "submit",
    (evt) => {
        console.log(evt);
        evt.preventDefault();
        login(tfEmail.value, tfSenha.value);
    }
)