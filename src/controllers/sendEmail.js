const Nodemailer = require('../models/nodeMailer');
const fs = require('fs');

const sendEmail = new Nodemailer();

function newPeople(name, qtdPeople, dateTime) {

   fs.readFile('src/formatEmail/newPeople.html', 'utf8', (err, data) => {
    if (err) {
        console.log(`error reading email sending html: ${err}`);
        return;
    }

    const modifiedEmail = data.replace('$userName', name)
                            .replace('$qtdPeoples', qtdPeople)
                            .replace('$dateTime', dateTime)

    const subject = "Nova confirmação de presença";

    sendEmail.sendEmail(subject, modifiedEmail);
   });
};

module.exports = { newPeople};