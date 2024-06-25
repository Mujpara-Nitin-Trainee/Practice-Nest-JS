import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ImgMaster } from './entities/img.entity';
import { Equal, Repository } from 'typeorm';
import { imgDto } from './dto/img.dto';

@Injectable()
export class ImgService {
  constructor(
    @InjectRepository(ImgMaster)
    private imgRepository: Repository<ImgMaster>
  ) { }

  async getImgDetails() {
    try {

      const result = await this.imgRepository.find();

      return result;

    } catch (err) {
      console.log(err);
      throw new InternalServerErrorException();
    }
  }

  async getUserImgDetails() {
    try {

      const result = await this.imgRepository.findBy({ imgReferType: Equal('user') })

      return result;

    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async getScrapImgDetails() {
    try {

      const result = await this.imgRepository.findBy({ imgReferType: Equal('scarp') })

      return result;

    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async addImgDetails(imgDetails: imgDto) {
    try {

      const result = await this.imgRepository.save(imgDetails);

      return result;

    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async deleteImgDetails(id: number) {
    try {

      const result = await this.imgRepository.softRemove({ id: id });

      if (result.deletedAt) {
        return "Img Details Deleted Successfully";
      } else {
        return "something went wrong";
      }

    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

}
