import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';


const app = express();

app.get('/', (req, res) => {
    res.send("GraphQL and Relay modern is kinda cool!")
});

const root = {hello: () => "Hi, I`m Billy!"}

app.use('/graphql', graphqlHTTP({
    schema, rootValue: root,
    graphiql: true,
}))

app.listen(9000, () => console.log('Running server on localhost:9000/graphql'))