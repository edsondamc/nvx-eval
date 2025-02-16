import { InputType, Field, Int, Float } from '@nestjs/graphql';

@InputType()
export class OrderDetailInput {
  @Field(() => Int)
  productId: number;

  @Field(() => Int)
  quantity: number;

  @Field(() => Float)
  price: string;
}
