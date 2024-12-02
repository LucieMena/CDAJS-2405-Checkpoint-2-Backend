import { Resolver, Mutation, Arg } from "type-graphql";
import { Country } from "../entities/Country";
import { AppDataSource } from "../datasource/datasource";

@Resolver(Country)
export class CountryMuations {
  @Mutation(() => Country)
  async createCountry(
    @Arg("name") name: string,
    @Arg("code") code: string,
    @Arg("emoji") emoji: string,
    @Arg("continentCode") continentCode: string
  ): Promise<Country> {
    const country = new Country(name, code, emoji, continentCode);

    await AppDataSource.manager.save(country);
    return country;
  }
}
