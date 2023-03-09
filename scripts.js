let lista = [
    {
        nome: "Gleidson",
        email: "gleidson@gmail.com",
        telefone: "(85) 98797-4616",
        cidade: "Fortaleza",
    },
    {
        nome: "João",
        email: "joao@gmail.com",
        telefone: "(85) 98797-4616",
        cidade: "Caucaia",
    },
    {
        nome: "Ricardo",
        email: "ricardo@gmail.com",
        telefone: "(85) 98797-4616",
        cidade: "Fortaleza",
    },
    {
        nome: "Enzo",
        email: "enzo@gmail.com",
        telefone: "(85) 98797-4616",
        cidade: "Leblon",
    }
];

function listarAlunos()
{
    let tabela = document.querySelector("#tabela");
    tabela.innerHTML = "";
    for(let i = 0; i < lista.length; i++){
        tabela.innerHTML += `<tr>
                                <td>${lista[i].nome}</td>
                                <td>${lista[i].email}</td>
                                <td>${lista[i].telefone}</td>
                                <td>${lista[i].cidade}</td>
                                <td>
                                    <button class="btn btn-warning">Editar</button>
                                    <button class="btn btn-danger">Deletar</button>
                                </td>
                            </tr>`;
    }

} listarAlunos();

function adicionarAluno()
{
    event.preventDefault();
    let aluno = {
        nome: nome.value,
        email: email.value,
        telefone: telefone.value,
        cidade: cidade.value
    }
    lista.push(aluno);
    cadastro.reset();
    listarAlunos();
}