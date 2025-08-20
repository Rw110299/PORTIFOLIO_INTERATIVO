// Carregar usuários do JSON (simulação)
let usuarios = [];
let usuarioAtual = null;

async function carregarUsuarios() {
    const response = await fetch('/dados/usuarios.json');
    usuarios = await response.json();
}

// Login simples
function login(email, senha) {
    usuarioAtual = usuarios.find(u => u.email === email && u.senha === senha);
    if(usuarioAtual) {
        alert(`Bem-vindo(a) ${usuarioAtual.nome}!`);
        return true;
    } else {
        alert('Email ou senha incorretos.');
        return false;
    }
}

// Marcar progresso
function marcarProgresso(numeroProjeto, status) {
    if(!usuarioAtual) return;
    usuarioAtual.progresso[numeroProjeto] = status;
    console.log(`Projeto ${numeroProjeto} marcado como ${status}`);
}

// Favoritar/desfavoritar
function toggleFavorito(numeroProjeto) {
    if(!usuarioAtual) return;
    const index = usuarioAtual.favoritos.indexOf(numeroProjeto);
    if(index >= 0) {
        usuarioAtual.favoritos.splice(index, 1);
        console.log(`Projeto ${numeroProjeto} removido dos favoritos`);
    } else {
        usuarioAtual.favoritos.push(numeroProjeto);
        console.log(`Projeto ${numeroProjeto} adicionado aos favoritos`);
    }
}

// Ver progresso de um projeto
function verProgresso(numeroProjeto) {
    if(!usuarioAtual) return null;
    return usuarioAtual.progresso[numeroProjeto] || "não iniciado";
}

// Filtrar projetos favoritos
function filtrarFavoritos(projetos) {
    if(!usuarioAtual) return projetos;
    return projetos.filter(p => usuarioAtual.favoritos.includes(p.numero));
}

// Inicialização
carregarUsuarios();
