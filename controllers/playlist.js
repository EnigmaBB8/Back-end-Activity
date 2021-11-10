const Playlist = require('../utils/database').models.playlist

 //___________________________CREATE__________________________
exports.agregarPlaylist = (req, res) => {
    Playlist.create(req.body)
        .then(result => {
            res.json({ status: "Playlist Creada" })
        })
        .catch((err) => {
            console.log(err)
            res.json({ status: "NO SE PUDO AÑADIR LA PLAYLIST" })
        })
}

 //___________________________READ__________________________

exports.obtenerPlaylist = (req, res) => {
    Playlist.findAll()
        .then(playlist => {
            res.json(playlist)
        })
        .catch(err => {
            console.log(err)
            res.status(1501).json({ status: "No se pudieron leer los datos" })
        })
}


 //___________________________UPDATE__________________________

exports.actualizarPlaylist = (req, res) => {
    if (!req.body.idP) {
        res.json({ status: "Se debe proveer un ID" })
        return
    }

    Playlist.update(req.body, {
        where: {
            idP: req.body.idP
        }
    }).then(result => {
        res.json({ status: "Playlist actualizada" })
    })
        .catch((err) => {
            console.log(err)
            res.json({ status: `No se puedo actualizar la playlist id=${req.body.id}` })
        })
}

 //___________________________DELETE__________________________

exports.borrarPlaylist = (req, res) => {
    if (!req.body.idP) {
        res.json({ status: "Proporciona un ID" })
        return
    }

    Playlist.destroy({
        where: {
            idP: req.body.idP
        }
    }).then(() => {
        res.json({ status: "Playlist eliminada" })
    })
        .catch(err => {
            console.log(err)
            res.json({ status: "No se pudo eliminar la playlist" })
        })
}