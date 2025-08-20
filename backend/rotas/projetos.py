from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from banco import SessionLocal
from modelos import Projeto
from esquemas import ProjetoSchema
import json

router = APIRouter()

# Dependência para pegar session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Listar todos projetos
@router.get("/projetos", response_model=list[ProjetoSchema])
def listar_projetos(db: Session = Depends(get_db)):
    projetos = db.query(Projeto).all()
    for p in projetos:
        p.tecnologias = json.loads(p.tecnologias) if isinstance(p.tecnologias, str) else p.tecnologias
    return projetos

# Obter projeto por número
@router.get("/projetos/{numero}", response_model=ProjetoSchema)
def projeto_por_numero(numero: int, db: Session = Depends(get_db)):
    projeto = db.query(Projeto).filter(Projeto.numero == numero).first()
    if not projeto:
        raise HTTPException(status_code=404, detail="Projeto não encontrado")
    projeto.tecnologias = json.loads(projeto.tecnologias) if isinstance(projeto.tecnologias, str) else projeto.tecnologias
    return projeto
