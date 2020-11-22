import React from "react";
import {useEffect, useState} from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { GetRandomFact } from "../Services/AnimalsFactsService";
import Spinner from "../Components/Spinner/Spinner";

function AnimalFacts() {
    const [fact, setFact] = useState({
        loading: true,
        data: null,
        error: false
    });

    let requestFact = () => {
        setFact({
            loading: true,
            data: null,
            error: false
        });
        GetRandomFact()
        .then( res => setFact({
            loading: false,
            data: res.data,
            error: false
        }))
        .catch( err => setFact({
            loading: false,
            data: null,
            error: true
        }));
    }

    useEffect(()=>{
        requestFact();
    }, []);

    let content = null;

    if (fact.loading) {
        content = <Spinner/>
    }

    if (fact.error) {
        content =
            <Alert variant="danger">
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                <p>
                    There was an error please refresh or try again later.
                </p>
            </Alert>
    }

    if (fact.data) {
        content =
            <Jumbotron>
                <h1>Did you know ?</h1>
                <h4 className="p-5 font-weight-normal">
                    {fact.data.text}
                </h4>
                <Button variant="info" onClick={ () => {requestFact();} } disabled={fact.loading}>One more</Button>
            </Jumbotron>
    }
    
    return (
        <div>
            {content}
        </div>
    );
}

export default AnimalFacts;