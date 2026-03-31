// MODO ESCURO
let btnDark = document.getElementById("btnDark");

btnDark.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});


//  FORMULÁRIO
let form = document.getElementById("formCadastro");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let telefone = document.getElementById("telefone").value.trim();
    let empresa = document.getElementById("empresa").value.trim();
    let cargo = document.getElementById("cargo").value.trim();

    let mensagem = document.getElementById("mensagem");
    let lista = document.getElementById("lista");

    // VALIDAÇÃO NOME
    if (nome.length < 3) {
        mensagem.innerText = "Nome precisa ter pelo menos 3 letras";
        mensagem.style.color = "red";
        return;
    }

    // VALIDAÇÃO EMAIL
    if (!email.includes("@") || !email.includes(".")) {
        mensagem.innerText = "Email inválido";
        mensagem.style.color = "red";
        return;
    }

    // VALIDAÇÃO TELEFONE
    if (telefone.length < 10 || isNaN(telefone)) {
        mensagem.innerText = "Telefone inválido (apenas números)";
        mensagem.style.color = "red";
        return;
    }

    // VALIDAÇÃO EMPRESA
    if (empresa.length < 2) {
        mensagem.innerText = "Empresa muito curta";
        mensagem.style.color = "red";
        return;
    }

    // VALIDAÇÃO CARGO
    if (cargo.length < 2) {
        mensagem.innerText = "Cargo muito curto";
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
    info.innerHTML = `<strong>${nome}</strong><br>${email}`;

    let btnRemover = document.createElement("button");
    btnRemover.innerText = "Remover";

    // REMOVER CARD
    btnRemover.addEventListener("click", () => {
        card.remove();
    });

    card.appendChild(info);
    card.appendChild(btnRemover);
    lista.appendChild(card);

    // LIMPAR FORMULÁRIO
    document.getElementById("formCadastro").reset();
});


// TECLA ESC LIMPA TUDO
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        document.getElementById("formCadastro").reset();
        document.getElementById("mensagem").innerText = "";
    }
});
