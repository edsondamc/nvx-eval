import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Customer {
  @Field()
  id: number;

  @Field()
  firstName: string;

  @Field()
  lastName?: string;

  @Field()
  email?: string;

  @Field()
  phone?: string;

  @Field()
  createdAt: Date;
}
