const Alumno = require("../models/alumno");

function createAlumno(req, res){
    console.log("Creando alumno...");
    console.log(req.body);// el body es para mostrar los datos que le van a llegar
    let alumno = new Alumno({
        id: req.body.id,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        correo: req.body.correo,
        carrera: req.body.carrera,
        edad: req.body.edad
    });
    alumno.save( (error,result)=> {
        if (error){
            console.log(error);
            return res.status(500).json({ // el 500 es el status de http para decir que no esta
                error:true,
                message: "Server down",
                code:0
            });
        }
        if(!result){
            return res.status(400).json({
                error: true,
                message: "Client error",
                code:10
            });
        }
        return res.status(200).json({
            error:false,
            message: "OK",
            code:20,
            data:result
        });
    });
};

function findAllAlumno(req,res) {
    Alumno.find().exec((error, alumnos) => {
        if (error){
            return res.status(500).json({
                error:true,
                message: "Server error",
                code: 0
            }
            );
        }
        return res.status(200).json({
            error: false,
            message: "Success",
            data: alumnos,
            code: 10
        });
    });
}

function updateAlumno(req,res){
    const alumnoId = req.params.id; //id del alumno que vamos a actualizar
    const newAlumno = req.body;
    //Llamar a la bd
    Alumno.findByIdAndUpdate(alumnoId, newAlumno, {new: true}, (error, result) => {
        if (error){
            return res.status(500).json({
                error:true,
                message:"Server down",
                code: 0
            });
        }
        if(!result){
            return res.status(400).json({
                error:true,
                message: "Client error",
                code: 10
            });
        }
        return res.status(200).json({
            error:false,
            message: "OK",
            code: 20,
            data:result
        });
    });
}

function deleteAlumno(req,res){
    const alumnoId = req.params.id; //id del alumno que vamos a actualizar
    //Llamar a la bd
    Alumno.findOneAndDelete({id: alumnoId}, (error, result) => {
        //Alumno.findByIdAndDelete(alumnoId, data, {new: true}, (error, result) => {
        if (error){
            return res.status(500).json({
                error:true,
                message:"Server error",
                code: 0
            });
        }
        if(!result){
            return res.status(400).json({
                error:true,
                message: "Not found",
                code: 20
            });
        }
        return res.status(200).json({
            error:false,
            message: "Success",
            data:result,
            code: 100
        });
    });
}

module.exports = {
    createAlumno,
    findAllAlumno,
    updateAlumno,
    deleteAlumno
}