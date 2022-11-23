// este es nuestro servidor web, escucha peticiones y dara respuestas
require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

//crear server
const app = express();

//conexion a la BD
mongoose.connect(
    process.env.DATABASE_URL, {useNewUrlParser:true});
const db = mongoose.connection;

//seter manejode eventos
db.on("error", (error) => console.error(error));
db.once("open", () => console.log ("Conectando a la base de datos"));

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Rutas
app.use("/alumnos", require("./routes/alumnos-routes"));
port = process.env.PORT || 3001;

//Iniciar el servidor
app.listen(port, () => console.log("El Servidor esta escuchando..."));