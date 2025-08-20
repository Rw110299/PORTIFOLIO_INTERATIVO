import os
import json

# Pasta raiz dos projetos
PASTA_PROJETOS = "./108_projetos"

# Pasta onde será salvo o JSON
ARQUIVO_JSON = "./dados/projetos.json"

# Lista para armazenar todos os projetos
lista_projetos = []

# Percorre cada linguagem dentro de 108_projetos
for linguagem in os.listdir(PASTA_PROJETOS):
    caminho_linguagem = os.path.join(PASTA_PROJETOS, linguagem)
    if os.path.isdir(caminho_linguagem):
        # Percorre cada projeto dentro da linguagem
        for projeto_nome in sorted(os.listdir(caminho_linguagem)):
            caminho_projeto = os.path.join(caminho_linguagem, projeto_nome)
            if os.path.isdir(caminho_projeto):
                # Define ID com base na pasta
                projeto_id = projeto_nome[-3:]  # últimos 3 caracteres, ex: 001
                # Tenta pegar o nome do projeto a partir de README.md se existir
                descricao = "Descrição do projeto aqui"
                readme_path = os.path.join(caminho_projeto, "README.md")
                if os.path.exists(readme_path):
                    with open(readme_path, "r", encoding="utf-8") as f:
                        descricao = f.readline().strip()  # primeira linha do README
                # Monta o dicionário do projeto
                projeto = {
                    "id": projeto_id,
                    "nome": f"Projeto {projeto_id}",
                    "linguagem": linguagem.capitalize(),
                    "pasta": f"{linguagem}/{projeto_nome}",
                    "descricao": descricao
                }
                lista_projetos.append(projeto)

# Salva o JSON
os.makedirs(os.path.dirname(ARQUIVO_JSON), exist_ok=True)
with open(ARQUIVO_JSON, "w", encoding="utf-8") as f:
    json.dump(lista_projetos, f, ensure_ascii=False, indent=4)

print(f"JSON atualizado com {len(lista_projetos)} projetos!")
