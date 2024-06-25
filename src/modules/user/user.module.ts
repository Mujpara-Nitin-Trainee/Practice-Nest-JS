import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserController } from './user.controller';
import { AddressModule } from '../address/address.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), AddressModule],
  providers: [UserService],
  exports: [UserService],
  controllers: [UserController],
})
export class UserModule { }
