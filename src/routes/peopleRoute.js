const express = require('express');
const people = express.Router();
const peopleCtrl = require('../controllers/peopleCtrl');

people.post('/insere-pessoa', peopleCtrl.insertPeoples);
people.post('/lista-pessoas', peopleCtrl.getListOfPeoples);

module.exports = people;