import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';

import { Grid, Checkbox, Image, Button, Segment, Item, Dropdown, Sidebar, Header, Form, Res, Container, Menu, GridRow, Icon, GridColumn, Advertisement, Card } from 'semantic-ui-react';

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

export default function Home() {

    const [ongs, setData] = useState([]);

    const history = useHistory();

    useEffect(() => {

        try {
            api.get('/singup').then(response => {
                setData(response.data);
            });

        } catch (error) {
            alert("Deu erro!");
            console.log(error);
        }

    }, ongs)

    function handleProfile(param) {
        return history.push(`/ong/profile/${param}`)
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

                                <Card.Group stackable style={{ padding: "20px", boxSizing: "border-box" }}>

                                    {/* <Card raised style={{ marginBottom: "25px" }}>
                                        <Card.Content>
                                            <Image
                                                style={{ marginBottom: "10px", width: "100%" }}
                                                size='mini'
                                                src='https://react.semantic-ui.com/images/wireframe/image.png'
                                            />
                                            <Card.Header>Steve Sanders</Card.Header>
                                            <Card.Meta>Friends of Elliot</Card.Meta>
                                            <Card.Description>
                                                Steve wants to add you to the group <strong>best friends</strong>
                                            </Card.Description>
                                        </Card.Content>
                                        <Card.Content extra>
                                            <div className='ui two buttons'>
                                                <Button basic color='green'>
                                                    Approve
                                        </Button>
                                                <Button basic color='red'>
                                                    Decline
                                        </Button>
                                            </div>
                                        </Card.Content>
                                    </Card> */}

                                    {ongs.map((item) => {
                                        return (
                                            <Card>
                                                <Card.Content>
                                                    <Card.Header>{item.name}</Card.Header>
                                                    <Card.Meta>{item.cidade}, {item.uf}</Card.Meta>
                                                    <Card.Description style={{ overflow: "hidden", maxHeight: "68px" }}>
                                                        {item.description}
                                                    </Card.Description>
                                                </Card.Content>
                                                <Card.Content extra>
                                                    <div style={{ float: "right" }}>
                                                        <Button color='red' onClick={() => { handleProfile(item.id_ong) }} >
                                                            Ler mais
                                                         </Button>
                                                    </div>
                                                </Card.Content>
                                            </Card>
                                        )
                                    })}


                                </Card.Group>

                            </Grid.Row>

                        </Grid>
                    </Container>

                </Grid.Row>

                <Grid.Row celled only="tablet computer" style={{ marginTop: "25px" }}>

                    <Grid.Column width={2} verticalAlign='middle'>
                        <Advertisement unit="skyscraper" test='Skyscraper' />
                    </Grid.Column>

                    <Grid.Column width={13}>

                        <Card.Group itemsPerRow="4">

                            {/* <Card>
                                <Card.Content>
                                    <Card.Header>Steve Sanders</Card.Header>
                                    <Card.Meta>Friends of Elliot</Card.Meta>
                                    <Card.Description style={{ overflow: "hidden", maxHeight: "68px" }}>
                                        Steve wants to add you to the group <strong>best friends</strong>
                                        Steve wants to add you to the group <strong>best friends</strong>
                                        Steve wants to add you to the group <strong>best friends</strong>
                                        Steve wants to add you to the group <strong>best friends</strong>
                                        Steve wants to add you to the group <strong>best friends</strong>
                                        Steve wants to add you to the group <strong>best friends</strong>
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <div className="float left">
                                        <Button color='red'>
                                            Ler mais
                                        </Button>
                                    </div>
                                </Card.Content>
                            </Card> */}


                            {ongs.map((item) => {
                                return (
                                    <Card>
                                        <Card.Content>
                                            <Card.Header>{item.name}</Card.Header>
                                            <Card.Meta>{item.cidade}, {item.uf}</Card.Meta>
                                            <Card.Description style={{ overflow: "hidden", maxHeight: "68px" }}>
                                                {item.description}
                                            </Card.Description>
                                        </Card.Content>
                                        <Card.Content extra>
                                            <div style={{ float: "right" }}>
                                                <Button color='red' onClick={() => { handleProfile(item.id_ong) }}>
                                                    Ler mais
                                        </Button>
                                            </div>
                                        </Card.Content>
                                    </Card>
                                )
                            })}


                        </Card.Group>

                    </Grid.Column>
                </Grid.Row>

            </Grid>

        </div>
    )
}