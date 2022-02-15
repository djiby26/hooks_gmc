import React from "react";
import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const AddMovie = ({ addItem }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const newMovie = {};

  const handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    newMovie[name] = target.value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({ id: Math.floor(Math.random() * (15 - 6) + 6), ...newMovie });
    setShow(false);
  };

  return (
    <>
      <Button variant="primary" className="" onClick={handleShow}>
        Add
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add new Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                onChange={handleInputChange}
                name="title"
                type="text"
                placeholder="Enter title for the movie"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                name="description"
                onChange={handleInputChange}
                type="text"
                placeholder="Movie Description"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Rating</Form.Label>
              <Form.Select
                name="rating"
                onChange={handleInputChange}
                type="number"
                label="Check me out"
              >
                <option value="0">No Rating</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Poster Url</Form.Label>
              <Form.Control
                name="posterURL"
                onChange={handleInputChange}
                type="text"
                placeholder="Add an Image"
              />
            </Form.Group>

            <Button onClick={handleSubmit} variant="primary" type="button">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddMovie;
