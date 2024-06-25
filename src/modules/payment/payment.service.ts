import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { PayoutMaster } from "./entities/payout.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { paymentDto } from "./dto/payout.dto";

@Injectable()
export class PaymentService {

  constructor(
    @InjectRepository(PayoutMaster)
    private payoutRepository: Repository<PayoutMaster>
  ) { }

  async getPayOutDetails() {
    const result = await this.payoutRepository.find();
    return result;
  }

  async addPayOutDetails(payoutDetails: paymentDto) {
    const result = await this.payoutRepository.save(payoutDetails);
    return result;
  }

  async updatePayOutDetails(id: number, payoutDetails: paymentDto) {
    const result = await this.payoutRepository.update(id, payoutDetails);
    if (result.affected === 1) {
      return "Payout Details Updated Successfully";
    } else {
      return "something went wrong"
    }
  }

  async deletePayOutDetails(id: number) {
    const result = await this.payoutRepository.softRemove({ id: id });
    if (result.deletedAt) {
      return "Payout Details Removed Successfully";
    } else {
      return "something went wrong"
    }
  }

}