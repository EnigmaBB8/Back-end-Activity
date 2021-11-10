const {aplicarRelaciones} = require('./relations')
const Sequelize = require("sequelize")

const sequelize = new Sequelize('amixes_poderosos','user1','root',{
    dialect: 'mysql',
    host: '54.227.9.233',
    define:{
        timestamps: false,
        freezeTableName: true
    }
})

// Cargar todos los modelos
const modelDefiners = [
    // Importar cada modelo dentro de la carpeta models
    require('../models/peliculas'),
    require('../models/museos'),
    require('../models/playlist')
]

// Adherir al objeto de conexion
for(const modelDefiner of modelDefiners){
    modelDefiner(sequelize)
}

//Realizar las relaciones entre las tablas de la BD
aplicarRelaciones(sequelize)

// Para poder usar en archivos externos la conexion
module.exports = sequelize;