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


const NavBarDesktop = ({ leftItems, rightItems }) => {
    return (
        <Menu fixed="top" inverted>
            <Menu.Item>
                <Image size="mini" src="https://react.semantic-ui.com/logo.png" />
            </Menu.Item>
            {leftItems.map((leftItems) => { <Menu.Item {...leftItems} /> })}
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
    const [leftItems, setLeftItems] = useState(props);

    const handlePusher = () => {
        if (visible) setVisible(false);
    };

    const handleToggle = () => setVisible(!visible);

    return (
        <div>
            <NavBarDesktop leftItems={leftItems} />
            <NavBarChildren>{children}</NavBarChildren>
        </div>

    );
}