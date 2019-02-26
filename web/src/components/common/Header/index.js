import React, { Component } from 'react';
import {
    Alignment,
    Button,
    Navbar,
    InputGroup
} from "@blueprintjs/core";

import './styles.css';

class Header extends Component {
    render() {
        const SearchBtn = (
            <Button className="bp3-minimal" icon="arrow-right" />
        );

        return (
            <Navbar className='bp3-dark app__header'>
                <Navbar.Group align={Alignment.LEFT}>
                    <Navbar.Heading>Silisia</Navbar.Heading>
                </Navbar.Group>
                <Navbar.Group align={Alignment.RIGHT}>
                    <InputGroup className='bp3-round' placeholder='Search...' leftIcon='search' rightElement={SearchBtn} />
                    <Navbar.Divider />
                    <Button className="bp3-minimal" icon="user" />
                    <Button className="bp3-minimal" icon="notifications" />
                    <Button className="bp3-minimal" icon="cog" />
                </Navbar.Group>
            </Navbar>
        );
    }
}

export default Header;
