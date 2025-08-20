// registro.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-registro');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const idade = parseInt(document.getElementById('idade').value);

    if (idade < 18) {
      alert("Somente maiores de 18 anos podem se registrar.");
      return;
    }

    alert(`Registro realizado com sucesso!\nNome: ${nome}\nEmail: ${email}`);
    window.location.href = "login.html";
  });
});
