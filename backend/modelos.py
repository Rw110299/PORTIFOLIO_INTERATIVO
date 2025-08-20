# modelos.py
from sqlalchemy import (
    Column,
    Integer,
    SmallInteger,
    String,
    Enum,
    Text,
    ForeignKey,
    DECIMAL,
    TIMESTAMP,
)
from sqlalchemy.orm import declarative_base, relationship

Base = declarative_base()

class Usuario(Base):
    __tablename__ = "usuarios"

    id = Column(Integer, primary_key=True, autoincrement=True)
    nome = Column(String(100), nullable=False)
    email = Column(String(100), unique=True, nullable=False)
    senha = Column(String(255), nullable=False)  # Armazenar hash
    tipo_usuario = Column(Enum("aluno", "admin"), default="aluno")
    data_registro = Column(TIMESTAMP, server_default="CURRENT_TIMESTAMP")

    projetos = relationship("Projeto", back_populates="autor")
    progresso = relationship("Progresso", back_populates="usuario")

class Projeto(Base):
    __tablename__ = "projetos"

    id = Column(Integer, primary_key=True, autoincrement=True)
    titulo = Column(String(200), nullable=False)
    descricao = Column(Text)
    tecnologia = Column(String(200))
    dificuldade = Column(Enum("Fácil", "Médio", "Difícil"), nullable=False)
    status = Column(Enum("Em andamento", "Concluído", "Pausado"), default="Em andamento")
    link_demo = Column(String(255))
    link_codigo = Column(String(255))
    imagem = Column(String(255))
    autor_id = Column(Integer, ForeignKey("usuarios.id", ondelete="SET NULL"))
    data_criacao = Column(TIMESTAMP, server_default="CURRENT_TIMESTAMP")

    autor = relationship("Usuario", back_populates="projetos")
    progresso = relationship("Progresso", back_populates="projeto")

class Progresso(Base):
    __tablename__ = "progresso"

    id = Column(Integer, primary_key=True, autoincrement=True)
    usuario_id = Column(Integer, ForeignKey("usuarios.id", ondelete="CASCADE"), nullable=False)
    projeto_id = Column(Integer, ForeignKey("projetos.id", ondelete="CASCADE"), nullable=False)
    status = Column(Enum("Não iniciado", "Em andamento", "Concluído"), default="Não iniciado")
    percentual = Column(SmallInteger, default=0)  # de 0 a 100
    nota = Column(DECIMAL(3, 2), default=None)   # avaliação 0.0 a 10.0
    ultima_atualizacao = Column(TIMESTAMP, server_default="CURRENT_TIMESTAMP", onupdate="CURRENT_TIMESTAMP")

    usuario = relationship("Usuario", back_populates="progresso")
    projeto = relationship("Projeto", back_populates="progresso")
