import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import jsonData from "../products.json";

import ProductPage from "./ProductsPage";

const Header = () => {
  let [filteredProducts, setProducts] = useState(jsonData);
  let filteredProductsArray = [];

  return (
    <Container>
      <Navbar>
        <Navbar.Brand>Women's tops</Navbar.Brand>
        <Navbar.Collapse
          className="justify-content-end"
          id="responsive-navbar-nav"
        >
          <NavDropdown
            title="Filter by size"
            id="basic-nav-dropdown"
            onSelect={(eventKey) => {
              jsonData.filter((item, i) => {
                for (i = 0; i < item.size.length; i++) {
                  if (eventKey === item.size[i]) {
                    filteredProductsArray.push(item);
                    // console.log(filteredProducts);
                    //this.setProducts({ products: el });
                  }
                }

                setProducts(filteredProductsArray);
              });
            }}
          >
            <NavDropdown.Item eventKey={"XS"}>XS</NavDropdown.Item>
            <NavDropdown.Item eventKey={"S"}>S</NavDropdown.Item>
            <NavDropdown.Item eventKey={"M"}>M</NavDropdown.Item>
            <NavDropdown.Item eventKey={"L"}>L</NavDropdown.Item>
            <NavDropdown.Item eventKey={"XL"}>XL</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Navbar>

      <ProductPage productsList={filteredProducts} />
    </Container>
  );
};

export default Header;
