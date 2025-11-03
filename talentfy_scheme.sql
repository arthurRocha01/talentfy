/*M!999999\- enable the sandbox mode */ 
-- MariaDB dump 10.19-11.8.3-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: talentfy_db
-- ------------------------------------------------------
-- Server version	11.8.3-MariaDB-0+deb13u1 from Debian

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*M!100616 SET @OLD_NOTE_VERBOSITY=@@NOTE_VERBOSITY, NOTE_VERBOSITY=0 */;

--
-- Table structure for table `auditoria`
--

DROP TABLE IF EXISTS `auditoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `auditoria` (
  `id_auditoria` int(11) NOT NULL AUTO_INCREMENT,
  `id_usuario` int(11) DEFAULT NULL,
  `acao` varchar(255) DEFAULT NULL,
  `detalhes` text DEFAULT NULL,
  `data` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id_auditoria`),
  KEY `id_usuario` (`id_usuario`),
  CONSTRAINT `auditoria_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auditoria`
--

LOCK TABLES `auditoria` WRITE;
/*!40000 ALTER TABLE `auditoria` DISABLE KEYS */;
set autocommit=0;
/*!40000 ALTER TABLE `auditoria` ENABLE KEYS */;
UNLOCK TABLES;
commit;

--
-- Table structure for table `avaliacoes`
--

