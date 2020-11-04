import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <Jumbotron>
                <h1>Hello !!!</h1>
                <p>
                    This is a simple application configured to create React applications with Bootstrap and Axios.
                </p>
                <p>
                    <Link to={`/about`}>
                        <Button variant="info">Read more</Button>
                    </Link>
                </p>
            </Jumbotron>
        </div>
    );
}

export default Home;