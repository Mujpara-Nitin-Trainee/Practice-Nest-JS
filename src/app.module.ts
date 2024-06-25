import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { DatabaseModule } from './config/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './modules/user/user.module';
import { AddressModule } from './modules/address/address.module';
import { ProductModule } from './modules/product/product.module';
import { DeliveryModule } from './modules/delivery/delivery.module';
import { ImgModule } from './modules/img/img.module';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    DatabaseModule,
    UserModule,
    AddressModule,
    ProductModule,
    DeliveryModule,
    ImgModule 
  ],
})
export class AppModule { }
