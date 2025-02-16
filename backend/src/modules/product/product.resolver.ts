import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Product } from '@dto/product';
import { ProductService } from './product.service';
import { Category } from '@dto/category';
import { CategoryService } from '../category/category.service';
import { CreateProductInput } from './dto/create-product.input';

@Resolver(() => Product)
export class ProductResolver {
  constructor(
    private readonly categoryService: CategoryService,
    private readonly productService: ProductService,
  ) {}

  @Query(() => [Product])
  async products(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @ResolveField(() => Category, { nullable: true })
  async category(@Parent() product: Product): Promise<Category> {
    return this.categoryService.findOne(product.categoryId);
  }

  @Mutation(() => Product)
  async createProduct(
    @Args('input') input: CreateProductInput,
  ): Promise<Product> {
    return this.productService.create(
      input.name,
      input.description,
      input.price,
      input.categoryId,
    );
  }
}
