import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateCountryDto, ListAllEntities } from './country.dto';
import { CountriesService } from './countries.service';
import { Country } from './country.entity';

@Controller('countries')
export class CountriesController {
  constructor(private countriesService: CountriesService) {}

  @Get()
  getAll(@Query('lang') lang: string): Promise<Country[]> {
    return this.countriesService.getAll(lang);
  }

  @Get('check')
  check(@Query('country') country: string): Promise<any> {
    return this.countriesService.check(country);
  }

  @Get(':alpha3Code')
  getOne(
    @Param('alpha3Code') alpha3Code: string,
    @Query('lang') lang: string,
  ): Promise<any> {
    return this.countriesService.getOne({ alpha3Code, lang });
  }

  @Post()
  create(@Body() createCountryDto: CreateCountryDto): Promise<Country> {
    return this.countriesService.add(createCountryDto);
  }

  // @Post()
  // async create(@Body() createCountryDto: CreateCountryDto): Promise<void> {
  //   console.log('createCountryDto: ', createCountryDto)
  //   const ss = await this.countriesService.add(createCountryDto);
  //   console.log('ss', ss);
  // }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateCountryDto: CreateCountryDto,
  ): string {
    return 'This action adds a new cat';
  }

  @Delete()
  remove(): string {
    return 'This action adds a new cat';
  }
}
