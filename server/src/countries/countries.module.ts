import {Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {CountriesController} from './countries.controller';
import {CountriesService} from './countries.service';
import {Country, CountryInfo} from "./country.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Country, CountryInfo])],
  // imports: [
  //   TypeOrmModule.forFeature([Country]),
  //   TypeOrmModule.forFeature([CountryInfo]),
  // ],
  // imports: [TypeOrmModule.forFeature([CountryInfo])],
  controllers: [CountriesController],
  providers: [CountriesService]
})
export class CountriesModule {
}
