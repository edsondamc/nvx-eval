import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserModule } from '@modules/user/user.module';
import { ProductModule } from '@modules/product/product.module';
import { CustomerModule } from '@modules/customer/customer.module';
import { CategoryModule } from '@modules/category/category.module';
import { OrderModule } from '@modules/order/order.module';
import { OrderDetailModule } from '@modules/order-detail/order-detail.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'novax',
      username: 'root',
      password: 'pass',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: true,
      path: '/',
    }),
    UserModule,
    ProductModule,
    CategoryModule,
    CustomerModule,
    OrderModule,
    OrderDetailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
