function aplicarRelaciones(sequelize){
   console.log(sequelize.models)
   const Pelicula = sequelize.models.pelicula
   const Museo = sequelize.models.museo
   const Playlist = sequelize.models.playlist


   Pelicula.belongsToMany(Museo,{through:Playlist})
   Museo.belongsToMany(Pelicula,{through:Playlist})
}

module.exports = {aplicarRelaciones}