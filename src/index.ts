import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSchema } from "type-graphql";
import { AppDataSource } from "./datasource/datasource";
import { CountryQueries } from "./graphql-resolvers/CountryQueries";
import { CountryMuations } from "./graphql-resolvers/CountryMutations";

async function startApolloServer() {
  await AppDataSource.initialize();
  console.log("connected to SQLite  server");

  const schema = await buildSchema({
    resolvers: [CountryQueries, CountryMuations],
  });

  const server = new ApolloServer({ schema });
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀 Server ready at ${url}`);
}

startApolloServer().catch((error) => {
  console.error("Error starting the server:", error);
});
