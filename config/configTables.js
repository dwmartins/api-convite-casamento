const Database = require('./db');
const NewTablePeoples = require('../src/tables/peoples');

const tablePeoples = new NewTablePeoples;

async function createTablePeoples() {
    try {
        await tablePeoples.createAll();
    } catch (error) {
        console.log(`Erro ao criar as tabelas referente aos usuários: ${error}`);
    }
}


async function createAll() {
    console.log(`Iniciando configurações do banco de dados`);
    await createTablePeoples();
    console.log(`Configurações do banco de dados finalizado com sucesso`);
}

module.exports = { createAll }