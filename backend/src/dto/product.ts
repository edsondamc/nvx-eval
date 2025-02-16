import { ObjectType, Field } from '@nestjs/graphql';
import { Category } from '@dto/category';

@ObjectType()
export class Product {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  price: string;

  @Field()
  stock: number;

  @Field()
  createdAt: Date;

  @Field(() => Number, { nullable: true })
  categoryId: number;

  @Field(() => Category, { nullable: true })
  category?: Category;
}
