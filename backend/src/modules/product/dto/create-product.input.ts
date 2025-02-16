import { InputType, Field, Int, Float } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => Float)
  price: string;

  @Field(() => Int)
  categoryId: number;
}
