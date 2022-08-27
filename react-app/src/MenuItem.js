import React, { useState,setState } from "react";
import {
  Card,
  Row,
  Col,
  Container,
  Button,
  InputGroup,
  Form,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";

import "./MenuItem.css";
import ItemCard from "./ItemCard";
import ItemModal from "./ItemModal";


function MenuItem({ menuItems }) {
  const [query, setQuery] = useState("");
  
  
  

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
        <div className="hstack gap-3">
          <h1 className="">Breakfast</h1>
          <div className="vr" />
          <p>{search(menuItems).length}</p>
        </div>

      </Container>
      
      <Container className=" ">
        <Container className="m-3 ">
          <Row xs={1} md={3} className="g-4">
            {search(menuItems)
              .slice(0, 12)
              .map((Item) => {
                return (
                  <ItemCard key={Item._id}  
                  menuname={Item.menuname}
                  image={Item.images[Math.floor(Math.random() * (2 - 0 + 1)) + 0]}
                  price={Item.menuname.length}
                  dicription={Item.description}
                  />
                );
              })}{" "}
          </Row>
        </Container>
       
  
      </Container>
    </>
  );
}

export default MenuItem;
