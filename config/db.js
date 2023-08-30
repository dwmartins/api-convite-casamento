require('dotenv').config();
const mysql = require('mysql2/promise');
const logger = require('./logger');

class DatabaseConnection {
    poo;

    constructor() {
        this.pool = mysql.createPool({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE
        });
    }

    async connect() {
        try {
            await this.pool.query('SELECT 1+1');
            console.log(`Conexão com o banco de dados estabelecida com sucesso.`);

            return this.pool;
        } catch (error) {
            console.log(`Erro ao conectar com o banco de dados: ${error}`);
            logger.error(error)
            throw error;
        }
    }
}

const conn = new DatabaseConnection;
conn.connect();

module.exports = DatabaseConnection;