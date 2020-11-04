import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

function About() {
    return (
        <div>
            <Jumbotron>
                <h1>About</h1>
                <p>
                    This is a simple application configured to create React applications with Bootstrap and Axios.
                </p>
                <Container className="m-0">
                <Row>
                    <Col xs md={6} lg={4} className="p-0">
                        <ListGroup variant="flush">
                            <ListGroup.Item><a href="https://en.reactjs.org/docs/getting-started.html">Learn React</a></ListGroup.Item>
                            <ListGroup.Item><a href="https://react-bootstrap.netlify.app/getting-started/introduction">Learn Bootstrap</a></ListGroup.Item>
                            <ListGroup.Item><a href="https://github.com/axios/axios">Learn Axios</a></ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
                </Container>
                <p>
                    You can download code of this app at: <a href="https://github.com/kmieciakm/ReactBase">Github</a>
                </p>
                <p>
                    <Link to={`/`}>
                        <Button variant="info">Home</Button>
                    </Link>
                </p>
            </Jumbotron>
        </div>
    );
}

export default About;