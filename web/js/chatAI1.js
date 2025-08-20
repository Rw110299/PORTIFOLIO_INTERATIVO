document.addEventListener("DOMContentLoaded", () => {
  const botao = document.getElementById('enviar-chat');
  if (botao) {
    botao.addEventListener('click', async () => {
      const input = document.getElementById('mensagem');
      const chat = document.getElementById('historico-chat');
      const texto = input.value.trim();
      if (!texto) return;

      // Mostrar a mensagem do usuário
      chat.innerHTML += `<p><strong>Você:</strong> ${texto}</p>`;

      // Chamada à API Flask
      const resposta = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mensagem: texto })
      }).then(res => res.json());

      chat.innerHTML += `<p><strong>AI:</strong> ${resposta.resposta}</p>`;
      input.value = "";
    });
  }
});
