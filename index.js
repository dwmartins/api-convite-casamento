'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT;
require('./config/db');

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.status(200).sendFile(__dirname + '/index.html');
});

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