import { CityRepository } from './city.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { City } from './city.entity';
import { Like } from 'typeorm';

@Injectable()
export class CitiesService {
  constructor(
    @InjectRepository(CityRepository)
    private cityRepository: CityRepository,
  ) {}

  async getCities(search: string) {
    let cities: City[];
    if (!search) {
      cities = await this.cityRepository.find({
        take: 100,

        order: {
          libelleacheminement: 'ASC',
        },
      });
    } else {
      cities = await this.cityRepository.find({
        take: 100,
        order: {
          libelleacheminement: 'ASC',
        },
        where: [
          { libelleacheminement: Like(`%${search.toUpperCase()}%`) },
          { codepostal: Like(`%${search.toUpperCase()}%`) },
        ],
      });
    }

    const citiesJSON = cities.map((city) => city.toJSON());
    return citiesJSON;
  }
}
