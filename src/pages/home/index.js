import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Grid, Segment, Menu } from 'semantic-ui-react'

import Navgation from '../../components/NavBar'

const leftItems = [
    { as: 'a', content: "Home", key: "home" },
    { as: 'a', content: "Logar", Key: "Logar" }
];

const rightItems = [
    { as: 'a', content: "Registrar", key: "Registrar" }
];

export default function Home() {

    return (
        <Navgation leftItems={leftItems} rightItems={rightItems}>
            <h3>Children</h3>
        </Navgation>
    );
}
