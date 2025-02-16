import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Order } from '@dto/order';
import { OrderService } from './order.service';
import { Customer } from '@dto/customer';
import { CustomerService } from '../customer/customer.service';
import { OrderDetail } from '@dto/order-detail';
import { OrderDetailService } from '../order-detail/order-detail.service';
import { Product } from '@dto/product';
import { CreateProductInput } from '@modules/product/dto/create-product.input';
import { CreateOrderInput } from '@modules/order/dto/create-order.input';

@Resolver(() => Order)
export class OrderResolver {
  constructor(
    private readonly customerService: CustomerService,
    private readonly orderService: OrderService,
    private readonly orderDetailService: OrderDetailService,
  ) {}

  @Query(() => [Order])
  async orders(): Promise<Order[]> {
    return this.orderService.findAll();
  }

  @ResolveField(() => Customer, { nullable: true })
  async customer(@Parent() order: Order): Promise<Customer> {
    return this.customerService.findOne(order.customerId);
  }

  @ResolveField(() => [OrderDetail], { nullable: true })
  async details(@Parent() order: Order): Promise<OrderDetail[]> {
    return this.orderDetailService.findAllByOrderId(order.id);
  }

  @Mutation(() => Order)
  async createOrder(@Args('input') input: CreateOrderInput): Promise<Order> {
    return this.orderService.create(
      input.totalAmount,
      input.shippingAddress,
      input.customerId,
      input.details,
    );
  }
}
