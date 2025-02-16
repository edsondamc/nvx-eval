import { Logger, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductService } from './product.service';
import { ProductResolver } from './product.resolver';
import { ProductEntity } from '../../entities/product.entity';
import { CategoryService } from '../category/category.service';
import { CategoryEntity } from '../../entities/category.entity';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([CategoryEntity, ProductEntity]),
  ],
  controllers: [],
  providers: [Logger, CategoryService, ProductService, ProductResolver],
})
export class ProductModule {}
