import {Body, Controller, Post} from '@nestjs/common';
import {PlacesService} from "./places.service";
import {CreatePlaceDto} from "./place.dto";
import {Place} from "./place.entity";

@Controller('places')
export class PlacesController {
  constructor(private placesService: PlacesService) {
  }

  @Post()
  create(@Body() createPlaceDto: CreatePlaceDto): Promise<Place> {
    console.log('createCountryDto: ', createPlaceDto)
    return this.placesService.add(createPlaceDto);
  }
}
