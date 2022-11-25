const mongoose = require("mongoose")

//id, nombre, apellido, correo, carrera, edad
const alumnoSchema = new mongoose.Schema({
    id: {
        type:Number,
        required: true
    },
    nombre: {
        type:String,
        required: true
    },
    apellido: {
        type:String,
        required: true
    },
    correo: {
        type:String,
        required: true
    },
    carrera: {
        type:String,
        required: true
    },
    edad: {
        type:Number,
        required: true
    },
    precio: {
        type:Number,
        required: true
    },
    fechaEntrega: {
        type:Date,
        required: true
    }
});

module.exports = mongoose.model("Alumno", alumnoSchema);