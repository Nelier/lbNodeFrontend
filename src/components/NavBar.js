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
            {_.map(leftItems, item => <Menu.Item {...item} />)}
            <Menu.Menu position="right">
                {_.map(rightItems, item => <Menu.Item {...item} />)}
            </Menu.Menu>
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
    const [children, setChildren] = useState(props.children);
    const [leftItems, setLeftItems] = useState(props.leftItems);
    const [rightItems, setRightItems] = useState(props.rightItems);

    handlePusher = () => {
        if (visible) setVisible(false);
    };

    handleToggle = () => setVisible(!visible);

    return (
        <div>
            <NavBarDesktop leftItems={leftItems} rightItems={rightItems} />
            <NavBarChildren>{children}</NavBarChildren>
        </div>

    );
}