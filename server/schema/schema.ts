import { GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";

const Book = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "Root",
  fields: () => ({
    book: {
      type: Book,
      args: {
        id: { type: GraphQLString },
      },
      resolve(source, args) {
        //code to get data from db "resolve"
      },
    },
  }),
});

export default new GraphQLSchema({
  query: RootQuery,
});
