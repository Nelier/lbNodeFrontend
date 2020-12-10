import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import queryString from 'query-string'

import { Grid, Checkbox, Image, Button, Segment, Item, Dropdown, Sidebar, Header, Form, Res, Container, Menu, GridRow, Icon, GridColumn, Advertisement, Card } from 'semantic-ui-react';

import MenuResponsive from '../../../../components/MenuResponsive'
import api from '../../../../api/api';

const items = [
    { to: "/ong", name: "Home", text: "Home" },
    { to: "/ong", name: "Login", text: "Login" },
]

const extra = (
    <a>
        <Icon name='user' />
      16 Friends
    </a>
)

const query = queryString.parse(window.location.search);
const data = {
    id: query.id,
    token: query.token,
    iduser: query.iduser
}

export default function Home() {


    useEffect(async function call() {

        try {
            const request = await api.put("/newsletter/validate", data, { headers: { authorization: "true" } });

            return alert("Email validado!");

        } catch (error) {
            console.log(error);
            return alert("Erro!");
        }

    });

    async function Validate() {
        console.log(window.location.search);
        console.log(queryString.parse(window.location.search));
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

                            <Grid.Row textAlign="center" >

                                <Header>Sua validação foi concluida!</Header>




                            </Grid.Row>

                        </Grid>
                    </Container>


                    {/* 
                    <Grid.Column>

                        <Grid.Row verticalAlign="middle">
                            <Advertisement unit="mobile leaderboard" test='mobile leaderboard' />
                        </Grid.Row>

                        <Grid.Row style={{ padding: "10px" }}>
                            <Card.Group itemsPerRow="4" stackable>
                                <Card>
                                    <Card.Content>
                                        <Image
                                            style={{ marginBottom: "10px", width: "100%", maxHeight: "70%", maxWidth: "70%" }}
                                            size='small'
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
                                </Card>
                                <Card fluid>
                                    <Card.Content>
                                        <Image
                                            style={{ marginBottom: "10px", width: "100%" }}
                                            size='small'
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
                                </Card>
                                <Card>
                                    <Card.Content>
                                        <Image
                                            style={{ marginBottom: "10px", width: "100%" }}
                                            size='small'
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
                                </Card>
                                <Card fluid>
                                    <Card.Content>
                                        <Image
                                            style={{ marginBottom: "10px", width: "100%" }}
                                            size='small'
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
                                </Card>
                                <Card fluid>
                                    <Card.Content>
                                        <Image
                                            style={{ marginBottom: "10px", width: "100%" }}
                                            size='small'
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
                                </Card>
                                <Card fluid>
                                    <Card.Content>
                                        <Image
                                            style={{ marginBottom: "10px", width: "100%" }}
                                            size='small'
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
                                </Card>
                            </Card.Group>
                        </Grid.Row>

                    </Grid.Column> */}
                </Grid.Row>

                <Grid.Row celled only="tablet computer" style={{ marginTop: "25px" }}>
                    <Grid.Column width={2} verticalAlign='middle'>
                        <Advertisement unit="skyscraper" test='Skyscraper' />
                    </Grid.Column>
                    <Grid.Column width={13} textAlign="center" >

                        <Header>Sua validação foi concluida!</Header>


                    </Grid.Column>
                </Grid.Row>

            </Grid>

        </div>
    )
}