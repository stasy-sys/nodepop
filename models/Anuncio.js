'use strict'

const mongoose = require('mongoose');

// definir el esquema de los anuncios
const anuncioSchema = mongoose.Schema({
    nombre: String,
    venta: Boolean,
    precio: Number,
    foto: String,
    tags: [String]
})
anuncioSchema.statics.lista = function(filtro) {
    const query = Anuncio.find(filtro);
    return query.exec()
}

// crear el modelo
const Anuncio = mongoose.model('Anuncio', anuncioSchema);


// exportar el modelo
module.exports = Anuncio;