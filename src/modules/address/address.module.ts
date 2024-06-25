import { Module } from '@nestjs/common';
import { AddressController } from './address.controller';
import { AddressService } from './address.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { City } from './entities/city.entity';
import { State } from './entities/state.entity';
import { addressMaster } from './entities/address.entity';

@Module({
  imports: [TypeOrmModule.forFeature([State, City, addressMaster])],
  controllers: [AddressController],
  exports: [AddressService],
  providers: [AddressService],
})
export class AddressModule { }
