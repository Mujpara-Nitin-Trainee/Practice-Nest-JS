import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { State } from './entities/state.entity';
import { stateDto } from './dto/city.dto';
import { addressMaster } from './entities/address.entity';
import { City } from './entities/city.entity';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(State)
    private stateRepository: Repository<State>,
    @InjectRepository(addressMaster)
    private addressRepository: Repository<addressMaster>,
    @InjectRepository(City)
    private cityRepository: Repository<City>
  ) { }

  async createCityState(stateDetails: stateDto) {
    try {

      const exists = await this.stateRepository.findOne({ where: { stateName: stateDetails.stateName } })


      if (!exists) {

        const state = this.stateRepository.create(stateDetails);

        const cities = [];

        for (let i = 0; i < stateDetails.cities.length; i++) {
          const city = stateDetails.cities[i];
          cities.push(city);
        }

        state.cities = cities;

        const result = await this.stateRepository.save(stateDetails);

        return result;
      }

      let output: boolean = true;

      for (let i = 0; i < stateDetails.cities.length; i++) {

        const cityExists = await this.cityRepository.findBy({ cityName: stateDetails.cities[i].cityName });

        if (cityExists.length !== 0) return 'Something went wrong';

        const result = await this.cityRepository.save({
          cityName: stateDetails.cities[i].cityName,
          stateId: exists.id
        })

        if (!result) output = false;

      }

      if (output === true) return "Data Inserted Successfully"
      else return "Something went wrong"

    } catch (err) {
      console.log(err);
      throw new InternalServerErrorException();
    }

  }

  async findCityState() {
    try {

      const result = await this.stateRepository.find({
        relations: {
          cities: true,
        },
      })

      return result;

    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async findAddressById() {
    try {

      const data = await this.addressRepository.findOne({
        where: { id: 1 }, relations: {
          user: true
        }
      });

      return data;

    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async saveUserAddress(userAddressDetails: addressMaster) {
    try {
      return await this.addressRepository.save(userAddressDetails);
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

}
