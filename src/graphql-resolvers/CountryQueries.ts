import { Query, Resolver, Arg } from "type-graphql";
import { Country } from "../entities/Country";
import { AppDataSource } from "../datasource/datasource";

@Resolver(Country)
export class CountryQueries {
  @Query(() => [Country])
  async getAllCountries(): Promise<Country[]> {
    return await AppDataSource.manager.find(Country);
  }

  @Query(() => [Country])
  async getCountryByCode(
    @Arg("countryCode") countryCode: string
  ): Promise<Country[]> {
    const countries: Country[] = await AppDataSource.manager.find(Country, {
      where: { code: countryCode },
    });

    return countries;
  }

  @Query(() => [Country])
  async getCountriesByContinent(
    @Arg("continentCode") continentCode: string
  ): Promise<Country[]> {
    const countries: Country[] = await AppDataSource.manager.find(Country, {
      where: { continentCode },
    });

    return countries;
  }
}
