CREATE DATABASE IF NOT EXISTS talentfy_db;
USE talentfy_db;

CREATE TABLE usuarios (
  id_usuario INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  senha_hash VARCHAR(255) NOT NULL,
  tipo_usuario ENUM('cliente','prestador','admin') DEFAULT 'cliente',
  data_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE auditoria (
  id_auditoria INT PRIMARY KEY AUTO_INCREMENT,
  id_usuario INT,
  acao VARCHAR(255),
  detalhes TEXT,
  data DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

CREATE TABLE avaliacoes (
  id_avaliacao INT PRIMARY KEY AUTO_INCREMENT,
  id_pedido INT NOT NULL,
  nota INT CHECK (nota BETWEEN 1 AND 5),
  comentario TEXT,
  data_avaliacao DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (id_pedido) REFERENCES pedidos(id_pedido)
);

CREATE TABLE carteiras (
  id_carteira INT PRIMARY KEY AUTO_INCREMENT,
  id_usuario INT NOT NULL,
  saldo DECIMAL(10,2) DEFAULT 0.00,
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

CREATE TABLE categorias (
  id_categoria INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(50) NOT NULL UNIQUE,
  descricao TEXT
);

CREATE TABLE categorias_prestador (
  id_prestador INT NOT NULL,
  id_categoria INT NOT NULL,
  PRIMARY KEY (id_prestador, id_categoria),
  FOREIGN KEY (id_prestador) REFERENCES usuarios(id_usuario),
  FOREIGN KEY (id_categoria) REFERENCES categorias(id_categoria)
);

CREATE TABLE postagens (
  id_postagem INT PRIMARY KEY AUTO_INCREMENT,
  id_usuario INT NOT NULL,
  titulo VARCHAR(255),
  conteudo TEXT,
  data_postagem DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

CREATE TABLE comentarios (
  id_comentario INT PRIMARY KEY AUTO_INCREMENT,
  id_postagem INT NOT NULL,
  id_usuario INT NOT NULL,
  conteudo TEXT,
  data_comentario DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (id_postagem) REFERENCES postagens(id_postagem),
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

CREATE TABLE servicos (
  id_servico INT PRIMARY KEY AUTO_INCREMENT,
  id_prestador INT NOT NULL,
  titulo VARCHAR(100) NOT NULL,
  descricao TEXT,
  preco DECIMAL(10,2),
  status ENUM('ativo','inativo') DEFAULT 'ativo',
  FOREIGN KEY (id_prestador) REFERENCES usuarios(id_usuario)
);

CREATE TABLE pedidos (
  id_pedido INT PRIMARY KEY AUTO_INCREMENT,
  id_cliente INT NOT NULL,
  id_prestador INT NOT NULL,
  id_servico INT NOT NULL,
  data_solicitacao DATETIME DEFAULT CURRENT_TIMESTAMP,
  status ENUM('pendente','em_progresso','concluido','cancelado') DEFAULT 'pendente',
  FOREIGN KEY (id_cliente) REFERENCES usuarios(id_usuario),
  FOREIGN KEY (id_prestador) REFERENCES usuarios(id_usuario),
  FOREIGN KEY (id_servico) REFERENCES servicos(id_servico)
);

CREATE TABLE conversas (
  id_conversa INT PRIMARY KEY AUTO_INCREMENT,
  id_usuario1 INT NOT NULL,
  id_usuario2 INT NOT NULL,
  id_pedido INT,
  FOREIGN KEY (id_usuario1) REFERENCES usuarios(id_usuario),
  FOREIGN KEY (id_usuario2) REFERENCES usuarios(id_usuario),
  FOREIGN KEY (id_pedido) REFERENCES pedidos(id_pedido)
);

CREATE TABLE mensagens (
  id_mensagem INT PRIMARY KEY AUTO_INCREMENT,
  id_conversa INT NOT NULL,
  id_remetente INT NOT NULL,
  conteudo TEXT,
  data_envio DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (id_conversa) REFERENCES conversas(id_conversa),
  FOREIGN KEY (id_remetente) REFERENCES usuarios(id_usuario)
);

CREATE TABLE denuncias (
  id_denuncia INT PRIMARY KEY AUTO_INCREMENT,
  id_usuario_denunciante INT NOT NULL,
  id_usuario_alvo INT,
  id_pedido INT,
  id_postagem INT,
  motivo TEXT NOT NULL,
  status ENUM('pendente','analisada','resolvida') DEFAULT 'pendente',
  data_denuncia DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (id_usuario_denunciante) REFERENCES usuarios(id_usuario),
  FOREIGN KEY (id_usuario_alvo) REFERENCES usuarios(id_usuario),
  FOREIGN KEY (id_pedido) REFERENCES pedidos(id_pedido),
  FOREIGN KEY (id_postagem) REFERENCES postagens(id_postagem)
);

CREATE TABLE disponibilidade_prestador (
  id_disponibilidade INT PRIMARY KEY AUTO_INCREMENT,
  id_prestador INT NOT NULL,
  dia_semana ENUM('domingo','segunda','terça','quarta','quinta','sexta','sábado') NOT NULL,
  hora_inicio TIME NOT NULL,
  hora_fim TIME NOT NULL,
  FOREIGN KEY (id_prestador) REFERENCES usuarios(id_usuario)
);

CREATE TABLE documentos_prestador (
  id_documento INT PRIMARY KEY AUTO_INCREMENT,
  id_prestador INT NOT NULL,
  tipo_documento VARCHAR(50),
  caminho_arquivo VARCHAR(255),
  status_verificacao ENUM('pendente','aprovado','rejeitado') DEFAULT 'pendente',
  data_envio DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (id_prestador) REFERENCES usuarios(id_usuario)
);

CREATE TABLE enderecos (
  id_endereco INT PRIMARY KEY AUTO_INCREMENT,
  id_usuario INT NOT NULL,
  tipo_endereco ENUM('casa','trabalho','outro') DEFAULT 'casa',
  rua VARCHAR(150),
  numero VARCHAR(20),
  complemento VARCHAR(50),
  cidade VARCHAR(50),
  estado VARCHAR(50),
  cep VARCHAR(10),
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

CREATE TABLE favoritos (
  id_favorito INT PRIMARY KEY AUTO_INCREMENT,
  id_cliente INT NOT NULL,
  id_prestador INT,
  id_servico INT,
  FOREIGN KEY (id_cliente) REFERENCES usuarios(id_usuario),
  FOREIGN KEY (id_prestador) REFERENCES usuarios(id_usuario),
  FOREIGN KEY (id_servico) REFERENCES servicos(id_servico)
);

CREATE TABLE historico_pontos (
  id_historico INT PRIMARY KEY AUTO_INCREMENT,
  id_usuario INT NOT NULL,
  pontos INT NOT NULL,
  motivo VARCHAR(255),
  data_registro DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

CREATE TABLE metodos_pagamento (
  id_metodo INT PRIMARY KEY AUTO_INCREMENT,
  id_cliente INT NOT NULL,
  tipo ENUM('cartao','pix','boleto','paypal') NOT NULL,
  dados_pagamento TEXT,
  data_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (id_cliente) REFERENCES usuarios(id_usuario)
);

CREATE TABLE perfis_cliente (
  id_cliente INT PRIMARY KEY,
  telefone VARCHAR(20),
  data_nascimento DATE,
  genero ENUM('masculino','feminino','outro'),
  preferencias TEXT,
  FOREIGN KEY (id_cliente) REFERENCES usuarios(id_usuario)
);

CREATE TABLE perfis_prestador (
  id_prestador INT PRIMARY KEY,
  nome_profissional VARCHAR(100),
  descricao TEXT,
  avaliacao_media DECIMAL(3,2) DEFAULT 0.00,
  servicos_concluidos INT DEFAULT 0,
  FOREIGN KEY (id_prestador) REFERENCES usuarios(id_usuario)
);
