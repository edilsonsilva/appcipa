const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("combined"));




const urldb = "mongodb+srv://acesso:Alunos123@clusterapi.cdc4jmv.mongodb.net/cipadb?retryWrites=true&w=majority";
mongoose.connect(urldb, { useNewUrlParser: true, useUnifiedTopology: true });


const schemaNoticias = new mongoose.Schema({
    titulo: { type: String, required: true },
    autor: { type: String},
    datanoticia: { type: String},
    textonoticia: { type: String },
    imagem: { type: String },
    fonte: { type: String}
});

const Noticias = mongoose.model("Noticias", schemaNoticias);

const schemaUnidade = new mongoose.Schema({
    nomeunidade: { type: String, required: true },
    porteunidade: { type: String},
    numerofuncionarios: { type: Number},
    numeroterceiros: { type: Number },
    endereco: { type: String },
    fotounidade: { type: String}
});

const Unidade = mongoose.model("Unidade", schemaUnidade);

const schemaMembro = new mongoose.Schema({
    nomemembro: { type: String, required: true },
    titulomembro: { type: String},
    anogestao: { type: String},
    cargo: { type: String },
    foto: { type: String }
});

const Membro = mongoose.model("Membro", schemaMembro);

const schemaCalendario = new mongoose.Schema({
    mes: { type: String, required: true },
    dia: { type: Number},
    ano: { type: Number},
    evento: { type: String }
});

const Calendario = mongoose.model("Calendario", schemaCalendario);


app.get("/noticia/listar", (req, res) => {
    Noticias.find().then((result) => {
        res.status(200).send({ output: "ok", payload: result });
    }).catch((erro) => {
        res.status(500).send({ output: `Erro ao processar dados -> ${erro}` });
    });
});

app.post("/noticia/inserir", (req, res) => {
    const dados = new Noticias(req.body);
    dados.save().then((result) => {
        res.status(201).send({ output: `Cadastro realizado`, payload: result });
    }).catch((erro) => {
        res.status(500).send({ output: `Erro ao cadastrar -> ${erro}` })
    });
});

app.put("/noticia/atualizar/:id", (req, res) => {
    Noticias.findByIdAndUpdate(req.params.id,req.body,{new:true}).then((result)=>{
        if(!result){
            return res.status(400).send({output:`Não foi possível atualizar`});
        }
        res.status(202).send({output:`Atualizado`,payload:result});
    }).catch((erro)=>{
        res.status(500).send({output:`Erro ao processar a solicitação -> ${erro}`});
    });
});


app.delete("/noticia/apagar/:id", (req, res) => {
    Noticias.findByIdAndDelete(req.params.id).then((result)=>{
        res.status(204).send({payload:result});
    }).catch((erro)=>console.log(`Erro ao tentar apagar -> ${erro}`));
});



//========================== Unidades ======================================================================


app.get("/unidade/listar", (req, res) => {
  Unidade.find().then((result) => {
      res.status(200).send({ output: "ok", payload: result });
  }).catch((erro) => {
      res.status(500).send({ output: `Erro ao processar dados -> ${erro}` });
  });
});

app.post("/unidade/inserir", (req, res) => {
  const dados = new Unidade(req.body);
  dados.save().then((result) => {
      res.status(201).send({ output: `Cadastro realizado`, payload: result });
  }).catch((erro) => {
      res.status(500).send({ output: `Erro ao cadastrar -> ${erro}` })
  });
});

app.put("/unidade/atualizar/:id", (req, res) => {
  Unidade.findByIdAndUpdate(req.params.id,req.body,{new:true}).then((result)=>{
      if(!result){
          return res.status(400).send({output:`Não foi possível atualizar`});
      }
      res.status(202).send({output:`Atualizado`,payload:result});
  }).catch((erro)=>{
      res.status(500).send({output:`Erro ao processar a solicitação -> ${erro}`});
  });
});


app.delete("/unidade/apagar/:id", (req, res) => {
  Unidade.findByIdAndDelete(req.params.id).then((result)=>{
      res.status(204).send({payload:result});
  }).catch((erro)=>console.log(`Erro ao tentar apagar -> ${erro}`));
});





//========================== Membros ======================================================================


app.get("/membro/listar", (req, res) => {
  Membro.find().then((result) => {
      res.status(200).send({ output: "ok", payload: result });
  }).catch((erro) => {
      res.status(500).send({ output: `Erro ao processar dados -> ${erro}` });
  });
});

app.post("/membro/inserir", (req, res) => {
  const dados = new Membro(req.body);
  dados.save().then((result) => {
      res.status(201).send({ output: `Cadastro realizado`, payload: result });
  }).catch((erro) => {
      res.status(500).send({ output: `Erro ao cadastrar -> ${erro}` })
  });
});

app.put("/membro/atualizar/:id", (req, res) => {
  Membro.findByIdAndUpdate(req.params.id,req.body,{new:true}).then((result)=>{
      if(!result){
          return res.status(400).send({output:`Não foi possível atualizar`});
      }
      res.status(202).send({output:`Atualizado`,payload:result});
  }).catch((erro)=>{
      res.status(500).send({output:`Erro ao processar a solicitação -> ${erro}`});
  });
});


app.delete("/membro/apagar/:id", (req, res) => {
  Membro.findByIdAndDelete(req.params.id).then((result)=>{
      res.status(204).send({payload:result});
  }).catch((erro)=>console.log(`Erro ao tentar apagar -> ${erro}`));
});



//======================= calendário ==================================================================================

app.get("/calendario/listar", (req, res) => {
  Calendario.find().then((result) => {
      res.status(200).send({ output: "ok", payload: result });
  }).catch((erro) => {
      res.status(500).send({ output: `Erro ao processar dados -> ${erro}` });
  });
});

app.post("/calendario/inserir", (req, res) => {
  const dados = new Calendario(req.body);
  dados.save().then((result) => {
      res.status(201).send({ output: `Cadastro realizado`, payload: result });
  }).catch((erro) => {
      res.status(500).send({ output: `Erro ao cadastrar -> ${erro}` })
  });
});

app.put("/calendario/atualizar/:id", (req, res) => {
  Calendario.findByIdAndUpdate(req.params.id,req.body,{new:true}).then((result)=>{
      if(!result){
          return res.status(400).send({output:`Não foi possível atualizar`});
      }
      res.status(202).send({output:`Atualizado`,payload:result});
  }).catch((erro)=>{
      res.status(500).send({output:`Erro ao processar a solicitação -> ${erro}`});
  });
});


app.delete("/calendario/apagar/:id", (req, res) => {
  Calendario.findByIdAndDelete(req.params.id).then((result)=>{
      res.status(204).send({payload:result});
  }).catch((erro)=>console.log(`Erro ao tentar apagar -> ${erro}`));
});




app.use((req, res) => {
    res.type("application/json");
    res.status(404).send("404 - Not Found");
});

app.listen(port,()=>console.log(`Servidor online na porta ${port}`));

