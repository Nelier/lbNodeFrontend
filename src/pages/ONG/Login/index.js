import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Cookies from 'universal-cookie';
import moment from 'moment';

import { Grid, Checkbox, Image, Button, Segment, Item, Dropdown, Sidebar, Header, Form, Res, Container, Menu, GridRow, Icon, GridColumn, Advertisement, Card, Divider, Input, Message } from 'semantic-ui-react';

import MenuResponsive from '../../../components/MenuResponsive'

import api from '../../../api/api'

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

export default function Login() {

    const [ongs, setData] = useState([]);

    const [iconName, setIconName] = useState("eye slash");
    const [inputType, setType] = useState("password");
    const [inputActive, setInputActive] = useState(true);

    const [activeError, setActiveError] = useState(true);
    const [messageError, setMessage] = useState("");
    const [activeErrorMobile, setActiveErrorMobile] = useState(true);
    const [messageErrorMobile, setMessageMobile] = useState("");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
            email,
            password,
        }

        try {
            const response = await api.post("/login", data);

            cookie.remove("id_user");
            // localStorage.setItem("id_user", response.data.id_user);
            cookie.set("id_user", response.data.id_user, { expires: new Date(moment().add(30, "m").format()) })
            setTimeout(() => {
                history.push('/ong/edit');
            }, 500);

        } catch (error) {
            setMessage("Seu email ou senha estão incorretos, por favor tente novamente.");
            setActiveError(false);
        }

    }

    async function handleSumbitMobile() {

        const data = {
            email,
            password,
        }

        try {
            const response = await api.post("/login", data);

            // localStorage.setItem("id_user", response.data.id_user);
            cookie.set("id_user", response.data.id_user, { expires: new Date(moment().add(30, "m").format()) })
            setTimeout(() => {
                history.push('/ong/edit');
            }, 1500);

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
                                <Grid.Row style={{ marginTop: "30px" }}>
                                    <Header textAlign="center">Já tem uma conta e deseja entrar?</Header>
                                    <Form style={{ paddingLeft: "10px" }} onSubmit={() => { handleSumbitMobile() }}>
                                        <Form.Field>
                                            <label>Email</label>
                                            <input placeholder='Email'
                                                maxLength="100"
                                                required="required"
                                                value={email}
                                                onChange={(e) => {
                                                    e.preventDefault();
                                                    setEmail(e.target.value.toLowerCase());

                                                }} />
                                        </Form.Field>
                                        <Form.Field>
                                            <label>Senha</label>
                                            <Input
                                                icon={<Icon size="large" name={iconName} link onClick={HandleChange}></Icon>}
                                                placeholder='Senha'
                                                type={inputType}
                                                maxLength="50"
                                                required="required"
                                                value={password}
                                                onChange={(e) => {
                                                    e.preventDefault();
                                                    setPassword(e.target.value);

                                                }} />
                                        </Form.Field>
                                        <p>Esqueceu sua senha? <Link to="/ong/recover" style={{ color: "red" }} > Clique aqui</Link></p>
                                        <div style={{ padding: "10px", paddingLeft: "30%", paddingRight: "auto" }}>
                                            <Button color="red" type="sumbit" style={{ paddingLeft: "65px", paddingRight: "65px" }}> Entrar</Button>
                                        </div>
                                    </Form>
                                </Grid.Row>
                            </Card.Content>
                        </Card>
                    </Container>

                </Grid.Row>

                <Grid.Row celled only="tablet computer" style={{ marginTop: "25px" }}>

                    <Container>
                        <Card raised fluid style={{ height: "500px" }}>

                            <Card.Content>
                                <Grid columns={2} relaxed="very">



                                    <Grid.Column className="Login" verticalAlign="middle" style={{ paddingTop: "10%", paddingBottom: "auto" }}>

                                        <Grid.Row>
                                            <Message
                                                error
                                                header="Informações Incorretas"
                                                content={messageError}
                                                hidden={activeError}
                                                style={{ marginBottom: "5px" }}
                                            />
                                        </Grid.Row>

                                        <Header textAlign="center">Já tem uma conta e deseja entrar?</Header>
                                        <Form style={{ paddingLeft: "25px" }} onSubmit={() => { handleSumbit() }}>
                                            <Form.Field>
                                                <label>Email</label>
                                                <input placeholder='Email'
                                                    maxLength="100"
                                                    required="required"
                                                    value={email}
                                                    onChange={(e) => {
                                                        e.preventDefault();
                                                        setEmail(e.target.value.toLowerCase());

                                                    }} />
                                            </Form.Field>
                                            <Form.Field>
                                                <label>Senha</label>
                                                <Input
                                                    icon={<Icon size="large" name={iconName} link onClick={HandleChange}></Icon>}
                                                    placeholder='Senha'
                                                    type={inputType}
                                                    maxLength="50"
                                                    required="required"
                                                    value={password}
                                                    onChange={(e) => {
                                                        e.preventDefault();
                                                        setPassword(e.target.value);

                                                    }} />
                                            </Form.Field>
                                            <p>Esqueceu sua senha? <Link to="/ong/recover" style={{ color: "red" }} > Clique aqui</Link></p>
                                            <div style={{ padding: "10px", paddingLeft: "30%", paddingRight: "auto" }}>
                                                <Button color="red" type="sumbit" style={{ paddingLeft: "65px", paddingRight: "65px" }}> Entrar</Button>
                                            </div>
                                        </Form>

                                    </Grid.Column>


                                    <Grid.Column style={{ height: "100%", paddingLeft: "0px" }} className="Register" verticalAlign="middle">
                                        <div style={{ marginTop: "20%", marginBottom: "20%%", marginLeft: "5%", marginRight: "auto", textAlign: "center" }}>
                                            <Header>Não tenho uma conta...</Header>
                                            <Button color="grey" sytle={{ paddingLeft: "20px", paddingRight: "20px" }} onClick={() => { history.push("/ong/signup") }} >Criar minha conta</Button>
                                        </div>
                                    </Grid.Column>


                                </Grid>
                                <Divider vertical>Ou</Divider>
                            </Card.Content>
                        </Card>
                    </Container>

                </Grid.Row>

            </Grid>

        </div>
    )
}