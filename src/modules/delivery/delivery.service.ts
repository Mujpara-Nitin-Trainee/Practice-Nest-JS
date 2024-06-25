import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { Repository } from "typeorm";
import { ScarpDelivery } from "./entities/delivery.entity";
import { deliveryDto } from "./dto/delivery.dto";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class deliveryService {

  constructor(
    @InjectRepository(ScarpDelivery)
    private deliveryRepository: Repository<ScarpDelivery>
  ) { }

  async addScrapDelivery(deliveryDetails: deliveryDto) {
    try {

      const scarp = this.deliveryRepository.create(deliveryDetails);
      const result = await this.deliveryRepository.save(scarp);

      return result;

    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async getScarpDeliveryDetails() {
    try {

      const result = await this.deliveryRepository.find({
        relations: {
          deliveryBoy: true,
          scrap: true,
          pickUpAddress: true,
          deliveryAddress: true
        }
      })

      return result;

    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async updateScarpDeliveryDetails(id: number, deliveryDetails: deliveryDto) {
    try {

      const result = await this.deliveryRepository.update(id, deliveryDetails);

      if (result.affected === 1) {
        return "Scarp Details Updated Successfully";
      } else {
        return "Something went wrong";
      }

    } catch (err) {
      console.log(err);
      throw new InternalServerErrorException();
    }
  }

  async deleteScarpDeliveryDetails(id: number) {
    try {

      const result = await this.deliveryRepository.softRemove({ id: id });

      if (result.deletedAt) {
        return "Scarp  Details Deleted Successfully";
      } else {
        return "something went wrong";
      }

    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

}