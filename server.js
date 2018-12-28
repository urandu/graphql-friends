import express from 'express'

const app = express();

app.get('/', (req, res) => {
    res.send("GraphQL and Relay modern is kinda cool!")
});

app.listen(9000, () => console.log('Running server on localhost:9000/graphql'))