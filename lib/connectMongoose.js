'use strict'

const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

mongoose.connection.on('error', err => {
    console.log('Error de conexión a MongoDB', err);
    process.exit(1);
});

mongoose.connection.once('open', () => {
    console.log('Connectado a MongoDB en', mongoose.connection.name);
});

mongoose.connect(process.env.MONGODB || 'mongodb://localhost:27017/nodepop')

module.exports = mongoose.connection;