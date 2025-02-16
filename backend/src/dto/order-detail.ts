import { Field, ObjectType } from '@nestjs/graphql';
import { Order } from '@dto/order';
import { Product } from '@dto/product';

@ObjectType()
export class OrderDetail {
  @Field()
  id: number;

  @Field()
  quantity: number;

  @Field()
  price: string;

  @Field()
  totalAmount: string;

  @Field()
  createdAt: Date;

  @Field(() => Number, { nullable: true })
  orderId: number;

  @Field(() => Order, { nullable: true })
  order?: Order;

  @Field(() => Number, { nullable: true })
  productId: number;

  @Field(() => Product, { nullable: true })
  product?: Product;
}
