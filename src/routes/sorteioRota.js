const express = require('express')
const router = express.Router();

const DrawController = require('../controllers/sorteioController');

const BASE_URL = '/api/sorteio';

router.get(BASE_URL, DrawController.sorteio);

module.exports = router;