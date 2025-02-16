import { Query, Resolver } from '@nestjs/graphql';
import { Customer } from '@dto/customer';
import { CustomerService } from './customer.service';

@Resolver(() => Customer)
export class CustomerResolver {
  constructor(private readonly customerService: CustomerService) {}

  @Query(() => [Customer])
  async customers(): Promise<Customer[]> {
    return this.customerService.findAll();
  }

  // @Query(() => User)
  // async user(@Args('id') id: number): Promise<User> {
  //   return this.userService.findOne(id);
  // }
  //
  // @Mutation(() => User)
  // async createUser(@Args('input') input: CreateUserInput): Promise<User> {
  //   return this.userService.create(input);
  // }
}
