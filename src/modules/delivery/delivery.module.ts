import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScarpDelivery } from './entities/delivery.entity';
import { DeliveryController } from './delivery.controller';
import { deliveryService } from './delivery.service';

@Module({
  imports: [TypeOrmModule.forFeature([ScarpDelivery])],
  controllers: [DeliveryController],
  providers: [deliveryService]
})
export class DeliveryModule { }
