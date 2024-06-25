import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { ApiBearerAuth, ApiConsumes, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { scrapDto } from './dto/product.dto';
import { productService } from './product.service';
import { userScarpDetails } from './entities/product.entity';
import { AuthGuard } from '../auth/guard/auth.guard';
import { SearchTimerInterceptor } from 'src/helpers/searchTimer';

@ApiTags('scrapDetails')
@ApiSecurity('JWT-auth')
@Controller('product')
export class ProductController {

  constructor(private scrapServices: productService) { }

  @UseGuards(AuthGuard)
  @Get('getScarp')
  @UseInterceptors(SearchTimerInterceptor)
  async getScrap(): Promise<userScarpDetails[]> {
    return this.scrapServices.getUserScarp();
  }

  @UseGuards(AuthGuard)
  @Post('addScarp')
  @ApiConsumes('application/x-www-form-urlencoded')
  async addScrap(@Body() scrapDetails: scrapDto) {
    return this.scrapServices.uploadScrap(scrapDetails);
  }

  @UseGuards(AuthGuard)
  @Patch('updateScarp:id')
  @ApiConsumes('application/x-www-form-urlencoded')
  async updateScrap(@Param('id') id: string, @Body() scarpDetails: scrapDto) {
    return this.scrapServices.updateScarp(+id, scarpDetails);
  }

  @UseGuards(AuthGuard)
  @Delete('removeScarp:id')
  async deleteScrap(@Param('id') id: string) {
    return this.scrapServices.removeScarp(+id);
  }
}
