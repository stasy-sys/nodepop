// Inicializar la base de datos con los datos mínimos para funcionar

// Cargamos los modelos
const Anuncio = require('../models/Anuncio');

console.log("Initializing DB");

async function main() {
    // Preguntar al usuario si está seguro
    // TODO

    // Connectar a la base de datos
    const connection = require('../lib/connectMongoose');

    // Inicializar la collección de anuncios
    await initAnuncios();

    // Desconectamos de la base de datos
    connection.close();
}

async function initAnuncios() {
    // borrar todos los documentos de la colección de anuncios
    const result = await Anuncio.deleteMany();
    console.log(`Eliminados ${result.deletedCount} anuncios.`)

    // crear anuncios iniciales
    const inserted = await Anuncio.insertMany([
        {
            "nombre": "Bicicleta",
            "venta": true,
            "precio": 230.15,
            "foto": "bici.jpg",
            "tags": [ "lifestyle", "motor"]
            },
            {
            "nombre": "iPhone 3GS",
            "venta": false,
            "precio": 50.00,
            "foto": "iphone.png",
            "tags": [ "lifestyle", "mobile"]
            }
    ]);
    
    console.log(`Creados ${inserted.length} anuncios`)
    process.exit();
}

main().catch(err => console.log('Hubo un error', err));


