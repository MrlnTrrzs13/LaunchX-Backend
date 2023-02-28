let express = require('express');
let app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Leer
app.get('/', function(req, res) {
    res.send("Hola mundo");
});

//Crear
app.post('/', function(req, res) {
    res.send(`Te llamas ${req.body.name}`)
});

//Actualizar
app.put('/', function(req, res) {
    res.send(`Has actualizado el registro: ${req.body.name}`)
});

//Eliminar
app.delete('/users', function(req, res) {
    res.send(`Has eliminado el registro: ${req.query.user}`)
});

let server =app.listen(8080, function() {
    let host =server.address(). address;
    let port =server.address().port;

    console.log("Aplicación escuchando en http://%s:%s", host, port);
});