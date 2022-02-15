import React from "react";
import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const MovieCard = ({ updateItem, deleteItem, movie }) => {
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
    updateItem({ id: movie.id, ...newMovie }, movie.id);
    setShow(false);
  };

  return (
    <div className="card d-flex flex-row w-100  mb-4 mt-4">
      <img
        className="card-img-left w-25 p-2"
        src={movie.posterURL}
        alt="Card cap"
      />
      <div className="d-flex flex-column justify-content-top card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">{movie.description}</p>
        <p className="card-text">rating: {movie.rating}/5</p>
        <div
          style={{ width: "10rem" }}
          className="d-flex justify-content-between align-self-end mt-5 card-cmd"
        >
          <button onClick={handleShow} className="btn btn-warning">
            Update
          </button>
          <button
            onClick={() => {
              deleteItem(movie.id);
            }}
            className="btn btn-danger"
          >
            Delete
          </button>
        </div>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Movie</Modal.Title>
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
    </div>
  );
};

export default MovieCard;
