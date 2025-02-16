import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { OrderDetailService } from './order-detail.service';
import { OrderDetail } from '@dto/order-detail';
import { ProductService } from '../product/product.service';
import { Product } from '@dto/product';

@Resolver(() => OrderDetail)
export class OrderDetailResolver {
  constructor(
    private readonly productService: ProductService,
    private readonly orderDetailService: OrderDetailService,
  ) {}

  // @Query(() => [Order])
  // async orderDetails(): Promise<Order[]> {
  //   return this.orderService.findAll();
  // }

  @ResolveField(() => OrderDetail, { nullable: true })
  async product(@Parent() orderDetail: OrderDetail): Promise<Product> {
    return this.productService.findOne(orderDetail.id);
  }
}
