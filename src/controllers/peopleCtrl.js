const People = require('../models/People');
const sendEmail = require('../controllers/sendEmail');
const getDateTime = require('../utilities/getDateTime')

const people = new People();

async function insertPeoples(req, res) {
    const reqPeople = req.body;
    const insertPeople = await people.newPeople(reqPeople);

    if(insertPeople.return) {
        await sendEmail.newPeople(reqPeople.pe_name, reqPeople.pe_qtd_convidados, getDateTime.getDateTime());
        console.log(`Nova confirmação de presença de ${reqPeople.pe_name} - ${getDateTime.getDateTime()}`);
        sendResponse(res, 201, insertPeople);
    } else {
        sendResponse(res, 500, insertPeople);
    }
}

async function getListOfPeoples(req, res) {
    const data = await people.listOfPeople();

    if(data.return) {
        sendResponse(res, 201, data.listPeople);
    } else {
        sendResponse(res, 500, data);
    }
}


function sendResponse(res, statusCode, data) {
    res.status(statusCode).json(data);
}

module.exports = { 
    insertPeoples,
    getListOfPeoples
 }