const express = require('express');
const people = express.Router();
const peopleCtrl = require('../controllers/peopleCtrl');

people.post('/insere-pessoa', peopleCtrl.insertPeoples);

module.exports = people;