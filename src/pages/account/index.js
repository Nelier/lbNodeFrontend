import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Grid, Checkbox, Button, Segment, Sidebar, Header, Form, Container, Menu, GridRow, Icon, GridColumn } from 'semantic-ui-react';

import api from '../../api/api';
import MenuBar from '../../components/MenuBar'

const Items = [
    { name: "Dashboard" },
    { name: "Sua Conta" },
    { name: "Logout" },
]

export default function Home() {

    const [visible, setVisible] = useState(true);

    const history = useHistory();


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
                    <Menu.Item name="home" as={Link} to="/home">
                        <Icon name="clipboard outline" />Dashboard
                    </Menu.Item>
                    <Menu.Item name="home" as={Link} to="/account" active>
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
                                <h3>Atualizar Informação</h3>
                            </GridRow>

                            <GridRow>
                                <h3>Ola</h3>
                            </GridRow>

                        </Grid>
                    </Segment>

                </Sidebar.Pusher>
            </Sidebar.Pushable>



        </div>
    );
}
