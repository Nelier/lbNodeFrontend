import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Cookie from 'universal-cookie';

import { Grid, Checkbox, Button, Segment, Item, Dropdown, Sidebar, Header, Form, Res, Container, Menu, GridRow, Icon, GridColumn, Sticky } from 'semantic-ui-react';

const cookie = new Cookie();

function handleLogout() {
    cookie.remove("id_user");
    window.location.reload();
}

function MenuComputer({ items }) {
    const history = useHistory();

    return (
        <Menu color="red" inverted borderless>
            <Menu.Item as={Link} to={"/ong"} onClick={() => { history.push("/ong") }} style={{ paddingLeft: "25px" }}>
                <img style={{ width: "4em", height: "3em" }} src='https://i.imgur.com/RdHD4Jb.png' />
            </Menu.Item>
            <Menu.Menu position="right" style={{ paddingRight: "15px" }}>
                {items.map(item => {
                    if (item.type == "logout") {
                        return (
                            <Menu.Item onClick={() => { handleLogout() }} active={item.active}>{item.text}</Menu.Item>
                        );
                    } else {
                        return (
                            <Menu.Item as={Link} to={item.to} onClick={() => { history.push(item.to) }} active={item.active}>{item.text}</Menu.Item>
                        );
                    }

                })}
            </Menu.Menu>
        </Menu>
    );
}

function SubMobile({ active, menuArray = [] }) {

    const history = useHistory();

    try {
        if (active) {
            if (menuArray.length > 0) {
                return (
                    <Menu color="red" borderless fluid inverted stackable style={{ margin: "0px", padding: "0px" }}>
                        {menuArray.map((item) => {
                            return (
                                <Menu.Item as={Link} to={item.to} onClick={() => { history.push(item.to) }} name={item.name}>{item.text}</Menu.Item>
                            );
                        })}
                    </Menu>
                );
            } else {
                return (
                    <Menu color="red" borderless fluid inverted stackable style={{ margin: "0px", padding: "0px" }}>
                        <Menu.Item>Item 1</Menu.Item>
                        <Menu.Item>Item 2</Menu.Item>
                        <Menu.Item>Item 3</Menu.Item>
                    </Menu>
                );
            }

        } else {
            return null;
        }
    } catch (error) {
        console.log("Couldn't Render because of error: " + error);
        return null;
    }


}

function MenuMobile({ items }) {

    const [active, setActive] = useState(false);
    const history = useHistory();

    return (
        <div>

            <Menu color="red" borderless fluid inverted style={{ margin: "0px" }}>
                <Menu.Item as={Link} to={"/ong"} onClick={() => { history.push("/ong") }} style={{ paddingLeft: "25px" }} >
                    <img style={{ width: "3em", height: "3em" }} src='https://i.imgur.com/RdHD4Jb.png' />
                </Menu.Item>
                <Menu.Menu position="right" style={{ paddingRight: "10px" }}>
                    <Menu.Item active={active} onClick={(e) => { setActive(!active) }}>
                        <Icon name="bars" />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
            <SubMobile active={active} menuArray={items} />

        </div>
    );
}

export default function MenuResponsive({ items = [] }) {

    return (
        <div>

            <Grid>
                <Grid.Row stretched columns={1} only="mobile">
                    <Grid.Column style={{ paddingRight: "0px" }}>
                        <MenuMobile items={items} />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={1} only="tablet computer">
                    <Grid.Column style={{ paddingRight: "0px" }}>
                        <MenuComputer items={items} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </div>
    )
}