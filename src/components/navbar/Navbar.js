import React from 'react';
import { NavLink as RouterNavLink } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <Navbar className="navbar--carnage border-bottom" sticky="top" light expand="md">
                <Container>
                    <NavbarBrand href="/">Carnage!!</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink tag={RouterNavLink} to="/" exact activeClassName="active">Hall of
                                    Fame</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={RouterNavLink} to="/video" activeClassName="active">Video</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={RouterNavLink} to="/about" activeClassName="active">About</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        );
    }
}