'use strict'

const express = require('express');
const { route } = require('..');
const router = express.Router();
const Anuncio = require('../../models/Anuncio');

// Get /api/anuncios
// Devuelve una lista de anuncios
router.get('/', async (req, res, next) => {
    try {
        // filtros
        const nombre = req.query.nombre;

        const filtro = {};

        if (nombre) { //api/agentes?nombre=Bicicleta
            filtro.nombre = nombre;
        }

        const anuncios = await Anuncio.lista(filtro);

        res.json({ result: anuncios});
    } catch (err) {
        next(err);
    }
})

module.exports = router;