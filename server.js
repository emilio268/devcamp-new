const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')

//dependencia de conexion
const conectarBD = require("./config/db")

//dependencias de turas
const bootcampsRoutes = require('./routes/bootcampRoutes')

//configurar dotenv

dotenv.config({
    path: "./config/.env"
})

//conectar a bd
conectarBD()

//crear objeto app
//express

const app = express()

//habilitar express para recibir body en formato json
app.use(express.json())

//establecer rutas de proyectos
app.use('/api/v1/bootcamps', bootcampsRoutes)

//crear el servidor de 
//aplicaciones express
app.listen(process.env.PUERTO,
             () => {
                console.log(`servidor express ejecutando ${process.env.PUERTO}`.bgBlue)
             })