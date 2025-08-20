-- Criar banco de dados
CREATE DATABASE IF NOT EXISTS portifolio_interativo
  DEFAULT CHARACTER SET utf8mb4
  DEFAULT COLLATE utf8mb4_unicode_ci;

USE portifolio_interativo;

-- =========================
-- Usuários
-- =========================
CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL, -- armazenar hash
    tipo_usuario ENUM('aluno', 'admin') DEFAULT 'aluno',
    data_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =========================
-- Projetos
-- =========================
CREATE TABLE IF NOT EXISTS projetos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(200) NOT NULL,
    descricao TEXT,
    tecnologia VARCHAR(200),
    dificuldade ENUM('Fácil', 'Médio', 'Difícil') NOT NULL,
    status ENUM('Em andamento', 'Concluído', 'Pausado') DEFAULT 'Em andamento',
    link_demo VARCHAR(255),       -- link para versão rodando
    link_codigo VARCHAR(255),     -- link GitHub/Repo
    imagem VARCHAR(255),          -- thumbnail do projeto
    autor_id INT,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (autor_id) REFERENCES usuarios(id) ON DELETE SET NULL
);

-- =========================
-- Progresso do Usuário nos Projetos
-- =========================
CREATE TABLE IF NOT EXISTS progresso (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    projeto_id INT NOT NULL,
    status ENUM('Não iniciado', 'Em andamento', 'Concluído') DEFAULT 'Não iniciado',
    percentual TINYINT DEFAULT 0,      -- 0 a 100
    nota DECIMAL(3,2) DEFAULT NULL,    -- avaliação (0.0 a 10.0)
    ultima_atualizacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE,
    FOREIGN KEY (projeto_id) REFERENCES projetos(id) ON DELETE CASCADE
);
