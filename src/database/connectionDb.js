const mongoose = require('mongoose');

let uri = 'mongodb+srv://root:root@cluster0-zcfsf.mongodb.net/ad-2019?retryWrites=true&w=majority';

mongoose.connect(uri, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('error', err => {
    console.error('Erro na Conexao')
    console.error(err);
    process.exit(1)
})

mongoose.connection.on('connected', () => {
    console.log(`Conectado na uri: ${uri}`)
})