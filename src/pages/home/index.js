import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import {
    Grid, Checkbox, Button, Segment, Sidebar,
    Header, Form, Container, Menu, GridRow, Icon, GridColumn,
    Table, Modal,
    Item
} from 'semantic-ui-react';

import api from '../../api/api';
import MenuBar from '../../components/MenuBar'


export default function Home() {

    const [visible, setVisible] = useState(true);
    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);

    const [Email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [NomeCompleto, setNomeCompleto] = useState("");
    const [Telefone, setTelefone] = useState("");
    const [login, setlogin] = useState("");
    const [Curso, setCurso] = useState("");
    const [Tipo, setTipo] = useState("");

    const options = [
        { key: 'a', text: 'Aluno', value: 'aluno' },
        { key: 'p', text: 'Professor', value: 'professor' },
        { key: 'r', text: 'Admin', value: 'rh' },
    ]

    const history = useHistory();
    const idUser = localStorage.getItem("idUser");
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/img;

    useEffect(() => {
        if (idUser != null) {
            api.get('/testDB').then((response) => {
                setData(response.data);
            }).catch((error) => { alert("Não foi possível trazer os dados" + error) });
        } else {
            return (
                <div className="Forbidden">
                    <h3> Redirecionando...</h3>
                    {Redirect()}
                </div>
            )
        }
    }, data);

    function Redirect() {
        history.push("/");
    }

    async function handleForm(e) {
        e.preventDefault();

        if (Email.match(emailRegex)) {

            const dataForm = {
                Email,
                password,
                NomeCompleto,
                Telefone,
                login,
                Curso,
                Tipo
            }

            try {
                const response = await api.post("/User", dataForm);

                alert("Usuário criado com sucesso!");
                window.location.reload();

            } catch (error) {
                alert("Tivemos problemas para cadastrar " + error);
            }
        } else {
            alert("Formato de email invalido!");
        }
    }

    async function handleDelete(item) {
        try {
            const dataDel = {
                id: item
            }
            const response = await api.post("/User/Delete", dataDel)

            alert("Usuário deletado!");
            window.location.reload();
        } catch (error) {
            alert("Problemas ao deletar!")
        }
    }

    return (
        <div className="login-container">

            <Header as="h3" block textAlign="center" style={{ margin: "0px" }}>
                Trabalho laboratório de programação.
            </Header>

            <Sidebar.Pushable as={Segment} style={{ marginTop: "0px" }}>
                <Sidebar
                    visible={visible}
                    as={Menu}
                    animation="push"
                    width="thin"
                    icon="labeled"
                    vertical
                    inverted
                    mobile
                >
                    <Menu.Item name="home" as={Link} to="/home" active>
                        <Icon name="clipboard outline" />Dashboard
                    </Menu.Item>
                    <Menu.Item name="home" as={Link} to="/account">
                        <Icon name="address card outline" />Account
                    </Menu.Item>
                    <Menu.Item name="home" as={Link} to="/">
                        <Icon name="power off" color="red" />Logout
                    </Menu.Item>
                </Sidebar>
                <Sidebar.Pusher>

                    <Segment as="div" style={{ padding: "55px", minHeight: "660px", maxHeight: "100%" }}>
                        <Grid mobile>
                            <GridRow>
                                <h3>Bem vindo ao Dashboard</h3>
                            </GridRow>

                            <GridRow>
                                <Table celled style={{ maxWidth: "800px" }}>
                                    <Table.Header>
                                        <Table.Row>
                                            <Table.HeaderCell textAlign="center">Id</Table.HeaderCell>
                                            <Table.HeaderCell textAlign="center">Nome Completo</Table.HeaderCell>
                                            <Table.HeaderCell textAlign="center">Email</Table.HeaderCell>
                                            <Table.HeaderCell textAlign="center">Tipo</Table.HeaderCell>
                                            <Table.HeaderCell textAlign="center">Curso</Table.HeaderCell>
                                            <Table.HeaderCell textAlign="center">Data</Table.HeaderCell>
                                            <Table.HeaderCell></Table.HeaderCell>
                                        </Table.Row>
                                    </Table.Header>

                                    <Table.Body>
                                        {data.map((item) => {
                                            return (
                                                <Table.Row key={item.id}>
                                                    <Table.Cell>{item.id}</Table.Cell>
                                                    <Table.Cell>{item.NomeCompleto}</Table.Cell>
                                                    <Table.Cell>{item.Email}</Table.Cell>
                                                    <Table.Cell>{item.Tipo}</Table.Cell>
                                                    <Table.Cell>{item.Curso}</Table.Cell>
                                                    <Table.Cell width="4">{item.Data}</Table.Cell>
                                                    <Table.Cell><Button key={item.id} onClick={(e) => {
                                                        e.preventDefault();
                                                        handleDelete(item.id)
                                                    }} color="red">Excluir</Button></Table.Cell>
                                                </Table.Row>
                                            )
                                        })}

                                    </Table.Body>

                                    <Table.Footer>
                                        <Table.Row>
                                            <Table.HeaderCell colSpan='7'>
                                                <Modal
                                                    onClose={() => setOpen(false)}
                                                    onOpen={() => setOpen(true)}
                                                    open={open}
                                                    trigger={<Button floated="right" color="green">Novo Usuário</Button>}
                                                >

                                                    <Modal.Header>Cadastrar usuário</Modal.Header>
                                                    <Modal.Content>
                                                        <Container>
                                                            <Form onSubmit={handleForm}>

                                                                <Form.Field required>
                                                                    <label>Nome Completo</label>
                                                                    <input placeholder='Nome Completo'
                                                                        value={NomeCompleto}
                                                                        maxLength="400"
                                                                        onChange={(e) => { setNomeCompleto(e.target.value) }}
                                                                        required="required" />
                                                                </Form.Field>
                                                                <Form.Field required>
                                                                    <label>Nome de usuário</label>
                                                                    <input placeholder='Usuário'
                                                                        value={login}
                                                                        maxLength="50"
                                                                        onChange={(e) => { setlogin(e.target.value) }}
                                                                        required="required" />
                                                                </Form.Field>
                                                                <Form.Group>
                                                                    <Form.Field required>
                                                                        <label>Curso</label>
                                                                        <input placeholder='Curso'
                                                                            value={Curso}
                                                                            maxLength="400"
                                                                            onChange={(e) => { setCurso(e.target.value) }}
                                                                            required="required" />
                                                                    </Form.Field>
                                                                    <Form.Field>
                                                                        <label>Telefone</label>
                                                                        <input
                                                                            value={Telefone}
                                                                            maxLength="11"
                                                                            onChange={(e) => {
                                                                                let aux = e.target.value;
                                                                                let value = aux.replace(/\D/g, '');
                                                                                setTelefone(value);
                                                                            }}
                                                                        />
                                                                    </Form.Field>
                                                                </Form.Group>
                                                                <Form.Group widths="equal">
                                                                    <Form.Field required>
                                                                        <label>Email</label>
                                                                        <input placeholder='Email ou usuário'
                                                                            value={Email}
                                                                            maxLength="80"
                                                                            onChange={(e) => { setEmail(e.target.value) }}
                                                                            required="required" />
                                                                    </Form.Field>
                                                                    <Form.Select
                                                                        fluid
                                                                        label='Tipo'
                                                                        options={options}
                                                                        onChange={(e, { value }) => {
                                                                            console.log(value.toString())
                                                                            setTipo(value.toString())
                                                                        }}
                                                                        placeholder='Gender'
                                                                    />
                                                                </Form.Group>
                                                                <Form.Field required width="14">
                                                                    <label>Senha</label>
                                                                    <input placeholder='Senha'
                                                                        type="password"
                                                                        value={password}
                                                                        maxLength="18"
                                                                        onChange={(e) => { setPassword(e.target.value) }} />
                                                                </Form.Field>
                                                                <Button color='black' onClick={() => {
                                                                    setNomeCompleto("");
                                                                    setEmail("");
                                                                    setCurso("");
                                                                    setPassword("");
                                                                    setTelefone("");
                                                                    setTipo("");
                                                                    setlogin("");
                                                                    setOpen(false)
                                                                }}>
                                                                    Cancel
                                                        </Button>
                                                                <Button color='green' type="sumbit" >
                                                                    Cadastrar
                                                        </Button>
                                                            </Form>
                                                        </Container>
                                                    </Modal.Content>
                                                    <Modal.Actions>
                                                        <Button color='black' onClick={() => setOpen(false)}>
                                                            Fechar
                                                        </Button>

                                                    </Modal.Actions>

                                                </Modal>

                                            </Table.HeaderCell>
                                        </Table.Row>
                                    </Table.Footer>
                                </Table>
                            </GridRow>

                        </Grid>
                    </Segment>

                </Sidebar.Pusher>
            </Sidebar.Pushable>





        </div>
    );
}
