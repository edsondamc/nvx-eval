import { InputType, Field, Int, Float } from '@nestjs/graphql';
import { OrderDetailInput } from '@modules/order/dto/order-detail.input';

@InputType()
export class CreateOrderInput {
  @Field(() => Float)
  totalAmount: number;

  @Field(() => String)
  shippingAddress: string;

  @Field(() => Int)
  customerId: number;

  @Field(() => [OrderDetailInput])
  details: OrderDetailInput[];
}
