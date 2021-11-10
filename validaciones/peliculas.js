const { body } = require('express-validator/check')


exports.validate = (pelicula) => {
   let errors = []
   
   if (pelicula.titulo.length < 5 || pelicula.titulo.length > 50)
      errors.push("La longitud minima de la pelicula es 5 y el maximo 50")
   if (pelicula.anio < 1930)
      errors.push("Agrega una pelicula producida despues de 1930")
   if (pelicula.duracion < 0)
      errors.push("La duracion no puede ser negativa")

   return errors;
}