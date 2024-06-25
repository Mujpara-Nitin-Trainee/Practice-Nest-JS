import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Like, Repository } from 'typeorm';
import { addressUser, UserDto } from './dto/user.dto';
import { userAddresses } from './dto/address.dto';
import { AddressService } from '../address/address.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private addressService: AddressService
  ) { }

  private readonly users: UserDto[] = [];

  async create(user: UserDto) {
    try {

      const exists = await this.userRepository.findBy({ email: user.email });

      if (exists.length !== 0) return "Something went wrong";

      const result = await this.userRepository.save(user);

      return result;
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async findAll(): Promise<User[]> {
    try {
      const result = await this.userRepository.find();
      return result;
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async findOne(id: number): Promise<User> {
    try {
      const result = await this.userRepository.findOneBy({ id: id });
      return result;
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async userAddress(userDetails: userAddresses) {
    try {
      const user = this.userRepository.create(userDetails);

      let addresses = [];

      for (let i = 0; i < userDetails.address.length; i++) {
        const address = userDetails.address[i];
        addresses.push(address);
      }

      user.address = addresses;

      const result = await this.userRepository.save(user);

      return result;

    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async registerUserAddress(userDetails: addressUser) {
    try {

      const userData = this.userRepository.create(userDetails);

      const data = await this.addressService.findAddressById();

      data.user.push(userData);

      const result = await this.addressService.saveUserAddress(data);

      // const result = await this.userRepository.save(data);

      return result;

    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async update(id: number, userDetails: UserDto) {
    try {
      const result = await this.userRepository.update(id, userDetails);
      if (result.affected === 1) {
        return "User Updated Successfully";
      } else {
        return "Something went wrong";
      }
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async remove(id: number): Promise<string> {
    try {
      const result = await this.userRepository.softRemove({ id: +id });
      if (result.deletedAt) {
        return "User Removed Successfully";
      } else {
        return "Something went wrong";
      }
    } catch (err) {
      throw new InternalServerErrorException();
    }

  }

  async findUser(email: string): Promise<User> {
    try {
      const result = await this.userRepository.findOneBy({ email: email });
      return result;
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async findUserByName(name: string) {
    try {
      const result = await this.userRepository.find({ where: { name: Like(`%${name}%`) }, order: { name: "ASC" } });
      return result;
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

}
