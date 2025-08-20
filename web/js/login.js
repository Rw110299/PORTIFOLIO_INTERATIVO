// login.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-login');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const idade = parseInt(document.getElementById('idade').value);

    if (idade < 18) {
      alert("Acesso permitido apenas para maiores de 18 anos!");
      return;
    }

    // Simulação de autenticação
    const usuariosSimulados = [
      { email: "exemplo@email.com", senha: "123456", idade: 25 }
    ];

    const usuario = usuariosSimulados.find(u => u.email === email && u.senha === senha);

    if (usuario) {
      alert("Login realizado com sucesso!");
      window.location.href = "home.html";
    } else {
      alert("Email ou senha incorretos!");
    }
  });
});
