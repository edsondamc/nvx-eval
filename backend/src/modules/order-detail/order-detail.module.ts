import { Logger, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerEntity } from '../../entities/customer.entity';
import { OrderEntity } from '../../entities/order.entity';
import { CustomerService } from '../customer/customer.service';
import { OrderDetailService } from './order-detail.service';
import { OrderDetailResolver } from './order-detail.resolver';
import { OrderDetailEntity } from '../../entities/order-detail.entity';
import { ProductService } from '../product/product.service';
import { ProductEntity } from '../../entities/product.entity';
import { CategoryEntity } from '../../entities/category.entity';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([
      CustomerEntity,
      OrderEntity,
      OrderDetailEntity,
      CategoryEntity,
      ProductEntity,
    ]),
  ],
  controllers: [],
  providers: [
    Logger,
    CustomerService,
    OrderDetailService,
    ProductService,
    OrderDetailResolver,
  ],
})
export class OrderDetailModule {}
