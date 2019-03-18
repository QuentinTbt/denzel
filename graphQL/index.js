import { GraphQLObjectType, GraphQLSchema } from "graphql";

import mutation from "./mutation";
import query from "./query";

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Query",
    fields: query
  }),
  mutation: new GraphQLObjectType({
    name: "Mutation",
    fields: mutation
  })
});