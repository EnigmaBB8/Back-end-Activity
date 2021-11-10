const Sequelize = require("sequelize")

const Playlist = (sequelize)=>{
    sequelize.define('playlist',{
        idP:{
            type:Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        lanzamiento: Sequelize.INTEGER
    })
}

module.exports = Playlist