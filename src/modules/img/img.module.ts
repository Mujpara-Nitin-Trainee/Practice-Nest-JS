import { Module } from '@nestjs/common';
import { ImgController } from './img.controller';
import { ImgService } from './img.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImgMaster } from './entities/img.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ImgMaster])],
  controllers: [ImgController],
  providers: [ImgService]
})
export class ImgModule { }
