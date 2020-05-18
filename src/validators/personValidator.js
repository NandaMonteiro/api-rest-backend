const { body } = require('express-validator');

module.exports = [
    body('name')
        .notEmpty()
        .trim()
        .withMessage('Name não pode estar vazio'),
    body('email')
        .notEmpty()
        .isEmail()
        .withMessage('Email deve ser valido'),
];