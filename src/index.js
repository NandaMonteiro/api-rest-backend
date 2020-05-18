const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
require('./database/connectionDb');

const app = express();

const IndexRota = require('./routes/index');
const PessoaRota = require('./routes/pessoaRota');
const SorteioRota = require('./routes/sorteioRota');

app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.use(morgan('dev'));
app.use(helmet());
app.use(
    cors({
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    })
);

app.use(IndexRota);
app.use(PessoaRota);
app.use(SorteioRota);

app.listen(app.get('port'), () => {
    console.log(`Aplicacao rodando na porta  ${app.get('port')}`);
});
