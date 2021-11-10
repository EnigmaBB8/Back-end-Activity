const express = require('express')
const router = express.Router()
const controller = require('../controllers/museos')

 //---Añadir
router.post("/agregarMuseo", controller.agregarMuseo)

//--Leer
router.get("/obtenerMuseos", controller.obtenerMuseos)

//Actualizar
router.put("/actualizarMuseo", controller.actualizarMuseo)

//Borrar
router.delete("/borrarMuseo", controller.borrarMuseo)

module.exports = router