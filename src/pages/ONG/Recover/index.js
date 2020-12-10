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

export default function Recover() {

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

    const [code, setCode] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCon, setPasswordCon] = useState("");


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
            userID: code,
            password,
        }

        if (password == passwordCon) {
            try {

                const response = await api.put('/login', data, { headers: { authorization: true } })
                setActiveError(true);
                setActiveSuccess(false);
                setCode("");
                setPassword("");
                setPasswordCon("");

            } catch (error) {
                setMessage("Seu código esta errado.");
                setActiveError(false);
                setTimeout(() => {
                    setActiveError(true);
                }, 4000)
            }
        } else {
            setMessage("As senhas não estão iguais, por favor tente novamente.");
            setActiveError(false);
            setTimeout(() => {
                setActiveError(true);
            }, 4000)
        }

    }

    async function handleSumbitMobile() {

        const data = {
            userID: code,
            password,
        }

        if (password == passwordCon) {
            try {

                const response = await api.put('/login', data, { headers: { authorization: true } })
                setActiveErrorMobile(true);
                setActiveSuccessMobile(false);
                setCode("");
                setPassword("");
                setPasswordCon("");

            } catch (error) {
                setMessage("As senhas não estão iguais, por favor tente novamente.");
                setActiveErrorMobile(false);
                setTimeout(() => {
                    setActiveErrorMobile(true);
                }, 4000)
            }
        } else {
            setMessageMobile("As senhas não estão iguais, por favor tente novamente.");
            setActiveErrorMobile(false);
            setTimeout(() => {
                setActiveErrorMobile(true);
            }, 4000)
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
                                <Grid.Row style={{ marginTop: "20px" }}>
                                    <Header textAlign="center">Recuperação de senha</Header>

                                    <Form style={{ paddingLeft: "15px" }} onSubmit={() => { handleSumbitMobile() }}>
                                        <Form.Field>
                                            <label>Código de Recuperação</label>
                                            <input placeholder='código'
                                                maxLength="20"
                                                required="required"
                                                value={code}
                                                onChange={(e) => {
                                                    e.preventDefault();
                                                    setCode(e.target.value);
                                                }} />
                                        </Form.Field>
                                        <Form.Field>
                                            <label>Nova Senha</label>
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
                                        <Form.Field>
                                            <label>Confirmar Senha</label>
                                            <Input
                                                placeholder='Senha'
                                                type="password"
                                                maxLength="50"
                                                required="required"
                                                value={passwordCon}
                                                onChange={(e) => {
                                                    e.preventDefault();
                                                    setPasswordCon(e.target.value);
                                                }} />
                                        </Form.Field>
                                        <p>Não sabe seu código? <Link to="/ong/recover/email" style={{ color: "red" }}> Solicitar meu código</Link></p>
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

                                        <Header textAlign="center">Recuperação de senha</Header>

                                        <Form style={{ paddingLeft: "25px" }} onSubmit={() => { handleSumbit() }}>
                                            <Form.Field>
                                                <label>Código de Recuperação</label>
                                                <input placeholder='código'
                                                    maxLength="20"
                                                    required="required"
                                                    value={code}
                                                    onChange={(e) => {
                                                        e.preventDefault();
                                                        setCode(e.target.value);
                                                    }} />
                                            </Form.Field>
                                            <Form.Field>
                                                <label>Nova Senha</label>
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
                                            <Form.Field>
                                                <label>Confirmar Senha</label>
                                                <Input
                                                    placeholder='Senha'
                                                    type="password"
                                                    maxLength="50"
                                                    required="required"
                                                    value={passwordCon}
                                                    onChange={(e) => {
                                                        e.preventDefault();
                                                        setPasswordCon(e.target.value);
                                                    }} />
                                            </Form.Field>
                                            <p>Não sabe seu código? <Link to="/ong/recover/email" style={{ color: "red" }}> Solicitar meu código</Link></p>
                                            <div style={{ padding: "10px", paddingLeft: "30%", paddingRight: "auto" }}>
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