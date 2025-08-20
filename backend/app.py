from fastapi import FastAPI
from banco import Base, engine
from rotas import projetos  # seu arquivo de rotas

# Cria todas as tabelas
Base.metadata.create_all(bind=engine)

app = FastAPI(title="API Portfólio Interativo")

# Inclui rotas
app.include_router(projetos.router)
