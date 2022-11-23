import React from 'react'
import { Button } from 'react-bootstrap';
import { useEffect, useState } from "react";
import TareasUpdateForm from './tareasUpdateForm'

const Tarea = ({ tarea, onDelete, onUpdate }) => {
    const [showForm, setShowForm] = useState(false)

    const clickTarea = () => {
        onDelete(tarea.id)
    }

    // Regreso de informcion dinamica 
    return (
        <div>
            <h5>{tarea.name}</h5>
            <h5>{`Id: ${tarea.id}`}</h5>
            <h5>{`Id: ${tarea._id}`}</h5>
            <h5>{`Nombre: ${tarea.nombre}`}</h5>
            <h5>{`Apellido: ${tarea.apellido}`}</h5>
            <h5>{`Correo: ${tarea.correo}`}</h5>
            <h5>{`Carrera: ${tarea.carrera}`}</h5>
            <h5>{`Edad: ${tarea.edad}`}</h5>
            <Button variant="danger" onClick={clickTarea} className="deleteBtn">Delete</Button>
            <Button variant="primary" className="new-btn" onClick={() => setShowForm(!showForm)}>
                {showForm ? "Close" : "Update info"}
            </Button>
            {showForm && <TareasUpdateForm onClickFn={onUpdate} oldTarea={tarea} ></TareasUpdateForm>}
            <hr></hr>
        </div>
    )
}

export default Tarea;