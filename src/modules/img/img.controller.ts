import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { ImgService } from './img.service';
import { ApiConsumes, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { imgDto } from './dto/img.dto';
import { AuthGuard } from '../auth/guard/auth.guard';
import { checkIdPipe } from 'src/helpers/checkId';

@ApiTags('img')
@ApiSecurity('JWT-auth')
@Controller('img')
export class ImgController {

  constructor(
    private imgService: ImgService
  ) { }

  @UseGuards(AuthGuard)
  @Get('/getImg')
  async getImgs() {
    return await this.imgService.getImgDetails();
  }

  @UseGuards(AuthGuard)
  @Get('/getUserImg')
  async getUserImg() {
    return await this.imgService.getUserImgDetails();
  }

  @UseGuards(AuthGuard)
  @Get('/getScarpImg')
  async getScarpImg() {
    return await this.imgService.getScrapImgDetails();
  }

  @UseGuards(AuthGuard)
  @Patch('/addImg:id')
  @ApiConsumes('application/x-www-form-urlencoded')
  async addImg(@Param('id') id: string, @Body() imgDetails: imgDto) {
    console.log(id);
    return await this.imgService.addImgDetails(imgDetails);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  async removeImg(@Param('id') id: string) {
    return await this.imgService.deleteImgDetails(+id);
  }
}
