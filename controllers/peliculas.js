const { validate } = require('../validaciones/peliculas')
const Pelicula = require('../utils/database').models.pelicula

 //___________________________CREATE__________________________
exports.agregarPelicula = (req, res) => {
    const errors = validate(req.body)
    if (errors.length >= 1) 
        return res.status(244).json({
        errors: errors
    })

    Pelicula.create(req.body)
        .then(result => {
            res.json({ status: "Pelicula añadida" })
        })
        .catch((err) => {
            console.log(err)
            res.json({ status: "NO SE PUDO AÑADIR LA PELICULA" })
        })
}

 //___________________________READ__________________________

exports.obtenerPeliculas = (req, res) => {
    Pelicula.findAll()
        .then(pelicula => {
            res.json(pelicula)
        })
        .catch(err => {
            console.log(err)
            res.status(1501).json({ status: "No se pudieron leer los datos" })
        })
}


 //___________________________UPDATE__________________________

exports.actualizarPelicula = (req, res) => {
    if (!req.body.id) {
        res.json({ status: "Se debe proveer un ID" })
        return
    }

    const errors = validate(req.body)
    if (errors.length >= 1) return res.status(244).json({
        errors: errors
    })

    Pelicula.update(req.body, {
        where: {
            id: req.body.id
        }
    }).then(result => {
        res.json({ status: "Pelicula actualizada" })
    })
        .catch((err) => {
            console.log(err)
            res.json({ status: `No se puedo actualizar la pelicula id=${req.body.id}` })
        })
}

 //___________________________DELETE__________________________

exports.borrarPelicula = (req, res) => {
    if (!req.body.id) {
        res.json({ status: "Proporciona un ID" })
        return
    }

    Pelicula.destroy({
        where: {
            id: req.body.id
        }
    }).then(() => {
        res.json({ status: "Pelicula eliminada" })
    })
        .catch(err => {
            console.log(err)
            res.json({ status: "No se pudo eliminar la pelicula" })
        })
}