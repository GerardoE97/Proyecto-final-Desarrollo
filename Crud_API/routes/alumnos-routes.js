const express = require("express");
const router = express.Router();
const alumnoController = require("../controllers/alumnos-controller");

router.post("/",alumnoController.createAlumno);
router.put("/:id",alumnoController.updateAlumno); //cuando lo llamamos hay que hacer http://localhost:3001/alumnos/"id"
//router.get("/hola", (req,res) => {res.send("Hola mundo!")}); //cuando eschiches una peticion con nada, respon de con esto
//la => es una flecha que muestra algo? esto es de programacion funcional
router.get("/",alumnoController.findAllAlumno);
router.delete("/:id", alumnoController.deleteAlumno)

module.exports = router;