import { BadRequestException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { userScarpDetails } from "./entities/product.entity";
import { Repository } from "typeorm";
import { scrapDto } from "./dto/product.dto";
import { productCategory } from "./entities/category.entity";

@Injectable()
export class productService {
  constructor(
    @InjectRepository(userScarpDetails)
    public scrapRepository: Repository<userScarpDetails>,

    @InjectRepository(productCategory)
    public categoryRepository: Repository<productCategory>
  ) { }

  async getUserScarp(): Promise<userScarpDetails[]> {
    try {

      // ----> using QueryBuilder
      // const data = await this.scrapRepository.createQueryBuilder("scarp").where("scarp.id= :id", { id: 1 }).getOne();

      // console.log(data);

      const result = await this.scrapRepository.find();
      return result;

    } catch (err) {
      throw new InternalServerErrorException();
    }

  }

  async uploadScrap(scrapDetails: scrapDto) {
    try {

      const category = await this.categoryRepository.findOneBy({ id: scrapDetails.categoryId });

      if (!category) {
        throw new BadRequestException();
      }

      scrapDetails.categoryId = category.id;

      const result = await this.scrapRepository.save(scrapDetails);

      return result;

    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async updateScarp(id: number, scrapDetails: scrapDto) {
    try {
      scrapDetails.deliveryStatus = "Pending";
      scrapDetails.paymentStatus = "Pending";

      const category = await this.categoryRepository.findOneBy({ id: scrapDetails.categoryId });
      const cat = this.categoryRepository.create(category);

      scrapDetails.categoryId = cat.id;

      const result = await this.scrapRepository.update(id, scrapDetails);
      if (result.affected === 1) {
        return "Scarp updated Successfully";
      } else {
        return "Something went wrong";
      }
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async removeScarp(id: number) {
    try {
      const result = await this.scrapRepository.softRemove({ id: id });
      if (result.deletedAt) {
        return "Scarp Removed Successfully";
      } else {
        return "Something went wrong";
      }
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

}