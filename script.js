// MODO ESCURO
let btnDark = document.getElementById("btnDark");

btnDark.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});


// FORMULÁRIO
let form = document.getElementById("formCadastro");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let nome = document.getElementById("nome");
    let email = document.getElementById("email");
    let telefone = document.getElementById("telefone");
    let empresa = document.getElementById("empresa");
    let cargo = document.getElementById("cargo");
    let mensagem = document.getElementById("mensagem");
    let lista = document.getElementById("lista");

    // VALIDAÇÃO
    if (
        nome.value === "" ||
        email.value === "" ||
        telefone.value === "" ||
        empresa.value === "" ||
        cargo.value === ""
    ) {
        mensagem.innerText = "Preencha todos os campos!";
        mensagem.style.color = "red";
        return;
    }

    // SUCESSO
    mensagem.innerText = "Cadastro realizado com sucesso!";
    mensagem.style.color = "green";

    // CRIAR CARD
    let card = document.createElement("div");
    card.className = "card";

    let info = document.createElement("div");
    info.innerHTML = `<strong>${nome.value}</strong><br>${email.value}`;

    let btnRemover = document.createElement("button");
    btnRemover.innerText = "Remover";

    btnRemover.addEventListener("click", () => {
        card.remove();
    });

    card.appendChild(info);
    card.appendChild(btnRemover);

    lista.appendChild(card);

    // LIMPAR CAMPOS
    nome.value = "";
    email.value = "";
    telefone.value = "";
    empresa.value = "";
    cargo.value = "";
});


// TECLA ESC LIMPA FORMULÁRIO
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        document.getElementById("formCadastro").reset();
        document.getElementById("mensagem").innerText = "";
    }
});