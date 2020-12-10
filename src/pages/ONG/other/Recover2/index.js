import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Cookies from 'universal-cookie';
import moment from 'moment';

import { Grid, Checkbox, Image, Button, Segment, Item, Dropdown, Sidebar, Header, Form, Res, Container, Menu, GridRow, Icon, GridColumn, Advertisement, Card, Divider, Input, Message } from 'semantic-ui-react';

import MenuResponsive from '../../../../components/MenuResponsive'

import api from '../../../../api/api';

const items = [
    { to: "/ong", name: "Home", text: "Home", active: false },
    { to: "/ong/signup", name: "Cadastro", text: "Cadastro", active: false },
]

const extra = (
    <a>
        <Icon name='user' />
      16 Friends
    </a>
)

export default function Recover2() {

    const [ongs, setData] = useState([]);

    const [iconName, setIconName] = useState("eye slash");
    const [inputType, setType] = useState("password");
    const [inputActive, setInputActive] = useState(true);

    const [activeError, setActiveError] = useState(true);
    const [messageError, setMessage] = useState("");
    const [activeErrorMobile, setActiveErrorMobile] = useState(true);
    const [messageErrorMobile, setMessageMobile] = useState("");

    const [activeSuccess, setActiveSuccess] = useState(true);
    const [activeSuccessMobile, setActiveSuccessMobile] = useState(true);

    const [email_user, setEmail_User] = useState("");


    const history = useHistory();
    const cookie = new Cookies;


    function HandleChange() {
        if (inputActive) {
            setInputActive(!inputActive);
            setIconName("eye");
            setType("text");
        } else {
            setInputActive(!inputActive);
            setIconName("eye slash");
            setType("password");
        }
    }

    async function handleSumbit() {

        const data = {
            email_user
        }

        try {

            const response = await api.post('/email/resetpassword', data, { headers: { authorization: true } })
            setActiveError(true);
            setActiveSuccess(false);


        } catch (error) {
            console.log(error);
            setMessage("Este email é invalido e não existe em nosso banco de dados");
            setActiveError(false);
            setTimeout(() => {
                setActiveError(true);
            }, 4000)
        }
    }

    async function handleSumbitMobile() {

        const data = {
            email_user
        }
        try {
            const response = await api.post('/email/resetpassword', data, { headers: { authorization: true } })
            setActiveErrorMobile(true);
            setActiveSuccessMobile(false);

        } catch (error) {
            setMessageMobile("Seu email ou senha estão incorretos, por favor tente novamente.");
            setActiveErrorMobile(false);
        }

    }


    return (
        <div>
            <MenuResponsive items={items} />

            <Grid >

                <Grid.Row only="mobile" style={{ paddingLeft: "25px", paddingTop: "25px" }}>

                    <Container>
                        <Card raised fluid style={{ minHeight: "350px", minWidth: "300px", marginLeft: "15%", marginRight: "auto" }}>
                            <Card.Content>
                                <Grid.Row>
                                    <Message
                                        error
                                        header="Informações Incorretas"
                                        content={messageErrorMobile}
                                        hidden={activeErrorMobile}
                                        style={{ marginBottom: "5px", maxWidth: "260px" }}
                                    />
                                </Grid.Row>
                                <Grid.Row>
                                    <Message
                                        positive
                                        header="Senha Alterada!"
                                        content={"Sua senha foi alterada com sucesso!"}
                                        hidden={activeSuccessMobile}
                                        style={{ marginBottom: "5px" }}
                                    />
                                </Grid.Row>
                                <Grid.Row style={{ marginTop: "30px" }}>
                                    <Header textAlign="center">Receber meu código</Header>
                                    <Form style={{ paddingLeft: "10px" }} onSubmit={() => { handleSumbitMobile() }}>
                                        <Form.Field>
                                            <label>Email</label>
                                            <input placeholder='Email'
                                                maxLength="100"
                                                required="required"
                                                value={email_user}
                                                onChange={(e) => {
                                                    e.preventDefault();
                                                    setEmail_User(e.target.value.toLowerCase());

                                                }} />
                                        </Form.Field>
                                        <div style={{ padding: "10px", paddingLeft: "30%", paddingRight: "auto" }}>
                                            <Button color="red" type="sumbit" style={{ paddingLeft: "65px", paddingRight: "65px" }}> Enviar</Button>
                                        </div>
                                    </Form>
                                </Grid.Row>
                            </Card.Content>
                        </Card>
                    </Container>

                </Grid.Row>

                <Grid.Row celled only="tablet computer" style={{ marginTop: "25px" }}>

                    <Container>
                        <Card raised style={{ minHeight: "500px", minWidth: "700px", marginLeft: "18%", float: "left" }}>

                            <Card.Content>
                                <Grid columns={1}>



                                    <Grid.Column className="Login" verticalAlign="middle" style={{ paddingTop: "10%", paddingBottom: "auto" }}>

                                        <Grid.Row>
                                            <Message
                                                error
                                                header="Informações Incorretas!"
                                                content={messageError}
                                                hidden={activeError}
                                                style={{ marginBottom: "5px" }}
                                            />
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Message
                                                positive
                                                header="Senha Alterada!"
                                                content={"Sua senha foi alterada com sucesso!"}
                                                hidden={activeSuccess}
                                                style={{ marginBottom: "5px" }}
                                            />
                                        </Grid.Row>

                                        <Header textAlign="center">Receber meu cógio</Header>
                                        <p style={{ textAlign: "center" }}>Enviaremos o código de recuperação para o seu email.</p>

                                        <Form style={{ paddingLeft: "20px" }} onSubmit={() => { handleSumbit() }}>
                                            <Form.Field>
                                                <label>Email</label>
                                                <input placeholder='Email'
                                                    maxLength="100"
                                                    required="required"
                                                    value={email_user}
                                                    onChange={(e) => {
                                                        e.preventDefault();
                                                        setEmail_User(e.target.value.toLowerCase());

                                                    }} />
                                            </Form.Field>
                                            <div style={{ padding: "10px", paddingLeft: "35%", paddingRight: "auto" }}>
                                                <Button color="red" type="sumbit" style={{ paddingLeft: "65px", paddingRight: "65px" }}> Enviar</Button>
                                            </div>
                                        </Form>

                                    </Grid.Column>


                                </Grid>

                            </Card.Content>
                        </Card>
                    </Container>

                </Grid.Row>

            </Grid>

        </div>
    )
}