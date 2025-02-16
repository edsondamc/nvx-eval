import { Logger, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerEntity } from '@entities/customer.entity';
import { OrderService } from './order.service';
import { OrderResolver } from './order.resolver';
import { OrderEntity } from '@entities/order.entity';
import { CustomerService } from '../customer/customer.service';
import { OrderDetailEntity } from '@entities/order-detail.entity';
import { OrderDetailService } from '../order-detail/order-detail.service';
import { ProductEntity } from '@entities/product.entity';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([
      CustomerEntity,
      ProductEntity,
      OrderEntity,
      OrderDetailEntity,
    ]),
  ],
  controllers: [],
  providers: [
    Logger,
    CustomerService,
    OrderService,
    OrderDetailService,
    OrderResolver,
  ],
})
export class OrderModule {}
