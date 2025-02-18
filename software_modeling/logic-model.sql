CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL
);

CREATE TABLE disciplinas (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    semestre VARCHAR(10) NOT NULL,
    carga_horaria VARCHAR(10) NOT NULL
);

CREATE TABLE atividades (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    tipo VARCHAR(50) NOT NULL,
    data DATE NOT NULL,
    prioridade VARCHAR(20) NOT NULL,
    status VARCHAR(50) NOT NULL,
    id_disciplina INT NOT NULL,
    id_usuario INT NOT NULL,
    FOREIGN KEY (id_disciplina) REFERENCES disciplinas(id) ON DELETE CASCADE,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id) ON DELETE CASCADE
);

CREATE TABLE notificacoes (
    id SERIAL PRIMARY KEY,
    mensagem TEXT NOT NULL,
    data_envio TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    id_usuario INT NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id) ON DELETE CASCADE
);