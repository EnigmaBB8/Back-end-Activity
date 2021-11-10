const Sequelize = require("sequelize")

const Museo = (sequelize)=>{
    sequelize.define('museo',{
        id:{
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: Sequelize.STRING,
        anio: Sequelize.INTEGER,
        lugar: Sequelize.INTEGER,
        precioBoleto: Sequelize.INTEGER
    })
}

module.exports = Museo