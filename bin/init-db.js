const readline = require('readline')
// Inicializar la base de datos con los datos mínimos para funcionar

// Cargamos los modelos
const Anuncio = require('../models/Anuncio');

console.log("Initializing DB");

async function main() {
    // Preguntar al usuario si está seguro
    const continuar = await preguntaSiNo('Estas seguro, seturo que quieres borrar la bade de datos? [n]')
    if (!continuar) {
        process.exit();
    }

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
            ,
            {
            "nombre": "iPhone 4G",
            "venta": false,
            "precio": 100.00,
            "foto": "iphone.png",
            "tags": [ "lifestyle", "mobile"]
            }
            ,
            {
            "nombre": "iPhone 5GX",
            "venta": false,
            "precio": 150.00,
            "foto": "iphone.png",
            "tags": [ "lifestyle", "mobile"]
            }
            ,
            {
            "nombre": "iPhone 6GSX",
            "venta": false,
            "precio": 250.00,
            "foto": "iphone.png",
            "tags": [ "lifestyle", "mobile"]
            }
            ,
            {
            "nombre": "iPhone 7G",
            "venta": false,
            "precio": 350.00,
            "foto": "iphone.png",
            "tags": [ "lifestyle", "mobile"]
            }
            ,
            {
            "nombre": "iPhone 8",
            "venta": false,
            "precio": 450.00,
            "foto": "iphone.png",
            "tags": [ "lifestyle", "mobile"]
            }
            ,
            {
            "nombre": "iPhone 9",
            "venta": false,
            "precio": 550.00,
            "foto": "iphone.png",
            "tags": [ "lifestyle", "mobile"]
            }
            ,
            {
            "nombre": "iPhone 10",
            "venta": false,
            "precio": 650.00,
            "foto": "iphone.png",
            "tags": [ "lifestyle", "mobile"]
            }
            ,
            {
            "nombre": "iPhone i11",
            "venta": false,
            "precio": 750.00,
            "foto": "iphone.png",
            "tags": [ "lifestyle", "mobile"]
            }
            
    ]);
    
    console.log(`Creados ${inserted.length} anuncios`)
    process.exit();
}

main().catch(err => console.log('Hubo un error', err));

async function preguntaSiNo(texto) {
    return new Promise((resolve, reject) => {
        const interface = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        interface.question(texto, respuesta => {
            if (respuesta.toLowerCase() === 'si') {
                resolve(true);
                return;
            }
            resolve(false);
        })
    })
}

