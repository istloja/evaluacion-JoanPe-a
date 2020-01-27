var pais = require('../models/provincia'),
    express = require('express'),
    router = express.Router();

router.get('/all', (req, res) => {
    pais.find({}, (err, docs) => {
        if (err) {
            console.error(err)
            throw err;
        }
        res.status(200).json(docs)
    })
}).post('/create', (req, res) => {
    var body = req.body;
    pais.insertMany({
        nombre: body.nombre,
        nroCantones: body.nroCantones,
        superficie: body.superficie,
        region: body.region, id_pais: body.id_pais
    }, (err, rest) => {
        if (err) {
            console.error(err)
            throw err;
        }
        res.status(200).json(rest)
    })

}).post('/update', (req, res) => {
    var body = req.body;
    pais.update({
        id: body.id
    }, {
        $set: {

            nombre: body.nombre,
            nroCantones: body.nroCantones,
            superficie: body.superficie,
            region: body.region, id_pais: body.id_pais
        }      
    }, (err, rest) => {
    if (err) {
        console.error(err)
        throw err;
    }
    res.status(200).json(rest)
})

})

module.exports = router;