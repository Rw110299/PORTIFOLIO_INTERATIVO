document.addEventListener("DOMContentLoaded", async () => {
  // Elementos do DOM
  const listaProjetos = document.getElementById("lista-projetos");
  const buscaInput = document.getElementById("busca");
  const filtroGrupo = document.getElementById("filtroGrupo");
  const filtroDificuldade = document.getElementById("filtroDificuldade");

  // Array para armazenar projetos
  let projetos = [];

  // URL da API FastAPI
  const API_URL = "http://127.0.0.1:8000/projetos";

  // Função para carregar projetos da API
  async function carregarProjetos() {
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error("Erro ao acessar API");
      projetos = await res.json();
      preencherFiltroGrupos();
      mostrarProjetos(projetos);
    } catch (erro) {
      console.error(erro);
      if(listaProjetos) listaProjetos.innerHTML = "<p style='color:red;'>Erro ao carregar projetos.</p>";
    }
  }

  // Preencher select de grupos
  function preencherFiltroGrupos() {
    if (!filtroGrupo) return;
    const grupos = [...new Set(projetos.map(p => p.grupo))];
    grupos.forEach(grupo => {
      const option = document.createElement("option");
      option.value = grupo;
      option.textContent = grupo;
      filtroGrupo.appendChild(option);
    });
  }

  // Exibir cards de projetos
  function mostrarProjetos(lista) {
    if (!listaProjetos) return;
    listaProjetos.innerHTML = "";
    if (lista.length === 0) {
      listaProjetos.innerHTML = "<p>Nenhum projeto encontrado.</p>";
      return;
    }

    lista.forEach(p => {
      const card = document.createElement("div");
      card.className = `card ${p.grupo}`;

      // Tooltip com tecnologias
      const tooltip = document.createElement("div");
      tooltip.className = "tooltip";
      tooltip.textContent = p.tecnologias.join(", ");
      card.appendChild(tooltip);

      card.innerHTML += `
        <h2>${p.numero} - ${p.nome}</h2>
        <p><strong>Grupo:</strong> ${p.grupo}</p>
        <p><strong>Dificuldade:</strong> ${p.dificuldade}</p>
        <p>${p.aprendizado}</p>
        <a href="projeto_individual.html?numero=${p.numero}">Ver Detalhes</a>
      `;
      listaProjetos.appendChild(card);
    });
  }

  // Aplicar filtros e busca
  function aplicarFiltros() {
    const termo = buscaInput ? buscaInput.value.toLowerCase() : "";
    const grupo = filtroGrupo ? filtroGrupo.value : "";
    const dificuldade = filtroDificuldade ? filtroDificuldade.value : "";

    const filtrados = projetos.filter(p => {
      const porBusca =
        p.nome.toLowerCase().includes(termo) ||
        p.tecnologias.join(",").toLowerCase().includes(termo);
      const porGrupo = grupo === "" || p.grupo === grupo;
      const porDificuldade = dificuldade === "" || p.dificuldade === dificuldade;
      return porBusca && porGrupo && porDificuldade;
    });

    mostrarProjetos(filtrados);
  }

  // Eventos de busca e filtros
  if(buscaInput) buscaInput.addEventListener("input", aplicarFiltros);
  if(filtroGrupo) filtroGrupo.addEventListener("change", aplicarFiltros);
  if(filtroDificuldade) filtroDificuldade.addEventListener("change", aplicarFiltros);

  // Carregar projetos ao iniciar
  carregarProjetos();
});
