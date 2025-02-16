import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Category {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  description?: string;

  @Field()
  createdAt: Date;
}
