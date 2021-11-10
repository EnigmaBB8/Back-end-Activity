const Sequelize = require("sequelize")

const Pelicula = (sequelize)=>{
    sequelize.define('pelicula',{
        id:{
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: Sequelize.STRING,
        anio: Sequelize.INTEGER,
        duracion: Sequelize.INTEGER,
        genero: Sequelize.STRING
    })
}

module.exports = Pelicula