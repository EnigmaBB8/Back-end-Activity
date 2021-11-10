const express = require('express')
const sequelize = require('./utils/database')

const app = express()

const pRoute = require('./routes/peliculas')
const mRoute = require('./routes/museos')
const plRoute = require('./routes/playlist')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/api/peliculas", pRoute)
app.use("/api/museos", mRoute)
app.use("/api/playlist", plRoute)

sequelize.sync()
    .then(()=>{
        app.listen(8080,()=>{
        console.log("Aplicación web en línea en el puerto 8080")
        })
    })
    .catch(err=>console.log(err))