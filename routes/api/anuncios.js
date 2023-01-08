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
        const tipo = req.query.tipo;
        const tags = req.query.tags;
        const precio_minimo =  req.query.precio_minimo;
        const precio_maximo =  req.query.precio_maximo;

        // paginación
        const page = req.query.page || 1;
        const limit = req.query.limit || 10;

        const filtro = {};

        if (nombre) {
            filtro.nombre = {$regex: "^" + nombre};
        }

        if (tipo == "venta") {
            filtro.venta = true;
        } else if (tipo == "búsqueda") {
            filtro.venta = false;
        }

        if(tags) {
            filtro.tags = {$all: tags };
        }

        if(precio_minimo) {
            filtro.precio = {$gte: precio_minimo };
        }
    
        if(precio_maximo) {
            if (precio_minimo) {
                filtro.precio = {$gte: precio_minimo, $lte: precio_maximo };
            } else {
                filtro.precio = {$lte: precio_maximo };
            }
        }

        const anuncios = await Anuncio.lista(filtro, (page-1)*limit, limit);

        res.json({ page: page, limit: limit, result: anuncios});
    } catch (err) {
        next(err);
    }
})

module.exports = router;