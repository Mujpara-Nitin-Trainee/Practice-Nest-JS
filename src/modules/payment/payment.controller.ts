import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiConsumes, ApiTags } from "@nestjs/swagger";
import { paymentDto } from "./dto/payout.dto";
import { PaymentService } from "./payment.service";

@ApiTags('Payment')
@Controller('payment')
export class PaymentController {

  constructor(private payoutService: PaymentService) { }

  @Get('payouts')
  async getPayOuts() {
    return await this.payoutService.getPayOutDetails();
  }

  @Post('AddPayout')
  @ApiConsumes('application/x-www-form-urlencoded')
  async addPayouts(@Body() payoutDetails: paymentDto) {
    return await this.payoutService.addPayOutDetails(payoutDetails);
  }

  @Patch('updatePayOut:id')
  @ApiConsumes('application/x-www-form-urlencoded')
  async updatePayout(@Param('id') id: string, @Body() payoutDetails: paymentDto) {
    return await this.updatePayout(id, payoutDetails);
  }

  @Delete('deletePayOut:id')
  async deletePayout(@Param('id') id: string) {
    return await this.deletePayout(id);
  }
}