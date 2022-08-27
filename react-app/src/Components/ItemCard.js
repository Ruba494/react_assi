import React, { useState, setState } from "react";
import { Card, Row, Col, Button, Modal } from "react-bootstrap";

import "../Style/DarkMode.css";
import "../Style//MenuItem.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/ItemCard.css";

function ItemCard({ key, menuname, image, price, dicription }) {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInc = (count) => {
    setCount(count + 1);
  };
  const handlDec = (count) => {
    if (count < 1) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <>
      <Col >
        <Card onClick={handleShow}>
          <Row className="">
            <Col sm={4}>
              <Card.Img src={image} />
            </Col>
            <Col sm={8}>
              <Card.Body>
                <div className="vstack gap-4">
                  <div className="vstack gap-0">
                    <Card.Title>{menuname}</Card.Title>
                    <Card.Subtitle>200 Cal</Card.Subtitle>
                  </div>
                  <div className="hstack mt-2 " onClick={e => e.stopPropagation()}>
                    <Card.Subtitle className="me-auto">
                      {price + 10 + " SR"}
                    </Card.Subtitle>
                    <div className="hstack" >
                    <Button onClick={() => handleInc(count)}>+</Button>
                    <Card.Text>{count}</Card.Text>
                    <Button onClick={() => handlDec(count)}>-</Button>
                    </div>
                   
                  </div>
                </div>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Col>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header>
          <div className="hstack ">
            <div className="vstack">
              <div className="title">{menuname}</div>
              <div className="sub-title">200 Cal</div>
            </div>

            <Button onClick={handleClose}>
              <span aria-hidden="true">&times;</span>
            </Button>
          </div>
        </Modal.Header>

        <Modal.Body>
          <div className="header-body">
            <p>{dicription}</p>
            <img src={image} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="hstack mt-2">
            <div className="price ">{price + 10 + " SR"}</div>
            <Button onClick={() => handleInc(count)}>+</Button>{" "}
            <div>{count}</div>
            <Button onClick={() => handlDec(count)}>-</Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ItemCard;
