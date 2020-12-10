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


export default function Home() {

    const id_ong = localStorage.getItem("id_ong");
    const email_visitor = localStorage.getItem("email_visitor");
    const url = localStorage.getItem("url");

    async function ReSend() {

        const data = {
            id_ong,
            email_visitor,
            url
        }

        try {
            const response = await api.post("/newsletter/validation", data, { headers: { authorization: true } });

            if (response) {
                return alert("Email reenviado!");
            }
        } catch (error) {
            return alert("Erro inesperado!");
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

                            <Grid.Row textAlign="center">

                                <Header>Um email foi enviado para confirmar sua inscrição na Newsletter</Header>
                                <p>Caso não tenha recebido clique no botão a seguir para reenvio do email</p>
                                <Button color="red" onClick={() => { ReSend() }} > Reenviar </Button>



                            </Grid.Row>

                        </Grid>
                    </Container>


                </Grid.Row>

                <Grid.Row celled only="tablet computer" style={{ marginTop: "25px" }}>
                    <Grid.Column width={2} verticalAlign='middle'>
                        <Advertisement unit="skyscraper" test='Skyscraper' />
                    </Grid.Column>
                    <Grid.Column width={13}>

                        <Header>Um email foi enviado para confirmar sua inscrição na Newsletter</Header>
                        <p>Caso não tenha recebido clique no botão a seguir para reenvio do email</p>
                        <Button color="red" onClick={() => { ReSend() }} > Reenviar </Button>

                    </Grid.Column>
                </Grid.Row>

            </Grid>

        </div>
    )
}