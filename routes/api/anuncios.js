'use strict'

const express = require('express');
const router = express.Router();
const Anuncio = require('../../models/Anuncio');

// Get /api/anuncios
// Devuelve una lista de anuncios