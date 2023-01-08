# nodepop
Práctica WEB-API/Node.js/MongoDB

Deployment:
-----------

1. Install dependencies
```sh
npm install
```

2. Configure DB. Change depending on where your DB is deployed
```
export MONGODB="mongodb://localhost:27017/nodepop"
```

3. Load initial data to database:
```sh
npm run init-db
```

4. Start the application in development with:
```sh
npm run start
```

API
---
### nombre:
Filtra elementos que comiencen por nombre
ejemplo:/api/anuncios?nombre=Bici

### tipo:
Filtra elementos por su tipo. Valores válidos: venta, búsqueda
ejemplo:/api/anuncios?tipo=venta

### tags:
Filtra elementos que contengan todas las tags.
ejemplo:/api/anuncios?tags=lifestyle&tags=motor

### precio_minimo:
Filtra elementos con precio igual o mayor a precio_minimo
ejemplo:/api/anuncios?precio_minimo=100

### precio_maximo:
Filtra elementos con precio igual o menor a precio_maximo
ejemplo:/api/anuncios?precio_maximo=100

### page:
Número de página. Primera página: page=1. Por defecto es 1
ejemplo:/api/anuncios?page=2

### limit:
Límite. Por defecto es 10.
ejemplo:/api/anuncios?limit=5

