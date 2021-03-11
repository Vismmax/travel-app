import {Body, Controller, Delete, Get, Param, Post, Put, Query} from '@nestjs/common';
import {CreateCountryDto, ListAllEntities} from "./dto";
import {CountriesService} from "./countries.service";
import {Country} from "./country.entity";

@Controller('countries')
export class CountriesController {
    constructor(private countriesService: CountriesService) {}
    
    @Get()
    getAll(@Query() query: ListAllEntities): Promise<Country[]> {
        return this.countriesService.getAll();
    }

    @Get(':id')
    getOne(@Param('id') id: string): string {
        return `This action returns a #${id} cat`;
    }

    @Post()
    create(@Body() createCountryDto: CreateCountryDto): Promise<Country> {
        return this.countriesService.add(createCountryDto);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateCountryDto: CreateCountryDto): string {
        return 'This action adds a new cat';
    }

    @Delete()
    remove(): string {
        return 'This action adds a new cat';
    }

}
