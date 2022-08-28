import React, { useState, setState } from "react";
import {
  Row,
  Container,
  Button,
  InputGroup,
  Form,
  Dropdown,
  DropdownButton,
  Card,
} from "react-bootstrap";

import "../Style/DarkMode.css";
import "../Style/MenuItem.css";
import ItemCard from "../Components/ItemCard";

function MenuItem({ menuItems }) {
  const [query, setQuery] = useState("");

  function search(menu) {
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
            align="end"
          >
            <Dropdown.Item onClick={(e) => setQuery("soup")}>
              Soup
            </Dropdown.Item>
            <Dropdown.Item onClick={(e) => setQuery("rice")}>
              Rice
            </Dropdown.Item>
            <Dropdown.Item onClick={(e) => setQuery("")}>others</Dropdown.Item>
          </DropdownButton>
          <Button variant="outline-secondary">Search</Button>
        </InputGroup>
      </Container>
      <Container>
        <div class="d-flex justify-content-center mx-0 ">
          <div class="p-2 catgory justify-content-between p-3 bread">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-bread"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M17 5a3 3 0 0 1 2 5.235v6.765a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6.764a3 3 0 0 1 1.824 -5.231l.176 -.005h10z"></path>
            </svg>
            <p>Breakfast</p>
            <p>23</p>
          </div>
          <div class="p-2 catgory justify-content-between p-3 coffe">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-coffee"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M3 14c.83 .642 2.077 1.017 3.5 1c1.423 .017 2.67 -.358 3.5 -1c.83 -.642 2.077 -1.017 3.5 -1c1.423 -.017 2.67 .358 3.5 1"></path>
              <path d="M8 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2"></path>
              <path d="M12 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2"></path>
              <path d="M3 10h14v5a6 6 0 0 1 -6 6h-2a6 6 0 0 1 -6 -6v-5z"></path>
              <path d="M16.746 16.726a3 3 0 1 0 .252 -5.555"></path>
            </svg>
            <p>Drinks</p>
            <p>23</p>
          </div>
          <div class="p-2 catgory justify-content-between p-3 soup">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-soup"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M3 19h18"></path>
              <path d="M3 11h18a8 8 0 0 1 -8 8h-2a8 8 0 0 1 -8 -8z"></path>
              <path d="M9 8v-3"></path>
              <path d="M12 5v3"></path>
              <path d="M15 5v3"></path>
            </svg>
            <p>Soups</p>
            <p>23</p>
          </div>
          <div class="p-2 catgory justify-content-between p-3 fish">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-fish"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M16.69 7.44a6.973 6.973 0 0 0 -1.69 4.56c0 1.747 .64 3.345 1.699 4.571"></path>
              <path d="M2 9.504c7.715 8.647 14.75 10.265 20 2.498c-5.25 -7.761 -12.285 -6.142 -20 2.504"></path>
              <path d="M18 11v.01"></path>
              <path d="M11.5 10.5c-.667 1 -.667 2 0 3"></path>
            </svg>
            <p>Sushi</p>
            <p>23</p>
          </div>
          <div className="vr" />
          <div class="p-2 catgory justify-content-between p-3 list">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-list"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <line x1="9" y1="6" x2="20" y2="6"></line>
              <line x1="9" y1="12" x2="20" y2="12"></line>
              <line x1="9" y1="18" x2="20" y2="18"></line>
              <line x1="5" y1="6" x2="5" y2="6.01"></line>
              <line x1="5" y1="12" x2="5" y2="12.01"></line>
              <line x1="5" y1="18" x2="5" y2="18.01"></line>
            </svg>
            <p>Orders</p>
            <p>23</p>
          </div>
        </div>
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
              .slice(0, 9)
              .map((Item) => {
                return (
                  <ItemCard
                    key={Item._id}
                    menuname={Item.menuname}
                    image={
                      Item.images[Math.floor(Math.random() * (2 - 0 + 1)) + 0]
                    }
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
