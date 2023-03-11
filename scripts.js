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
                                    <button class="btn btn-warning"
                                     type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRightEditar"
                                     aria-controls="offcanvasRightEditar" onclick="preencherForm(${i})"
                                     >Editar</button>

                                   <button class="btn btn-danger" onclick="deletarAluno(${i})">Deletar</button>
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
    document.querySelector(".offcanvas").classList.remove("show")
    document.querySelector(".offcanvas-backdrop").classList.remove("show")
    listarAlunos();
}

function preencherForm(posicao){
    let aluno = lista[posicao];
    e_id.value = posicao;
    e_nome.value = aluno.nome;
    e_email.value = aluno.email;
    e_telefone.value = aluno.telefone;
    e_cidade.value = aluno.cidade;
}

function editarAluno(){
    event.preventDefault();
    let posicao = e_id.value;
    lista[posicao].nome = e_nome.value;
    lista[posicao].email = e_email.value;
    lista[posicao].telefone = e_telefone.value;
    lista[posicao].cidade = e_cidade.value;
    editar.reset();
    document.querySelector(".offcanvas").classList.remove("show")
    document.querySelector(".offcanvas-backdrop").classList.remove("show")
    listarAlunos();
}
function deletarAluno(posicao){
    let novaLista = [];
    for(let i = 0;i < lista.length;i++){
        if(i != posicao){
            novaLista.push(lista[i]);
        }
    }
    lista = [];
    lista = novaLista;
    listarAlunos();
}

