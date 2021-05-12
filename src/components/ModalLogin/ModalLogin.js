import React, {useState} from "react";
import './ModalLogin.css';
import {InputGroup, Form, Button, Col} from "react-bootstrap";
import { useHistory } from 'react-router-dom';


const ModalLogin = ({
                        modalLoginActive,
                        setModalLoginActive,
                        setNickName,
                        nickName,
                        email,
                        lastName,
                        setLastName,
                        setEmail
                    }) => {

    let history = useHistory();

    const [validated, setValidated] = useState(false);
    const onInputNameChange = event => setNickName(event.target.value);
    const onInputLastNameChange = event => setLastName(event.target.value);
    const onInputEmailChange = event => setEmail(event.target.value);

    const onStarPlay = () => nickName.length && email.length && lastName.length >= 1 ? setModalLoginActive(false) : null;

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            onStarPlay()
            history.push('/game')
        }
        setValidated(true);
    };

    return (
        <div className={modalLoginActive ? 'modal active modal-login' : "modal"}>
            <div className="modal-dialog login-dialog" role="document">
                <div className="modal-content login-content">
                    <div className="modal-body login-body">
                        <img src='https://i.pinimg.com/564x/bd/2c/37/bd2c3764511dbed78d3d01398f48c26f.jpg'
                             className='login-logo'/>
                        <h1>Matching game</h1>
                        <h4>Do you want to boost your brains?</h4>
                        <p>In this game your task is to find 2 identical cards</p>
                        <Form noValidate validated={validated} onSubmit={handleSubmit} className='login-input'>
                            <Form.Row>
                                <Form.Group as={Col} md="4" controlId="validationCustom01">
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="First name"
                                        onChange={onInputNameChange}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="validationCustom02">
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Last name"
                                        onChange={onInputLastNameChange}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                                    <InputGroup hasValidation>
                                        <Form.Control
                                            type="text"
                                            placeholder="Email"
                                            aria-describedby="inputGroupPrepend"
                                            onChange={onInputEmailChange}
                                            required
                                        />
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Button type="submit" className="btn btn-danger">Play</Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalLogin;