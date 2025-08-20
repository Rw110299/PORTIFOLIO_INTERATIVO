#!/bin/bash

usuario="Rw110299"
base="/d/108_projetos"

cd "$base" || { echo "❌ Não consegui entrar na pasta $base"; exit 1; }

for dir in */; do
    pasta="${dir%/}"
    repo_url="https://github.com/$usuario/$pasta.git"
    echo "Clonando $repo_url dentro de $base/$pasta"

    if [ -d "$pasta/.git" ]; then
        echo "✅ Repositório já existe em $pasta, pulando..."
    else
        git clone "$repo_url" "$pasta"
    fi

    echo ""
done

echo "✅ Finalizado!"
