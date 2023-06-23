/* 2023-06-08 20:56:19 [40 ms] */ 
CREATE DATABASE cipadb
    DEFAULT CHARACTER SET = 'utf8mb4';
/* 2023-06-08 20:56:30 [3 ms] */ 
    use cipadb;
/* 2023-06-08 21:00:32 [58 ms] */ 
create table noticia(
    idnoticia BIGINT AUTO_INCREMENT PRIMARY key,
    titulo VARCHAR(100) not null,
    autor varchar(100),
    datanoticia varchar(20),
    textonoticia text not null,
    imagem varchar(255),
    fonte text
)engine innodb CHARACTER SET = 'utf8mb4';
/* 2023-06-08 21:07:09 [30 ms] */ 
INSERT INTO noticia(titulo,autor,datanoticia,textonoticia) VALUES(' Sustentabilidade em SST é importante para o trabalhador e o planeta ','Cipa & Incêndio','27 maio, 2023','Nunca se ouviu tanto falar da tríade Meio Ambiente, Social e Governança, sigla do ASG ou ESG (do inglês Environmental, Social and Governance). E não é para menos: estamos vivendo um mundo desafiador,nos debruçando em questões sobre saúde física e mental, especialmente após três anos intensos de pandemia da Covid-19. E os trabalhadores e empresas estão atentos a esse conceito: o“Panorama ESG Brasil 2023”, divulgado em abril pela Amcham (Câmara Americana de Comércio) e a startup Humanizadas, ouviu 574 executivos, 70% de médias e grandes corporações. Resultado: mais da metade das empresas deseja capacitar seus colaboradores (62%) para essa cultura, bem como desenvolver a diversidade e inclusão (58%), além de adotar políticas de remuneração justa (51%). “Ainda assim, só 20% priorizam investimentos a partir de critérios ESG e 16% utilizam certificações ou avaliações de rating ESG”, pontua o documento.');
/* 2023-06-08 21:08:02 [11 ms] */ 
UPDATE noticia SET imagem='https://revistacipa.com.br/wp-content/uploads/2023/05/sustentabilidade-em-sst-e-importante-para-o-trabalhador-e-o-planeta-revista-cipa-750x430.jpg',fonte='https://revistacipa.com.br/sustentabilidade-em-sst-e-importante-para-o-trabalhador-e-o-planeta/' WHERE `idnoticia`=1;
/* 2023-06-08 21:11:46 [13 ms] */ 
INSERT INTO noticia(titulo,autor,datanoticia,textonoticia,imagem,fonte) VALUES('Pesquisa mostra que 35% das empresas ainda não digitalizaram seus processos de SST','Cipa & Incêndio','20 maio, 2023','Mais de 22% das empresas ainda não possuem políticas de Saúde e Segurança do Trabalho, e mais de 35% ainda não digitalizaram seus processos de SST. Esse é o resultado de uma pesquisa realizada pela startup Indexmed. O levantamento entrevistou 267 companhias e outro dado pertinente é que 29,1% delas responderam não ter ferramenta digital para realizar a gestão das políticas e processos de SST.

 
Políticas de SST

 

Além do cumprimento da legislação vigente, trata-se de uma preocupação com a integridade física e a qualidade de vida do funcionário, alerta Renan Soloaga, CEO da Indexmed: “A pesquisa mostra que ainda existem organizações que estão negligenciando a importância de se aplicar políticas de SST”, frisa.','https://revistacipa.com.br/wp-content/uploads/2023/05/pesquisa-mostra-que-35-das-empresas-ainda-nao-digitalizaram-seus-processos-de-sst-revista-cipa-750x430.jpg','https://revistacipa.com.br/pesquisa-mostra-que-35-das-empresas-ainda-nao-digitalizaram-seus-processos-de-sst/');
/* 2023-06-08 21:14:14 [13 ms] */ 
INSERT INTO noticia(titulo,autor,datanoticia,textonoticia,imagem,fonte) VALUES('Monitoramento amplia a conscientização para evitar acidentes de trabalho','Cipa & Incêndio','20 maio, 2023','A Secretaria Municipal de Saúde (Semusa) de Porto Velho, RO, realiza o monitoramento das ocorrências registradas de acidentes laborais na capital e nos distritos. Em alusão ao Abril Verde, intensificou seu trabalho de conscientização por meio da informação.

O primeiro passo é receber das unidades de saúde que, independentemente de ser públicas ou privadas, devem encaminhar a Ficha Individual de Notificação (FIN) dados de pacientes e o diagnóstico apurado ou o acidente ocorrido. Os registros são direcionados para a Divisão de Controle de Doenças e Agravos de Notificação (DCDAN), que acompanha os acidentes de trabalho registrados em cada unidade.“Após a compilação desses dados, a Vigilância em Saúde do Trabalhador realiza a análise técnica e busca conhecer o perfil de morbimortalidade dos trabalhadores. Desta forma, é possível realizar ações preventivas no município”, afirma Raissa Almeida, gerente da Divisão.','https://revistacipa.com.br/wp-content/uploads/2023/05/monitoramento-amplia-a-conscientizacao-para-evitar-acidentes-de-trabalho-revista-cipa-750x430.jpg','https://revistacipa.com.br/monitoramento-amplia-a-conscientizacao-para-evitar-acidentes-de-trabalho/');
/* 2023-06-08 21:17:34 [14 ms] */ 
INSERT INTO noticia(fonte,autor,datanoticia,textonoticia,titulo) VALUES('https://revistacipa.com.br/gerenciamento-do-trabalho-remoto-e-otimizado-com-ferramentas-online/','Cipa & Incêndio','15 maio, 2023','O teletrabalho já está presente na rotina de muitos brasileiros, sendo adotado por 46% das empresas durante a crise sanitária, segundo a “Pesquisa Gestão de Pessoas na Crise Covid-19”, realizado pela FIA (Fundação Instituto de Administração).

Mesmo com os seus benefícios, o trabalho a distância representa desafios, sobretudo aos gestores. “A falta de comunicação face a face em contexto de sala ou reuniões, dificuldade em estabelecer confiança, diferenças culturais e falta de colaboração são alguns dos entraves”, afirma Nuno Nogueira, Founder e Owner da Merge-Time,consultoria em soluções de negócios, parceira da SISQUAL® WFM. Ele acrescenta que é necessário investir e estabelecer um protocolo de comunicação eficaz para garantir que a equipe esteja em sintonia, independentemente do seu horário de trabalho.','Gerenciamento do trabalho remoto é otimizado com ferramentas online');
/* 2023-06-08 21:21:14 [58 ms] */ 
create table unidade(
    idunidade int AUTO_INCREMENT PRIMARY KEY,
    nomeunidade VARCHAR(255),
    porteunidade VARCHAR(100),
    numerofuncionarios int,
    numeroterceiros int,
    endereco text,
    fotounidade text
)engine innodb CHARACTER SET = 'utf8mb4';
/* 2023-06-08 21:21:52 [3 ms] */ 
    use cipadb;
/* 2023-06-08 21:22:02 [49 ms] */ 
create table unidade(
    idunidade int AUTO_INCREMENT PRIMARY KEY,
    nomeunidade VARCHAR(255),
    porteunidade VARCHAR(100),
    numerofuncionarios int,
    numeroterceiros int,
    endereco text,
    fotounidade text
)engine innodb CHARACTER SET = 'utf8mb4';
/* 2023-06-08 21:25:04 [8 ms] */ 
    use cipadb;
/* 2023-06-08 21:25:05 [53 ms] */ 
create table membros(
    idmembro int AUTO_INCREMENT PRIMARY KEY,
    nomemembro VARCHAR(255),
    titulomembro VARCHAR(100),
    anogestao VARCHAR(20),
    cargo VARCHAR(50)
)engine innodb CHARACTER SET = 'utf8mb4';
/* 2023-06-08 21:28:16 [8 ms] */ 
    use cipadb;
/* 2023-06-08 21:28:18 [55 ms] */ 
create table calendario(
    idcalendario int AUTO_INCREMENT PRIMARY KEY,
    mes VARCHAR(20),
    dia int,
    ano int(20),
    evento VARCHAR(255)
)engine innodb CHARACTER SET = 'utf8mb4';
