import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import axios from 'axios';
import {DeleteResult, Repository} from "typeorm";
import {Country, CountryInfo} from "./country.entity";
import {CreateCountryDto} from "./country.dto";

@Injectable()
export class CountriesService {
  constructor(
    @InjectRepository(Country)
    private countriesRepository: Repository<Country>,
    @InjectRepository(CountryInfo)
    private countryInfoRepository: Repository<CountryInfo>,
  ) {
  }

  getAll(): Promise<Country[]> {
    console.log('process.env: ', process.env.TEST);
    return this.countriesRepository.find();
  }

  getOne(id: string): Promise<Country> {
    return this.countriesRepository.findOne(id);
  }

  async add(country: CreateCountryDto): Promise<Country> {
    return await this.countriesRepository.save(country);
  }

  async remove(id: string): Promise<DeleteResult> {
    return await this.countriesRepository.delete(id);
  }

  async check(country: string) {
    const res = await this.getCountryInfo(country);
    if (res.error) {
      return {
        info: {},
        isExistDB: false,
        isExist: false,
      }
    }

    const countryInfoDB = await this.countriesRepository.findOne({
      alpha3Code: res.info.alpha3Code,
    });
    if (countryInfoDB) {
      return {
        info: countryInfoDB,
        isExistDB: true,
        isExist: true,
      }
    }
    return {
      info: res.info,
      isExistDB: false,
      isExist: true,
    }
  }

  async getCountryInfo(country: string) {
    const urlApiCountry = process.env.URL_API_COUNTRY + `/${country}`;
    // const fields = 'name;capital;currencies;alpha2Code;alpha3Code;latlng;timezones;languages;flag';
    const fields = 'name;capital;currencies;alpha2Code;alpha3Code;timezones;flag';
    try {
      const countryResponse = await axios.get(
        urlApiCountry,
        {params: {fields}}
      );
      const countryData = countryResponse.data[0];

      const capitalResponse = await axios.get(
        process.env.URL_API_CAPITAL, {
          params: {
            name: countryData.capital,
            apikey: process.env.KEY_API_CAPITAL,
          }
        })
      const capitalData = capitalResponse.data;

      const countryInfo = {
        name: countryData.name,
        capital: countryData.capital,
        alpha2Code: countryData.alpha2Code,
        alpha3Code: countryData.alpha3Code,
        timezones: countryData.timezones[0],
        latCapital: capitalData.lat,
        lonCapital: capitalData.lon,
        currenciesCode: countryData.currencies[0].code,
        currenciesName: countryData.currencies[0].name,
        currenciesSymbol: countryData.currencies[0].symbol,
        flag: countryData.flag,
      };

      const infoDB = await this.countryInfoRepository.findOne({
        alpha3Code: countryInfo.alpha3Code
      });
      if (infoDB) {
        return {info: infoDB, error: false};
      }

      const info = await this.countryInfoRepository.save(countryInfo);

      return {info, error: false};
    } catch ({response: {data: {status, data}}}) {
      return {countryInfo: {}, error: true};
    }
  }
}
