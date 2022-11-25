import React, { useState } from "react";
import { Form, Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const TareasForm = ({ onClickFn }) => {

    const [id, setId] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [correo, setCorreo] = useState("");
    const [carrera, setCarrera] = useState("");
    const [fechaEntrega, setfechaEntrega] = useState("");
    const [edad, setEdad] = useState("");
    const [precio, setprecio] = useState("");

    const onEnviar = (event) => {
        event.preventDefault()
        if (id === "" || nombre === "" || apellido === "" || correo === "" || carrera === "" || edad === "" || fechaEntrega === "" || precio === "") alert("No puede dejar ningun campo vacio");
        else {
            let data = {
                id: id,
                nombre: nombre,
                apellido: apellido,
                correo: correo,
                carrera: carrera,
                fechaEntrega: fechaEntrega,
                edad:edad,
                precio: precio
            };
            onClickFn(data);
        }
    }
    // Regreso de informcion dinamica al insertar datos
    return (
        <Container>
            <Row>
                <Col md={6}  >
                    <Form onSubmit={onEnviar}>
                        <Form.Group className="mb-3" controlId="id">
                            <Form.Label>Id</Form.Label>
                            <Form.Control type="number" placeholder="Id" value={id} onChange={(txt) => setId(txt.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="nombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" value={nombre} onChange={(txt) => setNombre(txt.target.value)} />
                            <Form.Text className="text-muted">
                                Nombre porfavor
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="apellido">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control type="text" placeholder="Enter your apellido" value={apellido} onChange={(txt) => setApellido(txt.target.value)} />
                            <Form.Text className="text-muted">
                                Apellido porfavor
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="correo">
                            <Form.Label>Correo</Form.Label>
                            <Form.Control type="text" placeholder="Enter your email" value={correo} onChange={(txt) => setCorreo(txt.target.value)} />
                            <Form.Text className="text-muted">
                                email
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="carrera">
                            <Form.Label>Carrera</Form.Label>
                            <Form.Control type="text" placeholder="carrera" value={carrera} onChange={(txt) => setCarrera(txt.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="DateTo">
                            <Form.Label>DateTo</Form.Label>
                            <Form.Control type="date" placeholder="Date Sheadule" value={fechaEntrega} onChange={(txt) => setfechaEntrega(txt.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="Edad">
                            <Form.Label>Edad</Form.Label>
                            <Form.Control type="number" placeholder="Edad" value={edad} onChange={(txt) => setEdad(txt.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="DateTo">
                            <Form.Label>Precio</Form.Label>
                            <Form.Control type="number" placeholder="Precio" value={precio} onChange={(txt) => setprecio(txt.target.value)} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default TareasForm;