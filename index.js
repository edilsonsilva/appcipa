const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cors());

app.get("/teste", (req, res) => {
  res.status(200).send({ output: "Tudo funcionando" });
});
app.get("/", (req, res) => {
  res.status(200).send({ output: "Tudo funcionando - nova rota na raiz" });
});
// const conexao = mysql.createConnection({
//     host:"127.0.0.1",
//     user:"root",
//     password:"Alunos@123",
//     database:"cipadb",
//     port:"6556"
// });

// conexao.connect((error)=>{
//     if(error) return console.error(`Erro ao estabelecer a conexão com o banco -> ${error}`)
//     else console.log(`Conexão com o banco estabelecida -> ${conexao.threadId}`)
// })

// app.get("/noticia/listar",(req,res)=>{
//     conexao.query("Select * from noticia order by idnoticia desc",(error,result)=>{
//         if(!error){
//             res.status(200).send({output:"Ok",payload:result})
//         }
//         else{
//             return res.status(500).send({output:"Erro",erro:error})
//         }
//     });
// });

app.listen(port,()=>console.log(`Servidor online na porta ${port}`));

