import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { deliveryDto } from "./dto/delivery.dto";
import { ApiConsumes, ApiSecurity, ApiTags } from "@nestjs/swagger";
import { deliveryService } from "./delivery.service";
import { AuthGuard } from "../auth/guard/auth.guard";

@ApiTags('Delivery')
@ApiSecurity('JWT-auth')
@Controller('delivery')
export class DeliveryController {

  constructor(private deliveryService: deliveryService) { }

  @Post('addDelivery')
  @UseGuards(AuthGuard)
  @ApiConsumes('application/x-www-form-urlencoded')
  async pickUpScrap(@Body() deliveryDetails: deliveryDto) {
    return await this.deliveryService.addScrapDelivery(deliveryDetails);
  }

  @Get('deliveryDetails')
  @UseGuards(AuthGuard)
  async getDeliveryDetails() {
    return this.deliveryService.getScarpDeliveryDetails();
  }

  @Patch('deliveryDetails:id')
  @UseGuards(AuthGuard)
  @ApiConsumes('application/x-www-form-urlencoded')
  async updateDeliveryDetails(@Param('id') id: string, @Body() deliveryDetails: deliveryDto) {
    return await this.deliveryService.updateScarpDeliveryDetails(+id, deliveryDetails);
  }

  @Delete('deliveryDetails:id')
  @UseGuards(AuthGuard)
  async deleteDeliveryDetails(@Param('id') id: string) {
    return this.deliveryService.deleteScarpDeliveryDetails(+id);
  }
}