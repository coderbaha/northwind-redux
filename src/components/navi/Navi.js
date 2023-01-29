import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

import CartSummary from "../cart/CartSummary";

function Navi(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args} color="light" light expand="md">
      <NavbarBrand><Link to="/">Northwind Mağazası</Link></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link to="/saveproduct">Ürün ekle</Link>
                </NavLink>
              </NavItem>
              <CartSummary />
            </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navi;
