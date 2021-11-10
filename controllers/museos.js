const { validate } = require('../validaciones/museos')
const Museo = require('../utils/database').models.museo

 //___________________________CREATE__________________________
exports.agregarMuseo = (req, res) => {
    const errors = validate(req.body)
    if (errors.length >= 1) 
        return res.status(244).json({
        errors: errors
    })

    Museo.create(req.body)
        .then(result => {
            res.json({ status: "Museo añadido" })
        })
        .catch((err) => {
            console.log(err)
            res.json({ status: "NO SE PUDO AÑADIR EL MUSEO" })
        })
}

 //___________________________READ__________________________

exports.obtenerMuseos = (req, res) => {
    Museo.findAll()
        .then(museo => {
            res.json(museo)
        })
        .catch(err => {
            console.log(err)
            res.status(1501).json({ status: "No se pudieron leer los datos" })
        })
}


 //___________________________UPDATE__________________________

exports.actualizarMuseo = (req, res) => {
    if (!req.body.id) {
        res.json({ status: "Se debe proveer un ID" })
        return
    }

    const errors = validate(req.body)
    if (errors.length >= 1) return res.status(244).json({
        errors: errors
    })

    Museo.update(req.body, {
        where: {
            id: req.body.id
        }
    }).then(result => {
        res.json({ status: "Museo actualizado" })
    })
        .catch((err) => {
            console.log(err)
            res.json({ status: `No se puedo actualizar el museo id=${req.body.id}` })
        })
}

 //___________________________DELETE__________________________

exports.borrarMuseo = (req, res) => {
    if (!req.body.id) {
        res.json({ status: "Proporciona un ID" })
        return
    }

    Museo.destroy({
        where: {
            id: req.body.id
        }
    }).then(() => {
        res.json({ status: "Museo eliminado" })
    })
        .catch(err => {
            console.log(err)
            res.json({ status: "No se pudo eliminar el museo" })
        })
}