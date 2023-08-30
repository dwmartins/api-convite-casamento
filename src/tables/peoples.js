const Database = require('../../config/db');
const db = new Database;

class NewTablePeoples {
    
    async tablePeoples() {
        try {
            await db.pool.query(`
                CREATE TABLE IF NOT EXISTS peoples (
                    pe_id INT AUTO_INCREMENT PRIMARY KEY,
                    pe_name VARCHAR(50) NOT NULL,
                    pe_qtd_convidados INT,
                    createdAt DATETIME,
                    updateAt DATETIME
                )`
            );
        } catch (error) {
            console.log(`Erro ao criar a tabela de Pessoas: ${error}`);
        }
    }

    async createAll() {
        await this.tablePeoples();
    }
}

const table = new NewTablePeoples;
table.createAll()

module.exports = NewTablePeoples