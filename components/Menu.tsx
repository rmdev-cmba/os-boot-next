// @flow 
import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Container
} from 'reactstrap';

type Props = {

};
export const Menu = (props: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
      <Navbar color="light" light expand="md">
          <Container>
        <NavbarBrand href="/">RM Eletrônica</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/orcamento">Orçamento</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Ordem Serviço
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                <NavLink href="/nova">Nova</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink href="/busca">Busca</NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>OS 1.0</NavbarText>
        </Collapse>
        </Container>
      </Navbar>
    </div>
    );
};