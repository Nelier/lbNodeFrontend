import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';

import { Grid, Checkbox, Image, Button, Segment, Modal, Dropdown, Sidebar, Header, Form, Res, Container, Menu, GridRow, Icon, GridColumn, Advertisement, Card, Popup, Tab } from 'semantic-ui-react';

import MenuResponsive from '../../../components/MenuResponsive'

import api from '../../../api/api'

const items = [
    { to: "/ong/signin", name: "Login", text: "Entrar", active: false },
    { to: "/ong/signup", name: "Cadastro", text: "Cadastro", active: false },
]

const extra = (
    <a>
        <Icon name='user' />
      16 Friends
    </a>
)



export default function Profile() {

    const { id_ong } = useParams();
    const [ongs, setData] = useState({});

    const [name, setName] = useState("");
    const [necessities, setNecessities] = useState("");
    const [description, setDescription] = useState("");

    const [open, setOpen] = useState(false);

    const [name_visitor, setName_visitor] = useState("");
    const [email_visitor, setEmail_visitor] = useState("");

    const history = useHistory();

    const panes = [
        {
            menuItem: 'Descrição',
            render: () => {
                return (
                    <Tab.Pane attached={false}>
                        <Header>Quem Somos</Header>
                        <p style={{ width: "50%" }}>{description}</p>
                    </Tab.Pane>)
            },
        },
        {
            menuItem: 'Necessidades',
            render: () => {
                return (
                    <Tab.Pane attached={false}>
                        <Header>Como pode nos ajudar</Header>
                        <p style={{ width: "50%" }}>{necessities}</p>
                    </Tab.Pane>)
            },
        },
    ]

    useEffect(() => {

        try {
            api.post(`/profile/${id_ong}`, { userID: "" }).then(response => {

                if (response.data[0] != null) {
                    setData(response.data[0]);
                    setName(response.data[0].name);
                    setNecessities(response.data[0].necessities);
                    setDescription(response.data[0].description);
                } else {
                    history.push('/ong');

                }

            });

        } catch (error) {
            alert("Deu erro!");
            console.log(error);
        }

    }, ongs)

    async function handleSumbit() {

        const data = {
            name_visitor,
            email_visitor
        }

        try {

            const response = await api.post(`/newsletter/${id_ong}`, data, { headers: { authorization: true } })

            if (response.data != null) {
                console.log("Chegou na segunda requisição!");

                const secondResponse = await api.post(`newsletter/validation`, { id_ong, email_visitor, url: "https://localhost:3000/ong/validate" }, { headers: { authorization: true } })

                if (secondResponse.data != null) {
                    localStorage.setItem("id_ong", id_ong);
                    localStorage.setItem("email_visitor", email_visitor);
                    localStorage.setItem("url", "https>//localhost:3000/ong/validate");

                    history.push('/ong/validate/resend')
                }
            }

        } catch (error) {
            console.log("Deu ruim" + error);
            alert("Erro inesperado!");
            // window.location.reload();
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
                                                            <Modal.Header><Header>Inscrever-se na Newsletter desta ONG</Header></Modal.Header>
                                                            <Modal.Description>
                                                                <Form onSubmit={() => { handleSumbit() }}>
                                                                    <p>Se inscreva para receber atualizações sobre futuras necessidades que esta ong possa ter</p>
                                                                    <Form.Field>
                                                                        <label>Seu primeiro nome</label>
                                                                        <input placeholder='Nome'
                                                                            maxLength="100"
                                                                            required="required"
                                                                            value={name_visitor}
                                                                            onChange={(e) => {
                                                                                e.preventDefault();
                                                                                setName_visitor(e.target.value);
                                                                            }} />
                                                                    </Form.Field>
                                                                    <Form.Field>
                                                                        <label>Email</label>
                                                                        <input placeholder='Email'
                                                                            maxLength="100"
                                                                            required="required"
                                                                            value={email_visitor}
                                                                            onChange={(e) => {
                                                                                e.preventDefault();
                                                                                setEmail_visitor(e.target.value.toLowerCase());

                                                                            }} />
                                                                    </Form.Field>

                                                                    <Button type="sumbit" color="red" >Enviar</Button>
                                                                </Form>
                                                            </Modal.Description>
                                                        </Modal.Content>
                                                    </Modal>
                                                    <Popup
                                                        openOnTriggerFocus
                                                        mouseEnterDelay={500}
                                                        mouseLeaveDelay={200}
                                                        position="top left"
                                                        content='Se inscreva para receber novas informações!'
                                                        trigger={<Button onClick={() => { setOpen(!open) }} color="red" floated="right">Inscrever-se</Button>} />
                                                </Grid.Column>
                                            </Grid>
                                        </Grid.Row>
                                        <Grid.Row style={{ paddingLeft: "15px", paddingRight: "15px" }}>
                                            <Header style={{ marginBottom: "5px" }}>{name}</Header>
                                            <Header as="h4" color="grey" style={{ marginTop: "0px" }}>{ongs.name_fantasy}</Header>
                                            <p><strong>Tel:</strong> {ongs.cel_number}<br />
                                                {ongs.cidade}, {ongs.uf}<br />
                                                {ongs.bairro}, {ongs.rua} - {ongs.cep}</p>
                                        </Grid.Row>
                                        <Grid.Row style={{ paddingLeft: "15px", paddingRight: "15px" }}>
                                            <Header as="h3">Quem somos</Header>
                                            <p>{ongs.description}</p>
                                        </Grid.Row>
                                        <Grid.Row style={{ paddingLeft: "15px", paddingRight: "15px" }}>
                                            <Header as="h3">Nossas necessidades</Header>
                                            <p>{ongs.necessities}</p>
                                        </Grid.Row>
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
                                            <Header style={{ marginBottom: "5px" }}>{name}</Header>
                                            <Header as="h4" color="grey" style={{ marginTop: "0px" }}>{ongs.name_fantasy}</Header>
                                            <p><strong>Tel:</strong> {ongs.cel_number}<br />
                                                {ongs.cidade}, {ongs.uf}<br />
                                                {ongs.bairro}, {ongs.rua} - {ongs.cep}</p>
                                        </Grid.Column>
                                        <Grid.Column textAlign="right">
                                            <Popup
                                                mouseEnterDelay={500}
                                                mouseLeaveDelay={200}
                                                position="top left"
                                                content='Se inscreva para receber novas informações!'
                                                trigger={<Button color="red" onClick={() => { setOpen(!open) }} floated="right">Inscrever-se</Button>} />
                                        </Grid.Column>
                                    </Grid>

                                </Segment>
                                <Segment style={{ minHeight: "500px" }}>
                                    <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
                                </Segment>
                            </Segment.Group>
                        </Grid.Row>


                    </Grid.Column>
                </Grid.Row>

            </Grid>

        </div>
    )
}