document.addEventListener('DOMContentLoaded', () => {
    // Seleciona elementos
    const textarea = document.getElementById('codigoSandbox');
    const botaoExecutar = document.getElementById('executarSandbox');
    const saida = document.getElementById('saidaSandbox');

    // Função para executar código JS
    function executarJS(codigo) {
        try {
            const result = new Function(codigo)();
            saida.textContent = result !== undefined ? result : "Executado com sucesso!";
        } catch (e) {
            saida.textContent = "Erro JS: " + e.message;
        }
    }

    // Função para executar código Python (Pyodide)
    async function executarPython(codigo) {
        try {
            // Carrega Pyodide se ainda não estiver carregado
            if (!window.pyodide) {
                saida.textContent = "Carregando ambiente Python...";
                window.pyodide = await loadPyodide({ indexURL: "https://cdn.jsdelivr.net/pyodide/v0.23.4/full/" });
            }
            const result = await window.pyodide.runPythonAsync(codigo);
            saida.textContent = result !== undefined ? result : "Executado com sucesso!";
        } catch (e) {
            saida.textContent = "Erro Python: " + e.message;
        }
    }

    // Evento do botão
    botaoExecutar.addEventListener('click', async () => {
        saida.innerHTML = "";
        const codigo = textarea.value;

        // Detecta linguagem pelo comentário inicial (ex: // JS ou # PY)
        if (codigo.startsWith("// JS")) {
            executarJS(codigo.replace("// JS", "").trim());
        } else if (codigo.startsWith("# PY")) {
            await executarPython(codigo.replace("# PY", "").trim());
        } else {
            saida.textContent = "Indefinido: Use '// JS' ou '# PY' no início do código.";
        }
    });
});
