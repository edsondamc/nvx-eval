import { Logger, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerEntity } from '../../entities/customer.entity';
import { CustomerResolver } from './customer.resolver';
import { CustomerService } from './customer.service';

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([CustomerEntity])],
  controllers: [],
  providers: [Logger, CustomerService, CustomerResolver],
})
export class CustomerModule {}
