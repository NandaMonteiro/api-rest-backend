const express = require('express')
const router = express.Router();

//const personValidatior = require('../validators/personValidator');
const errorsMiddleware = require('../middlewares/errorsMiddleware')

const PersonController = require('../controllers/pessoaController');

const BASE_URL = '/api/pessoa';

router.post(BASE_URL, errorsMiddleware, PersonController.create);
router.get(BASE_URL, PersonController.read);
router.put(`${BASE_URL}/:id`, errorsMiddleware, PersonController.update);
router.delete(`${BASE_URL}/:id`, PersonController.remove);

module.exports = router;