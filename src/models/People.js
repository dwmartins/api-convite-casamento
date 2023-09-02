const DataBase = require('../../config/db');

class People {
    db;
    sql;
    listPeople;

    constructor() {
        this.db = new DataBase;
    }

    async newPeople(people) {
        try {
            this.sql = `INSERT INTO peoples (pe_name, pe_qtd_convidados, createdAt)
                        VALUES (?, ?, ?);`;

            const values = [ people.pe_name, people.pe_qtd_convidados, new Date()];
            await this.db.pool.query(this.sql, values);

            return {return: true, msg: `Dados inseridos com sucesso.`}
        } catch (error) {
            return {return: false, msg: `Erro ao inserir os dados, tente novamente.`}
        }
    }

    async listOfPeople() {
        try {
            this.listPeople = await this.db.pool.query('SELECT * FROM peoples');

            return {return: true, listPeople: this.listPeople[0]}
        } catch (error) {
            return {return: false, msg: error}
        }
    }
}

module.exports = People;