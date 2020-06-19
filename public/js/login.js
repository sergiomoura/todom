document.querySelector("form").addEventListener(
    'submit',
    async (evt) => {
        // Impedindo a submissão deste formulário
        evt.preventDefault();

        // Caputurando email e senha
        let email = document.getElementById("email").value;
        let senha = document.getElementById("senha").value;
        login(email, senha)
        .then(
            response => {
                if(response.status == 200){
                    return response.json();
                } else {
                    alert("Login Inválido!");
                    return "Erro";
                }
            } 
        )
        .then(
            (data) => {
                if(data != "Erro"){
                    let {usuario, token} = data;
                    localStorage.setItem("@todom:token",token);
                    getTarefas()   
                }
            }
        )
    }
)

function login(email,senha){

    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    return fetch('/api/login',{
        method:"POST",
        body:JSON.stringify({email,senha}),
        headers
    });


}

function getTarefas(){

    let headers = new Headers();
    headers.append("Authentication",`Bearer ${localStorage.getItem('@todom:token')}`);
    
    fetch('/api/tarefas',{
        method:"GET",
        headers
    })

}