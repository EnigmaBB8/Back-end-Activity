const { body } = require('express-validator/check')


exports.validate = (museo) => {
   let errors = []
   
   if (museo.nombre.length < 5 || museo.nombre.length > 30)
      errors.push("La longitud minima del nombre es 5 y el maximo 50")
   if (museo.anio < 1930)
      errors.push("Agrega un museo inagurado despues de 1920")
   if (museo.precioBoleto < 0)
      errors.push("El precio de entrada no puede ser negativo")

   return errors;
}