import React, { useState,setState } from "react";
import {
  Card,
  Row,
  Col,
  Container,
  Button,
  Stack,
  InputGroup,
  Form,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import "./MenuItem.css";
import Modal from "./Modal";

function MenuItem({ menuItems }) {
  const [query, setQuery] = useState("");
  const [count, setCount] = useState(0);
  
  

  function search(menu){
    return menu.filter(
      (item) =>
        item.menuname.toLocaleLowerCase().includes(query) ||
        item.description.toLocaleLowerCase().includes(query)
    );
  }
 




  return (
    <>
   
      <Container className="md me-5 mb-5">
        <InputGroup className="search-bar  justify-content-md-center ">
          <Form.Control
            placeholder="Search"
            onChange={(e) => setQuery(e.target.value)}
          />
          <DropdownButton
            variant="outline-secondary"
            title="Filter"
            id="input-group-dropdown-2"
            align="end"
           
          >
            <Dropdown.Item onClick={(e) => setQuery("soup")}>
              Soup
            </Dropdown.Item>
            <Dropdown.Item onClick={(e) =>setQuery("rice")}>
              Rice
            </Dropdown.Item>
            <Dropdown.Item onClick={(e) => setQuery("")}>others</Dropdown.Item>
          </DropdownButton>
          <Button variant="outline-secondary">Search</Button>
        </InputGroup>
      </Container>
      
      <Container className="m-3 ">
        <Stack direction="horizontal" className="" gap={3}>
          <h1 className="">Breakfast</h1>
          <div className="vr" />
          <p>{search(menuItems).length}</p>
        </Stack>
      </Container>
      
      <Container className=" ">
        <Container className="m-3 ">
          <Row xs={1} md={3} className="g-4">
            {search(menuItems)
              .slice(0, 12)
              .map((Item) => {
                return (
                  <Col>
                    <Card >
                      <Row className="">
                        <Col sm={4}>
                          {" "}
                          <Card.Img src={Item.images[0]} />
                        </Col>
                        <Col sm={8}>
                          <Card.Body>
                            <Stack gap={4}>
                              <Stack gap={0}>
                                <Card.Title>{Item.menuname}</Card.Title>
                                <Card.Subtitle>200 Cal</Card.Subtitle>
                              </Stack>
                              <Stack direction="horizontal" className="mt-2">
                                <Card.Subtitle className="me-auto">
                                  {Item.menuname.length + 10 + " SR"}
                                </Card.Subtitle>
                                <Button onClick={() => setCount(count + 1)}>
                                  +
                                </Button>{" "}
                                <Card.Text>{count}</Card.Text>
                                <Button onClick={() => setCount(count - 1)}>
                                  -
                                </Button>
                              </Stack>
                            </Stack>
                          </Card.Body>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                );
              })}{" "}
          </Row>
        </Container>
       
      </Container>
    </>
  );
}

export default MenuItem;
