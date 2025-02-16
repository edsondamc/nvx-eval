import { Args, Query, Resolver } from '@nestjs/graphql';
import { Category } from '@dto/category';
import { CategoryService } from './category.service';
import { User } from '@dto/user';

@Resolver(() => Category)
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Query(() => [Category])
  async categories(): Promise<Category[]> {
    return this.categoryService.findAll();
  }

  @Query(() => Category, { nullable: true })
  async category(@Args('id') id: number): Promise<Category> {
    return this.categoryService.findOne(id);
  }
}
