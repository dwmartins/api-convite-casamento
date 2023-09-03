require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT;
const peopleRouter = require('./src/routes/peopleRoute');
require('./config/db');

const corsOptions = {
  origin: 'https://convite-casamento-front.vercel.app',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).sendFile(__dirname + '/index.html');
});

app.use('/', peopleRouter);

app.use((req, res, next) => {
    const error = new Error('Rota não encontrada.');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    const statusCode = error.status || 500;
    const errorMessage = error.message || `Erro interno do servidor`;

    console.log(`Erro ${statusCode}: ${errorMessage}`);

    res.status(statusCode).json({
        error: errorMessage
    })
})

app.listen(PORT, () => {
    console.log(`Servidor em execução na porta: ${PORT}`);
})