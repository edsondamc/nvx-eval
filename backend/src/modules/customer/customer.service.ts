import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomerEntity } from '../../entities/customer.entity';
import { Customer } from '@dto/customer';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(CustomerEntity)
    private customerRepository: Repository<CustomerEntity>,
  ) {}

  async findAll(): Promise<Customer[]> {
    const result: CustomerEntity[] = await this.customerRepository.find();
    return result.map<Customer>((entity) => {
      return {
        id: entity.id,
        firstName: entity.firstName,
        lastName: entity.lastName,
        email: entity.email,
        phone: entity.phone,
        createdAt: entity.createdAt,
      };
    });
  }

  async findOne(id: number): Promise<Customer> {
    const entity = await this.customerRepository.findOneByOrFail({ id: id });
    return {
      id: entity.id,
      firstName: entity.firstName,
      lastName: entity.lastName,
      email: entity.email,
      phone: entity.phone,
      createdAt: entity.createdAt,
    };
  }
}
