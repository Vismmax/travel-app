import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {DeleteResult, Repository} from "typeorm";
import {Country} from "./country.entity";
import {CreateCountryDto} from "./dto";

@Injectable()
export class CountriesService {
    constructor(
        @InjectRepository(Country)
        private countriesRepository: Repository<Country>,
    ) {}

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
}
