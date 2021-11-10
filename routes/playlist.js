const express = require('express')
const router = express.Router()
const controller = require('../controllers/playlist')

 //---Añadir
router.post("/agregarPlaylist", controller.agregarPlaylist)

//--Leer
router.get("/obtenerPlaylist", controller.obtenerPlaylist)

//Actualizar
router.put("/actualizarPlaylist", controller.actualizarPlaylist)

//Borrar
router.delete("/borrarPlaylist", controller.borrarPlaylist)

module.exports = router