import { Component } from "react";
import {Button , Container, Card, Row, Col, Badge} from "react-bootstrap"
import fantasy from "../data/fantasy.json";
import "../AllTheBooks.css";

class AllTheBooks extends Component {
  render() {
    return (
      <Container className="mt-3">
        <Row className="g-3">
          {fantasy.map((book, index) => (
            <Col xs={3}>
              <Card
                className="border-top-1 border-start-0 border-end-1 border-bottom-0 bg-light shadow-lg h-100 p-1 book-card"
                key={`book-${index}`}
              >
                <Card.Img
                  variant="top"
                  src={book.img}
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="text-center">{book.title}</Card.Title>
                  <Card.Text className="text-center fw-semibold fst-italic">
                    {book.category}
                  </Card.Text>
                  <div className="mt-auto d-flex justify-content-between">
                    <Button variant="success">Buy</Button>
                    <Badge bg="dark" className="d-flex align-items-center">
                      {book.price}$
                    </Badge>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;
