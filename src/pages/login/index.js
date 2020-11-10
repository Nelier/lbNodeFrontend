import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Grid, Checkbox, Button, Header, Form, Container } from 'semantic-ui-react';

import api from '../../api/api';

import './styles.css';

export default function Login() {

    const [Email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailFormatted, setFormatted] = useState(false);

    const [recivedID, setRecivedID] = useState(0);

    const history = useHistory();

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/img;

    function cleanStorage() {
        localStorage.removeItem("idUser");
    }

    async function handleLogin(e) {
        e.preventDefault();

        const data = {
            Email,
            password,
        }

        try {
            const response = await api.post("/Login", data);

            if (response) {
                setRecivedID(response);
                localStorage.setItem("idUser", recivedID);
                history.push("/home")

            }

        } catch (error) {
            alert("Problema ao executar requisição!");
        }

    };


return (
    <div className="login-container">
        {cleanStorage()}
        <Header as="h3" block>
            Trabalho laboratório de programação.
            </Header>

        <Container>
            <Form onSubmit={handleLogin}>
                <Form.Field>
                    <label>Email</label>
                    <input placeholder='Email ou usuário'
                        value={Email}
                        maxLength="80"
                        onChange={(e) => { setEmail(e.target.value) }}
                        required="required" />
                </Form.Field>
                <Form.Field>
                    <label>Senha</label>
                    <input placeholder='Senha'
                        type="password"
                        value={password}
                        maxLength="18"
                        onChange={(e) => { setPassword(e.target.value) }} />
                </Form.Field>
                <Form.Field>
                    <p>Peça seu cadastro para o RH.</p>
                    <p>Ou use <strong>professor@professor.com</strong> e <strong>professor1</strong></p>
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
        </Container>
    </div >
);
}
