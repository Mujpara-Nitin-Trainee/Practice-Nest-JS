import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { productCategory } from './entities/category.entity';
import { userScarpDetails } from './entities/product.entity';
import { productService } from './product.service';

@Module({
  imports: [TypeOrmModule.forFeature([productCategory, userScarpDetails])],
  providers: [productService],
  controllers: [ProductController]
})
export class ProductModule { }
