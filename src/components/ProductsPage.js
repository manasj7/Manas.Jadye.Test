import React from "react";

import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "../App.css";

function ProductPage(productsList) {
  console.log(productsList);
  return (
    <Container>
      <Row>
        {productsList.productsList.map((el) => {
          return (
            <Col md={3} sm={1} lg={4}>
              <Card>
                <Card.Img variant="top" src={`${el.productImage}`} />
                <div className="label">
                  {el.isSale && <Badge variant="danger">Sale</Badge>}

                  {el.isExclusive && <Badge variant="success">Exclusive</Badge>}
                </div>

                <Card.Body>
                  <div className="left-section">
                    <Card.Text style={{ paddingTop: "1rem" }}>
                      {el.productName}
                    </Card.Text>
                  </div>
                  <div className="right-section">
                    <Card.Text>{el.price}</Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default ProductPage;
