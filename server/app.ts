import express from "express";
import { graphqlHTTP } from "express-graphql";

const PORT = 4000;

const app = express();

app.use("/graphql", graphqlHTTP({}));

app.listen(PORT, () => {
  console.log("listening to port " + PORT);
});
