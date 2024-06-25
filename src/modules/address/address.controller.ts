import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiConsumes, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { AddressService } from './address.service';
import { stateDto } from './dto/city.dto';
import { AuthGuard } from '../auth/guard/auth.guard';

@ApiTags('Address')
@ApiSecurity('JWT-auth')
@Controller('address')
export class AddressController {

  constructor(private stateService: AddressService) { }

  @UseGuards(AuthGuard)
  @Post('cities')
  @ApiConsumes('application/x-www-form-urlencoded')
  async addCity(@Body() stateDetails: stateDto) {
    return await this.stateService.createCityState(stateDetails);
  }

  @UseGuards(AuthGuard)
  @Get('cities')
  async findStateCity() {
    return await this.stateService.findCityState();
  }
}
