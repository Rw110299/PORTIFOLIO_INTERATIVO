document.addEventListener('DOMContentLoaded', () => {
  const botao = document.getElementById('enviar-chat');
  const chat = document.getElementById('historico-chat');

  const usuario = JSON.parse(localStorage.getItem('usuarioLogado'));
  if(!usuario) return;

  // Carregar histórico do usuário
  let historico = JSON.parse(localStorage.getItem(`chat_${usuario.email}`)) || [];
  historico.forEach(msg => {
    chat.innerHTML += `<p><strong>${msg.remetente}:</strong> ${msg.texto}</p>`;
  });

  botao.addEventListener('click', () => {
    const input = document.getElementById('mensagem');
    const texto = input.value.trim();
    if(!texto) return;

    // Mensagem do usuário
    chat.innerHTML += `<p><strong>Você:</strong> ${texto}</p>`;
    historico.push({remetente: "Você", texto});

    // Resposta simulada da AI
    const resposta = `AI respondeu: "${texto}"`;
    chat.innerHTML += `<p><strong>AI:</strong> ${resposta}</p>`;
    historico.push({remetente: "AI", texto: resposta});

    // Salvar histórico no localStorage
    localStorage.setItem(`chat_${usuario.email}`, JSON.stringify(historico));

    input.value = "";
    chat.scrollTop = chat.scrollHeight;
  });
});
