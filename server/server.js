const express = require('express');
const app = express();

const bodyParser = require('body-parser');

// parsser application /x-www-form-urlencode
app.use(bodyParser.urlencoded({ extended: false}));

// parser application/json
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json('Hello Wolrd');
});

app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto:' + 3000);
});


// Usuario
app.get('/usuario', (req, res) => {
    res.json('Get Usuario');
});

app.post('/usuario', (req, res) => {
    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario',
            error: 'error en la peticion'
        });
    } else {
        res.json({
            mensaje: 'Post Usuario',
            body
        });
    }
});

app.put('/usuario/:id', (req, res) => {
    
    res.json({
        mensaje: 'Put Usuario',
        id
    });
});

app.delete('/usuario/;id', (req, res) => {
    let id = req.params.id;
    res.json({
        mensaje: 'Delete Usuario',
        id
    });
});