const express = require('express')
const router = express.Router()
const controller = require('../controllers/peliculas')

 //---Añadir
router.post("/agregarPelicula", controller.agregarPelicula)

//--Leer
router.get("/obtenerPeliculas", controller.obtenerPeliculas)

//Actualizar
router.put("/actualizarPelicula", controller.actualizarPelicula)

//Borrar
router.delete("/borrarPelicula", controller.borrarPelicula)

module.exports = router