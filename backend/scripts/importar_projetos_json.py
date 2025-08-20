import json
from banco import SessionLocal, engine, Base
from modelos import Projeto

# Caminho para o JSON com 108 projetos
with open("../../dados/projetos.json", "r", encoding="utf-8") as f:
    dados = json.load(f)

db = SessionLocal()

for item in dados:
    tecnologias = json.dumps(item.get("tecnologias", []))
    projeto = Projeto(
        numero=item.get("numero"),
        nome=item.get("nome"),
        grupo=item.get("grupo"),
        dificuldade=item.get("dificuldade"),
        tecnologias=tecnologias,
        aprendizado=item.get("aprendizado"),
        descricao=item.get("descricao", ""),
        linkCodigo=item.get("linkCodigo", "#"),
        linkDemo=item.get("linkDemo", "#")
    )
    db.add(projeto)

db.commit()
db.close()
print("Importação concluída!")
