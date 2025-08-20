from pydantic import BaseModel
from typing import List, Optional

class ProjetoSchema(BaseModel):
    numero: int
    nome: str
    grupo: str
    dificuldade: str
    tecnologias: List[str]
    aprendizado: str
    descricao: str
    linkCodigo: str
    linkDemo: Optional[str] = None

    class Config:
        orm_mode = True
