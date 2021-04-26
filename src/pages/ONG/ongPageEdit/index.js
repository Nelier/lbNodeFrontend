import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import Cookies from 'universal-cookie';

import { Grid, Checkbox, Image, Button, Segment, Modal, Dropdown, Sidebar, Header, Form, Res, Container, Menu, GridRow, Icon, GridColumn, Advertisement, Card, Popup, Tab, TextArea } from 'semantic-ui-react';

import MenuResponsive from '../../../components/MenuResponsive'

import api from '../../../api/api'

const items = [
    { to: "/ong", name: "Home", text: "Home", active: false },
    { to: "/ong", name: "Sair", text: "Sair", active: false, type: "logout" }
]

const extra = (
    <a>
        <Icon name='user' />
      16 Friends
    </a>
)



export default function ProfileEdit() {

    // const id_user = localStorage.getItem("id_user");

    const [ongs, setData] = useState({});

    const [name, setName] = useState("");
    const [necessities, setNecessities] = useState("");
    const [description, setDescription] = useState("");
    const [id_ong, setIdOng] = useState("");

    const [open, setOpen] = useState(false);

    const history = useHistory();
    const cookie = new Cookies;

    const id_user = cookie.get("id_user")

    const panes = [
        {
            menuItem: 'Descrição',
            render: () => {
                return (
                    <Tab.Pane attached={false}>
                        <Header>Quem Somos</Header>
                        <TextArea
                            style={{ width: "50%", minHeight: "300px", padding: "5px" }}
                            maxLength="800"
                            onChange={(e) => {
                                e.preventDefault();
                                setDescription(e.target.value);
                            }}
                            value={description}></TextArea>
                    </Tab.Pane>)
            },
        },
        {
            menuItem: 'Necessidades',
            render: () => {
                return (
                    <Tab.Pane attached={false}>
                        <Header>Como pode nos ajudar</Header>
                        <TextArea
                            style={{ width: "50%", minHeight: "300px", padding: "5px" }}
                            maxLength="800"
                            onChange={(e) => {
                                e.preventDefault();
                                setNecessities(e.target.value);
                            }}
                            value={necessities}></TextArea>
                    </Tab.Pane>)
            },
        },
    ]

    useEffect(() => {

        try {
            api.post(`/profile/no`, { userID: id_user }).then(response => {

                if (response.data[0] != null) {
                    setData(response.data[0]);
                    setName(response.data[0].name);
                    setNecessities(response.data[0].necessities);
                    setDescription(response.data[0].description);
                    setIdOng(response.data[0].id_ong);
                } else {
                    history.push('/ong/signin');

                }

            });

        } catch (error) {
            alert("Deu erro!");
            console.log(error);
        }

    }, ongs);

    function handleDelete() {
        const data = {
            ongID: id_ong,
            userID: id_user
        }

        api.post('/delete', data)
            .then((response) => {
                api.post('/delete/newsletter', data, { headers: { authorization: true } })
                    .then((response) => {
                        api.post('/delete/lgpd', data, { headers: { authorization: true } })
                            .then((response) => {
                                if (response) {
                                    alert("Sua conta foi excluida!");
                                    history.push("/ong");
                                }
                            })
                            .catch((error) => {
                                console.log(error);
                                alert("Ouve um erro inesperado no lgpd");
                            })
                    })
                    .catch((error) => {
                        console.log(error);
                        alert("Ouve um erro inesperado no Newsletter");
                    })
            })
            .catch((error) => {
                console.log(error);
                alert("Ouve um erro inesperado ao deletar sua conta!");
            })
    }

    async function handleChange(){
        const data = {
            userID: id_user,
            description,
            necessities,
        }

        const data2 ={
            url: "http://localhost:3000/ong/profile"
        }

        try {
            const response = await api.put('/singup', data, {headers:{authorization: true}})

            alert("Suas alterações foram salvas!");
            try {
                const response2 = await api.post(`/email/mailer/${id_ong}`, data2, {headers:{authorization: true}})
            } catch (error) {
                alert("erro na newsletter!");
            }

        } catch (error) {
            alert("Problemas ao alterar!");
        }
    }

    return (
        <div>
            <MenuResponsive items={items} />

            <Grid >

                <Grid.Row only="mobile" style={{ paddingLeft: "25px", paddingTop: "25px" }}>

                    <Container>
                        <Grid>

                            <Grid.Row style={{ paddingLeft: "10%", paddingRight: "10%" }}>

                                <Advertisement unit="mobile leaderboard" test='mobile leaderboard' />

                            </Grid.Row>

                            <Grid.Row>


                                <Segment style={{ marginLeft: "5%", marginRight: "8%", width: "100%" }}>
                                    <Grid>
                                        <Grid.Row style={{ paddingBottom: "0px", paddingTop: "0px", float: "right" }}>

                                            <Grid columns="1" style={{ paddingRight: "0px", width: "100%" }} >
                                                <Grid.Column style={{ height: "10px", width: "25%" }}></Grid.Column>
                                                <Grid.Column style={{ height: "10px", width: "25%" }}></Grid.Column>
                                                <Grid.Column style={{ width: "50%", paddingLeft: "25px", paddingTop: "10px", paddingBottom: "0px" }}>
                                                    <Modal
                                                        onClose={() => setOpen(false)}
                                                        onOpen={() => setOpen(true)}
                                                        open={open}
                                                    >
                                                        <Modal.Content>
                                                            <Modal.Header><Header>Tem certeza que deseja excluir?</Header></Modal.Header>
                                                            <Modal.Description>
                                                                <p>Esta opção não poderá ser desfeita</p>
                                                                <Button onClick={() => { setOpen(!open) }} color="grey">Cancelar</Button>
                                                                <Button onClick={() => { handleDelete() }} color="red">Confirmar</Button>
                                                            </Modal.Description>
                                                        </Modal.Content>
                                                    </Modal>

                                                    <Popup
                                                        openOnTriggerFocus
                                                        mouseEnterDelay={500}
                                                        mouseLeaveDelay={200}
                                                        position="top left"
                                                        content='Se inscreva para receber novas informações!'
                                                        trigger={<Button onClick={() => { setOpen(!open) }} color="red" floated="right">Excluir Conta</Button>} />
                                                </Grid.Column>
                                            </Grid>
                                        </Grid.Row>
                                        <Grid.Row style={{ paddingLeft: "15px", paddingRight: "15px" }}>
                                            <Header>Editar</Header>
                                            <Header style={{ marginBottom: "5px" }}>{name}</Header>
                                            <Header as="h4" color="grey" style={{ marginTop: "0px" }}>{ongs.name_fantasy}</Header>
                                            <p>{ongs.cidade}, {ongs.uf}<br />
                                                {ongs.bairro}, {ongs.rua} - {ongs.cep}</p>
                                        </Grid.Row>
                                        <Grid.Row style={{ paddingLeft: "15px", paddingRight: "15px" }}>
                                            <Header as="h3">Quem somos</Header>
                                            <TextArea
                                                style={{ width: "100%", minHeight: "300px", marginTop: "10px", padding: "5px" }}
                                                maxLength="800"
                                                onChange={(e) => {
                                                    e.preventDefault();
                                                    setDescription(e.target.value);
                                                }}
                                                value={description}></TextArea>
                                        </Grid.Row>
                                        <Grid.Row  style={{ paddingLeft: "15px", paddingRight: "10px" }}>
                                            <Header as="h3">Nossas necessidades</Header>

                                            <TextArea
                                                style={{ width: "100%", minHeight: "300px", marginTop: '10px', padding: "5px" }}
                                                maxLength="800"
                                                onChange={(e) => {
                                                    e.preventDefault();
                                                    setDescription(e.target.value);
                                                }}
                                                value={necessities}></TextArea>
                                        </Grid.Row>

                                        <Button color="green" onClick={()=>{handleChange()}} >Salvar Alterações</Button>
                                    </Grid>

                                </Segment>

                            </Grid.Row>

                        </Grid>
                    </Container>

                </Grid.Row>

                <Grid.Row celled only="tablet computer" style={{ marginTop: "25px" }}>

                    <Grid.Column width={2} verticalAlign='middle' style={{ paddingRight: "0px", marginRight: "0px" }}>
                        <Advertisement unit="skyscraper" test='Skyscraper' style={{ marginRight: "0px" }} />
                    </Grid.Column>

                    <Grid.Column width={13} style={{ padding: "10px" }} >

                        <Grid.Row>
                            <Segment.Group style={{ margin: "10px" }}>
                                <Segment>
                                    <Grid columns={2}>
                                        <Grid.Column>
                                            <Header>Editar</Header>
                                            <Header style={{ marginBottom: "5px" }}>{name}</Header>
                                            <Header as="h4" color="grey" style={{ marginTop: "0px" }}>{ongs.name_fantasy}</Header>
                                            <p>{ongs.cidade}, {ongs.uf}<br />
                                                {ongs.bairro}, {ongs.rua} - {ongs.cep}</p>
                                        </Grid.Column>
                                        <Grid.Column textAlign="right">
                                            <Modal
                                                onClose={() => setOpen(false)}
                                                onOpen={() => setOpen(true)}
                                                open={open}
                                            >
                                                <Modal.Content>
                                                    <Modal.Header><Header>Tem certeza que deseja excluir?</Header></Modal.Header>
                                                    <Modal.Description>
                                                        <p>Esta opção não poderá ser desfeita</p>
                                                        <Button onClick={() => { setOpen(!open) }} color="grey">Cancelar</Button>
                                                        <Button onClick={() => { handleDelete() }} color="red">Confirmar</Button>
                                                    </Modal.Description>
                                                </Modal.Content>
                                            </Modal>
                                            <Popup
                                                mouseEnterDelay={500}
                                                mouseLeaveDelay={200}
                                                position="top left"
                                                content='Se inscreva para receber novas informações!'
                                                trigger={<Button onClick={() => { setOpen(!open) }} color="red" floated="right">Excluir Conta</Button>} />
                                        </Grid.Column>
                                    </Grid>

                                </Segment>
                                <Segment style={{ minHeight: "500px" }}>
                                    <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
                                    <Button style={{paddingTop:"10px", float:"right"}} color="green" onClick={()=>{handleChange()}} >Salvar Alterações</Button>
                                </Segment>
                            </Segment.Group>
                        </Grid.Row>


                    </Grid.Column>
                </Grid.Row>

            </Grid>

        </div >
    )
}