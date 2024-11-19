/**
ATIVIDADE PRÁTICA AVALIATIVA
Turma: 3B2
Alunos:
Letícia Flôr de Castro Mattedi
*/

import express from "express";
import cors from "cors";
import handlerError from "./middleware/handler-error";
import influencersRoutes from './router/influencers-Routes';

const port = process.env.WS_PORT ?
    parseInt(process.env.WS_PORT) :
    3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", influencersRoutes);
app.use(handlerError());

app.listen(port, () => {
    console.log(`Servidor web sendo executado na porta ${port}`);
});