DROP TABLE IF EXISTS `avaliacoes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `avaliacoes` (
  `id_avaliacao` int(11) NOT NULL AUTO_INCREMENT,
  `id_pedido` int(11) NOT NULL,
  `nota` int(11) DEFAULT NULL CHECK (`nota` between 1 and 5),
  `comentario` text DEFAULT NULL,
  `data_avaliacao` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id_avaliacao`),
  KEY `id_pedido` (`id_pedido`),
  CONSTRAINT `avaliacoes_ibfk_1` FOREIGN KEY (`id_pedido`) REFERENCES `pedidos` (`id_pedido`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `avaliacoes`
--

LOCK TABLES `avaliacoes` WRITE;
/*!40000 ALTER TABLE `avaliacoes` DISABLE KEYS */;
set autocommit=0;
/*!40000 ALTER TABLE `avaliacoes` ENABLE KEYS */;
UNLOCK TABLES;
commit;

--
-- Table structure for table `carteiras`
--

DROP TABLE IF EXISTS `carteiras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `carteiras` (
  `id_carteira` int(11) NOT NULL AUTO_INCREMENT,
  `id_usuario` int(11) NOT NULL,
  `saldo` decimal(10,2) DEFAULT 0.00,
  PRIMARY KEY (`id_carteira`),
  KEY `id_usuario` (`id_usuario`),
  CONSTRAINT `carteiras_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carteiras`
--

LOCK TABLES `carteiras` WRITE;
/*!40000 ALTER TABLE `carteiras` DISABLE KEYS */;
set autocommit=0;
/*!40000 ALTER TABLE `carteiras` ENABLE KEYS */;
UNLOCK TABLES;
commit;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorias` (
  `id_categoria` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `descricao` text DEFAULT NULL,
  PRIMARY KEY (`id_categoria`),
  UNIQUE KEY `nome` (`nome`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
set autocommit=0;
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;
commit;

--
-- Table structure for table `categorias_prestador`
--

DROP TABLE IF EXISTS `categorias_prestador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorias_prestador` (
  `id_prestador` int(11) NOT NULL,
  `id_categoria` int(11) NOT NULL,
  PRIMARY KEY (`id_prestador`,`id_categoria`),
  KEY `id_categoria` (`id_categoria`),
  CONSTRAINT `categorias_prestador_ibfk_1` FOREIGN KEY (`id_prestador`) REFERENCES `usuarios` (`id_usuario`),
  CONSTRAINT `categorias_prestador_ibfk_2` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id_categoria`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias_prestador`
--

LOCK TABLES `categorias_prestador` WRITE;
/*!40000 ALTER TABLE `categorias_prestador` DISABLE KEYS */;
set autocommit=0;
/*!40000 ALTER TABLE `categorias_prestador` ENABLE KEYS */;
UNLOCK TABLES;
commit;

--
-- Table structure for table `comentarios`
--

DROP TABLE IF EXISTS `comentarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `comentarios` (
  `id_comentario` int(11) NOT NULL AUTO_INCREMENT,
  `id_postagem` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `conteudo` text DEFAULT NULL,
  `data_comentario` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id_comentario`),
  KEY `id_postagem` (`id_postagem`),
  KEY `id_usuario` (`id_usuario`),
  CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`id_postagem`) REFERENCES `postagens` (`id_postagem`),
  CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentarios`
--

LOCK TABLES `comentarios` WRITE;
/*!40000 ALTER TABLE `comentarios` DISABLE KEYS */;
set autocommit=0;
/*!40000 ALTER TABLE `comentarios` ENABLE KEYS */;
UNLOCK TABLES;
commit;

--
-- Table structure for table `conversas`
--

DROP TABLE IF EXISTS `conversas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `conversas` (
  `id_conversa` int(11) NOT NULL AUTO_INCREMENT,
  `id_usuario1` int(11) NOT NULL,
  `id_usuario2` int(11) NOT NULL,
  `id_pedido` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_conversa`),
  KEY `id_usuario1` (`id_usuario1`),
  KEY `id_usuario2` (`id_usuario2`),
  KEY `id_pedido` (`id_pedido`),
  CONSTRAINT `conversas_ibfk_1` FOREIGN KEY (`id_usuario1`) REFERENCES `usuarios` (`id_usuario`),
  CONSTRAINT `conversas_ibfk_2` FOREIGN KEY (`id_usuario2`) REFERENCES `usuarios` (`id_usuario`),
  CONSTRAINT `conversas_ibfk_3` FOREIGN KEY (`id_pedido`) REFERENCES `pedidos` (`id_pedido`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `conversas`
--

LOCK TABLES `conversas` WRITE;
/*!40000 ALTER TABLE `conversas` DISABLE KEYS */;
set autocommit=0;
/*!40000 ALTER TABLE `conversas` ENABLE KEYS */;
UNLOCK TABLES;
commit;

--
-- Table structure for table `denuncias`
--

DROP TABLE IF EXISTS `denuncias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `denuncias` (
  `id_denuncia` int(11) NOT NULL AUTO_INCREMENT,
  `id_usuario_denunciante` int(11) NOT NULL,
  `id_usuario_alvo` int(11) DEFAULT NULL,
  `id_pedido` int(11) DEFAULT NULL,
  `id_postagem` int(11) DEFAULT NULL,
  `motivo` text NOT NULL,
  `status` enum('pendente','analisada','resolvida') DEFAULT 'pendente',
  `data_denuncia` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id_denuncia`),
  KEY `id_usuario_denunciante` (`id_usuario_denunciante`),
  KEY `id_usuario_alvo` (`id_usuario_alvo`),
  KEY `id_pedido` (`id_pedido`),
  KEY `id_postagem` (`id_postagem`),
  CONSTRAINT `denuncias_ibfk_1` FOREIGN KEY (`id_usuario_denunciante`) REFERENCES `usuarios` (`id_usuario`),
  CONSTRAINT `denuncias_ibfk_2` FOREIGN KEY (`id_usuario_alvo`) REFERENCES `usuarios` (`id_usuario`),
  CONSTRAINT `denuncias_ibfk_3` FOREIGN KEY (`id_pedido`) REFERENCES `pedidos` (`id_pedido`),
  CONSTRAINT `denuncias_ibfk_4` FOREIGN KEY (`id_postagem`) REFERENCES `postagens` (`id_postagem`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `denuncias`
--

LOCK TABLES `denuncias` WRITE;
/*!40000 ALTER TABLE `denuncias` DISABLE KEYS */;
set autocommit=0;
/*!40000 ALTER TABLE `denuncias` ENABLE KEYS */;
UNLOCK TABLES;
commit;

--
-- Table structure for table `disponibilidade_prestador`
--

DROP TABLE IF EXISTS `disponibilidade_prestador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `disponibilidade_prestador` (
  `id_disponibilidade` int(11) NOT NULL AUTO_INCREMENT,
  `id_prestador` int(11) NOT NULL,
  `dia_semana` enum('domingo','segunda','terça','quarta','quinta','sexta','sábado') NOT NULL,
  `hora_inicio` time NOT NULL,
  `hora_fim` time NOT NULL,
  PRIMARY KEY (`id_disponibilidade`),
  KEY `id_prestador` (`id_prestador`),
  CONSTRAINT `disponibilidade_prestador_ibfk_1` FOREIGN KEY (`id_prestador`) REFERENCES `usuarios` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `disponibilidade_prestador`
--

LOCK TABLES `disponibilidade_prestador` WRITE;
/*!40000 ALTER TABLE `disponibilidade_prestador` DISABLE KEYS */;
set autocommit=0;
/*!40000 ALTER TABLE `disponibilidade_prestador` ENABLE KEYS */;
UNLOCK TABLES;
commit;

--
-- Table structure for table `documentos_prestador`
--

DROP TABLE IF EXISTS `documentos_prestador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `documentos_prestador` (
  `id_documento` int(11) NOT NULL AUTO_INCREMENT,
  `id_prestador` int(11) NOT NULL,
  `tipo_documento` varchar(50) DEFAULT NULL,
  `caminho_arquivo` varchar(255) DEFAULT NULL,
  `status_verificacao` enum('pendente','aprovado','rejeitado') DEFAULT 'pendente',
  `data_envio` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id_documento`),
  KEY `id_prestador` (`id_prestador`),
  CONSTRAINT `documentos_prestador_ibfk_1` FOREIGN KEY (`id_prestador`) REFERENCES `usuarios` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `documentos_prestador`
--

LOCK TABLES `documentos_prestador` WRITE;
/*!40000 ALTER TABLE `documentos_prestador` DISABLE KEYS */;
set autocommit=0;
/*!40000 ALTER TABLE `documentos_prestador` ENABLE KEYS */;
UNLOCK TABLES;
commit;

--
-- Table structure for table `enderecos`
--

DROP TABLE IF EXISTS `enderecos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `enderecos` (
  `id_endereco` int(11) NOT NULL AUTO_INCREMENT,
  `id_usuario` int(11) NOT NULL,
  `tipo_endereco` enum('casa','trabalho','outro') DEFAULT 'casa',
  `rua` varchar(150) DEFAULT NULL,
  `numero` varchar(20) DEFAULT NULL,
  `complemento` varchar(50) DEFAULT NULL,
  `cidade` varchar(50) DEFAULT NULL,
  `estado` varchar(50) DEFAULT NULL,
  `cep` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id_endereco`),
  KEY `id_usuario` (`id_usuario`),
  CONSTRAINT `enderecos_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `enderecos`
--

LOCK TABLES `enderecos` WRITE;
/*!40000 ALTER TABLE `enderecos` DISABLE KEYS */;
set autocommit=0;
/*!40000 ALTER TABLE `enderecos` ENABLE KEYS */;
UNLOCK TABLES;
commit;

--
-- Table structure for table `favoritos`
--

DROP TABLE IF EXISTS `favoritos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `favoritos` (
  `id_favorito` int(11) NOT NULL AUTO_INCREMENT,
  `id_cliente` int(11) NOT NULL,
  `id_prestador` int(11) DEFAULT NULL,
  `id_servico` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_favorito`),
  KEY `id_cliente` (`id_cliente`),
  KEY `id_prestador` (`id_prestador`),
  KEY `id_servico` (`id_servico`),
  CONSTRAINT `favoritos_ibfk_1` FOREIGN KEY (`id_cliente`) REFERENCES `usuarios` (`id_usuario`),
  CONSTRAINT `favoritos_ibfk_2` FOREIGN KEY (`id_prestador`) REFERENCES `usuarios` (`id_usuario`),
  CONSTRAINT `favoritos_ibfk_3` FOREIGN KEY (`id_servico`) REFERENCES `servicos` (`id_servico`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favoritos`
--

LOCK TABLES `favoritos` WRITE;
/*!40000 ALTER TABLE `favoritos` DISABLE KEYS */;
set autocommit=0;
/*!40000 ALTER TABLE `favoritos` ENABLE KEYS */;
UNLOCK TABLES;
commit;

--
-- Table structure for table `historico_pontos`
--

DROP TABLE IF EXISTS `historico_pontos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `historico_pontos` (
  `id_historico` int(11) NOT NULL AUTO_INCREMENT,
  `id_usuario` int(11) NOT NULL,
  `pontos` int(11) NOT NULL,
  `motivo` varchar(255) DEFAULT NULL,
  `data_registro` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id_historico`),
  KEY `id_usuario` (`id_usuario`),
  CONSTRAINT `historico_pontos_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `historico_pontos`
--

LOCK TABLES `historico_pontos` WRITE;
/*!40000 ALTER TABLE `historico_pontos` DISABLE KEYS */;
set autocommit=0;
/*!40000 ALTER TABLE `historico_pontos` ENABLE KEYS */;
UNLOCK TABLES;
commit;

--
-- Table structure for table `mensagens`
--

DROP TABLE IF EXISTS `mensagens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `mensagens` (
  `id_mensagem` int(11) NOT NULL AUTO_INCREMENT,
  `id_conversa` int(11) NOT NULL,
  `id_remetente` int(11) NOT NULL,
  `conteudo` text DEFAULT NULL,
  `data_envio` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id_mensagem`),
  KEY `id_conversa` (`id_conversa`),
  KEY `id_remetente` (`id_remetente`),
  CONSTRAINT `mensagens_ibfk_1` FOREIGN KEY (`id_conversa`) REFERENCES `conversas` (`id_conversa`),
  CONSTRAINT `mensagens_ibfk_2` FOREIGN KEY (`id_remetente`) REFERENCES `usuarios` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mensagens`
--

LOCK TABLES `mensagens` WRITE;
/*!40000 ALTER TABLE `mensagens` DISABLE KEYS */;
set autocommit=0;
/*!40000 ALTER TABLE `mensagens` ENABLE KEYS */;
UNLOCK TABLES;
commit;

--
-- Table structure for table `metodos_pagamento`
--

DROP TABLE IF EXISTS `metodos_pagamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `metodos_pagamento` (
  `id_metodo` int(11) NOT NULL AUTO_INCREMENT,
  `id_cliente` int(11) NOT NULL,
  `tipo` enum('cartao','pix','boleto','paypal') NOT NULL,
  `dados_pagamento` text DEFAULT NULL,
  `data_cadastro` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id_metodo`),
  KEY `id_cliente` (`id_cliente`),
  CONSTRAINT `metodos_pagamento_ibfk_1` FOREIGN KEY (`id_cliente`) REFERENCES `usuarios` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `metodos_pagamento`
--

LOCK TABLES `metodos_pagamento` WRITE;
/*!40000 ALTER TABLE `metodos_pagamento` DISABLE KEYS */;
set autocommit=0;
/*!40000 ALTER TABLE `metodos_pagamento` ENABLE KEYS */;
UNLOCK TABLES;
commit;

--
-- Table structure for table `pedidos`
--

DROP TABLE IF EXISTS `pedidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedidos` (
  `id_pedido` int(11) NOT NULL AUTO_INCREMENT,
  `id_cliente` int(11) NOT NULL,
  `id_prestador` int(11) NOT NULL,
  `id_servico` int(11) NOT NULL,
  `data_solicitacao` datetime DEFAULT current_timestamp(),
  `status` enum('pendente','em_progresso','concluido','cancelado') DEFAULT 'pendente',
  PRIMARY KEY (`id_pedido`),
  KEY `id_cliente` (`id_cliente`),
  KEY `id_prestador` (`id_prestador`),
  KEY `id_servico` (`id_servico`),
  CONSTRAINT `pedidos_ibfk_1` FOREIGN KEY (`id_cliente`) REFERENCES `usuarios` (`id_usuario`),
  CONSTRAINT `pedidos_ibfk_2` FOREIGN KEY (`id_prestador`) REFERENCES `usuarios` (`id_usuario`),
  CONSTRAINT `pedidos_ibfk_3` FOREIGN KEY (`id_servico`) REFERENCES `servicos` (`id_servico`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedidos`
--

LOCK TABLES `pedidos` WRITE;
/*!40000 ALTER TABLE `pedidos` DISABLE KEYS */;
set autocommit=0;
/*!40000 ALTER TABLE `pedidos` ENABLE KEYS */;
UNLOCK TABLES;
commit;

--
-- Table structure for table `perfis_cliente`
--

DROP TABLE IF EXISTS `perfis_cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `perfis_cliente` (
  `id_cliente` int(11) NOT NULL,
  `telefone` varchar(20) DEFAULT NULL,
  `data_nascimento` date DEFAULT NULL,
  `genero` enum('masculino','feminino','outro') DEFAULT NULL,
  `preferencias` text DEFAULT NULL,
  PRIMARY KEY (`id_cliente`),
  CONSTRAINT `perfis_cliente_ibfk_1` FOREIGN KEY (`id_cliente`) REFERENCES `usuarios` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `perfis_cliente`
--

LOCK TABLES `perfis_cliente` WRITE;
/*!40000 ALTER TABLE `perfis_cliente` DISABLE KEYS */;
set autocommit=0;
/*!40000 ALTER TABLE `perfis_cliente` ENABLE KEYS */;
UNLOCK TABLES;
commit;

--
-- Table structure for table `perfis_prestador`
--

DROP TABLE IF EXISTS `perfis_prestador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `perfis_prestador` (
  `id_prestador` int(11) NOT NULL,
  `nome_profissional` varchar(100) DEFAULT NULL,
  `descricao` text DEFAULT NULL,
  `avaliacao_media` decimal(3,2) DEFAULT 0.00,
  `servicos_concluidos` int(11) DEFAULT 0,
  PRIMARY KEY (`id_prestador`),
  CONSTRAINT `perfis_prestador_ibfk_1` FOREIGN KEY (`id_prestador`) REFERENCES `usuarios` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `perfis_prestador`
--

LOCK TABLES `perfis_prestador` WRITE;
/*!40000 ALTER TABLE `perfis_prestador` DISABLE KEYS */;
set autocommit=0;
/*!40000 ALTER TABLE `perfis_prestador` ENABLE KEYS */;
UNLOCK TABLES;
commit;

--
-- Table structure for table `postagens`
--

DROP TABLE IF EXISTS `postagens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `postagens` (
  `id_postagem` int(11) NOT NULL AUTO_INCREMENT,
  `id_usuario` int(11) NOT NULL,
  `titulo` varchar(150) DEFAULT NULL,
  `conteudo` text DEFAULT NULL,
  `data_postagem` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id_postagem`),
  KEY `id_usuario` (`id_usuario`),
  CONSTRAINT `postagens_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `postagens`
--

LOCK TABLES `postagens` WRITE;
/*!40000 ALTER TABLE `postagens` DISABLE KEYS */;
set autocommit=0;
/*!40000 ALTER TABLE `postagens` ENABLE KEYS */;
UNLOCK TABLES;
commit;

--
-- Table structure for table `reacoes`
--

DROP TABLE IF EXISTS `reacoes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `reacoes` (
  `id_reacao` int(11) NOT NULL AUTO_INCREMENT,
  `id_postagem` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `tipo` enum('curtir','amei','triste','raiva','surpreso') DEFAULT 'curtir',
  `data_reacao` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id_reacao`),
  KEY `id_postagem` (`id_postagem`),
  KEY `id_usuario` (`id_usuario`),
  CONSTRAINT `reacoes_ibfk_1` FOREIGN KEY (`id_postagem`) REFERENCES `postagens` (`id_postagem`),
  CONSTRAINT `reacoes_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reacoes`
--

LOCK TABLES `reacoes` WRITE;
/*!40000 ALTER TABLE `reacoes` DISABLE KEYS */;
set autocommit=0;
/*!40000 ALTER TABLE `reacoes` ENABLE KEYS */;
UNLOCK TABLES;
commit;

--
-- Table structure for table `saldo_pontos`
--

DROP TABLE IF EXISTS `saldo_pontos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `saldo_pontos` (
  `id_usuario` int(11) NOT NULL,
  `saldo` int(11) DEFAULT 0,
  PRIMARY KEY (`id_usuario`),
  CONSTRAINT `saldo_pontos_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `saldo_pontos`
--

LOCK TABLES `saldo_pontos` WRITE;
/*!40000 ALTER TABLE `saldo_pontos` DISABLE KEYS */;
set autocommit=0;
/*!40000 ALTER TABLE `saldo_pontos` ENABLE KEYS */;
UNLOCK TABLES;
commit;

--
-- Table structure for table `servicos`
--

DROP TABLE IF EXISTS `servicos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `servicos` (
  `id_servico` int(11) NOT NULL AUTO_INCREMENT,
  `id_prestador` int(11) NOT NULL,
  `id_categoria` int(11) NOT NULL,
  `descricao` text DEFAULT NULL,
  `preco` decimal(10,2) DEFAULT NULL,
  `duracao_minutos` int(11) DEFAULT NULL,
  `disponibilidade` text DEFAULT NULL,
  PRIMARY KEY (`id_servico`),
  KEY `id_prestador` (`id_prestador`),
  KEY `id_categoria` (`id_categoria`),
  CONSTRAINT `servicos_ibfk_1` FOREIGN KEY (`id_prestador`) REFERENCES `usuarios` (`id_usuario`),
  CONSTRAINT `servicos_ibfk_2` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id_categoria`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servicos`
--

LOCK TABLES `servicos` WRITE;
/*!40000 ALTER TABLE `servicos` DISABLE KEYS */;
set autocommit=0;
/*!40000 ALTER TABLE `servicos` ENABLE KEYS */;
UNLOCK TABLES;
commit;

--
-- Table structure for table `solicitacoes_saque`
--

DROP TABLE IF EXISTS `solicitacoes_saque`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `solicitacoes_saque` (
  `id_saque` int(11) NOT NULL AUTO_INCREMENT,
  `id_usuario` int(11) NOT NULL,
  `valor` decimal(10,2) NOT NULL,
  `status` enum('pendente','aprovado','recusado') DEFAULT 'pendente',
  `data_solicitacao` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id_saque`),
  KEY `id_usuario` (`id_usuario`),
  CONSTRAINT `solicitacoes_saque_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `solicitacoes_saque`
--

LOCK TABLES `solicitacoes_saque` WRITE;
/*!40000 ALTER TABLE `solicitacoes_saque` DISABLE KEYS */;
set autocommit=0;
/*!40000 ALTER TABLE `solicitacoes_saque` ENABLE KEYS */;
UNLOCK TABLES;
commit;

--
-- Table structure for table `transacoes_carteira`
--

DROP TABLE IF EXISTS `transacoes_carteira`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `transacoes_carteira` (
  `id_transacao` int(11) NOT NULL AUTO_INCREMENT,
  `id_carteira` int(11) NOT NULL,
  `tipo` enum('deposito','pagamento','transferencia','reembolso') NOT NULL,
  `valor` decimal(10,2) NOT NULL,
  `data_transacao` datetime DEFAULT current_timestamp(),
  `descricao` text DEFAULT NULL,
  PRIMARY KEY (`id_transacao`),
  KEY `id_carteira` (`id_carteira`),
  CONSTRAINT `transacoes_carteira_ibfk_1` FOREIGN KEY (`id_carteira`) REFERENCES `carteiras` (`id_carteira`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transacoes_carteira`
--

LOCK TABLES `transacoes_carteira` WRITE;
/*!40000 ALTER TABLE `transacoes_carteira` DISABLE KEYS */;
set autocommit=0;
/*!40000 ALTER TABLE `transacoes_carteira` ENABLE KEYS */;
UNLOCK TABLES;
commit;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `senha_hash` varchar(255) NOT NULL,
  `tipo_usuario` enum('cliente','prestador','administrador') NOT NULL,
  `data_cadastro` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
set autocommit=0;
INSERT INTO `usuarios` VALUES
(1,'arthur','arthur@gmail.com','$2b$10$Nr.l50CCuryOKvmwdvU/NOJ02twrrAqPsl1/rogkiTRQuRBy9Wvi6','cliente','2025-11-02 16:48:37');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
commit;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*M!100616 SET NOTE_VERBOSITY=@OLD_NOTE_VERBOSITY */;

-- Dump completed on 2025-11-02 21:59:56
