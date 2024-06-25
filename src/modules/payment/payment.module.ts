import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PayoutMaster } from './entities/payout.entity';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';

@Module({
  imports: [TypeOrmModule.forFeature([PayoutMaster])],
  controllers: [PaymentController],
  providers: [PaymentService]
})
export class PaymentModule { }
