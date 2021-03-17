import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Place} from "./place.entity";
import {CreatePlaceDto} from "./place.dto";

@Injectable()
export class PlacesService {
  constructor(
    @InjectRepository(Place)
    private placesRepository: Repository<Place>,
  ) {
  }

  async add(place: CreatePlaceDto): Promise<Place> {
    return await this.placesRepository.save(place);
  }
}
