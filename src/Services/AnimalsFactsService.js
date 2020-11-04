import useHttpGet from '../Hooks/HttpGet';

const baseUrl = `https://cat-fact.herokuapp.com`;

function GetRandomFact() {
    return useHttpGet(baseUrl + '/facts/random');
};

export { GetRandomFact };