import {Body, Controller, Delete, Get, Param, Post, Put, Query} from '@nestjs/common';
import {CreateCountryDto, ListAllEntities} from "./country.dto";
import {CountriesService} from "./countries.service";
import {Country} from "./country.entity";

@Controller('countries')
export class CountriesController {
  constructor(private countriesService: CountriesService) {
  }

  @Get()
  getAll(@Query() query: ListAllEntities): Promise<Country[]> {
    return this.countriesService.getAll();
  }

  @Get('check')
  check(@Query('country') country: string): Promise<any> {
    // return `This action returns a #${id} cat`;
    return this.countriesService.check(country);
  }

  @Get(':id')
  getOne(@Param('id') id: string): string {
    return `This action returns a #${id} cat`;
  }

  @Post()
  create(@Body() createCountryDto: CreateCountryDto): Promise<Country> {
    console.log('createCountryDto: ', createCountryDto)
    return this.countriesService.add(createCountryDto);
  }

  // @Post()
  // async create(@Body() createCountryDto: CreateCountryDto): Promise<void> {
  //   console.log('createCountryDto: ', createCountryDto)
  //   const ss = await this.countriesService.add(createCountryDto);
  //   console.log('ss', ss);
  // }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCountryDto: CreateCountryDto): string {
    return 'This action adds a new cat';
  }

  @Delete()
  remove(): string {
    return 'This action adds a new cat';
  }

}
