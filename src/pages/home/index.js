import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Grid, Checkbox, Button, Header, Form, Container } from 'semantic-ui-react';

import api from '../../api/api';


export default function Home() {


    const history = useHistory();


    return (
        <div className="login-container" style={{ color: "blue" }}>
            <Header as="h3" block>
                Trabalho laboratório de programação.
            </Header>

            <Container>
                <h3>Outra Página!</h3>
            </Container>
        </div>
    );
}
