import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import {
    Container,
    Icon,
    Image,
    Menu,
    Sidebar,
    Responsive
} from "semantic-ui-react";


const NavBarDesktop = (items) => {
    return (
        <Menu fixed="top" vertical>
            <Menu.Item>
                <Image size="mini" src="https://react.semantic-ui.com/logo.png" />
            </Menu.Item>
            {/* {items.map(item => {
                return <Menu.Item {...item} />
            })} */
                console.log(items)}
        </Menu>
    )
};

const NavBarChildren = ({ children }) => {
    return (
        <Container style={{ marginTop: "5em" }}>{children}</Container>
    )
};



export default function NavBar(props) {

    const [visible, setVisible] = useState(false);
    const [children, setChildren] = useState(props);
    const [items, setLeftItems] = useState(props.items);

    const handlePusher = () => {
        if (visible) setVisible(false);
    };

    const handleToggle = () => setVisible(!visible);

    return (
        <div>
            <NavBarDesktop items={items} />
            <NavBarChildren>{children}</NavBarChildren>
        </div>

    );
}