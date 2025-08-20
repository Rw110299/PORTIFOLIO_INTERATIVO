// Carregar Pyodide
let pyodideReady = false;
let pyodide = null;

async function iniciarPyodide() {
    pyodide = await loadPyodide();
    pyodideReady = true;
    console.log("Pyodide carregado!");
}

async function executarPython(codigo, resultadoDivId) {
    const resultadoDiv = document.getElementById(resultadoDivId);
    if(!pyodideReady) {
        resultadoDiv.innerHTML = 'Pyodide ainda não carregado. Aguarde...';
        return;
    }
    try {
        let resultado = await pyodide.runPythonAsync(codigo);
        resultadoDiv.innerHTML = resultado !== undefined ? resultado : 'Código executado com sucesso!';
    } catch(err) {
        resultadoDiv.innerHTML = 'Erro ao executar: ' + err;
    }
}

// Inicializa Pyodide automaticamente
iniciarPyodide();
