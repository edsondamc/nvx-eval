import { Field, ObjectType } from '@nestjs/graphql';
import { Customer } from '@dto/customer';

@ObjectType()
export class Order {
  @Field()
  id: number;

  @Field()
  totalAmount: number;

  @Field()
  shippingAddress?: string;

  @Field()
  status?: string;

  @Field()
  createdAt: Date;

  @Field(() => Number, { nullable: true })
  customerId: number;

  @Field(() => Customer, { nullable: true })
  customer?: Customer;
}
