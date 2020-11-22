import axios from 'axios';

const baseUrl = `https://cat-fact.herokuapp.com`;

function GetRandomFact() {
    return axios.get(baseUrl + '/facts/random');
};

export { GetRandomFact };