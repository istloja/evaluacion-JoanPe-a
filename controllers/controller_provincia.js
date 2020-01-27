var provincia = require('../models/provincia'),
    express = require('express'),
    router = express.Router();

router.get('/all', (req, res) => {
    provincia.find({}, (err, docs) => {
        if (err) {
            console.error(err)
            throw err;
        }
        res.status(200).json(docs)
    })
}).post('/create', (req, res) => {
    var body = req.body;
    provincia.insertMany({
        nombre: body.nombre,
        nroCantones: body.nroCantones,
        superficie: body.superficie,
        region: body.region,
        id_pais: body.id_pais
    }, (err, rest) => {
        if (err) {
            console.error(err)
            throw err;
        }
        res.status(200).json(rest)
    })

}).post('/update', (req, res) => {
    var body = req.body;
    provincia.update({
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
}).post('/super', (req, res) => {
    var body = req.body
    provincia.find({ superficie: body.superficie }, (err, rest) => {
        if (err) {
            console.error(err)
            throw err;
        }
        rest.forEach(data => {
            if (body > data.superficie) {
                res.status(200).json(data.nombre)
            }
            res.status(404).json({mensaje:"no hay mayor"})
        });
    })
})

module.exports = router;