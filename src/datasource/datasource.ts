import "reflect-metadata";
import { DataSource } from "typeorm";
import { Country } from "../entities/Country";

// configurer la connexion TypeORM à la base de données
export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "countries.db",
  synchronize: true,
  logging: false,
  entities: [Country],
});
