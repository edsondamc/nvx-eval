import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../../entities/user.entity';
import { User } from '@dto/user';
import { CreateUserInput } from './dto/create-user.input';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async findAll(): Promise<User[]> {
    const result: UserEntity[] = await this.userRepository.find();
    return result.map<User>((entity) => {
      return {
        id: entity.id,
        firstName: entity.firstName,
        lastName: entity.lastName,
        createdAt: entity.createdAt,
      };
    });
  }

  async findOne(id: number): Promise<User> {
    const result = await this.userRepository.findOneByOrFail({ id: id });
    return {
      id: result.id,
      firstName: result.firstName,
      lastName: result.lastName,
      createdAt: new Date(),
    };
  }

  async create(input: CreateUserInput): Promise<User> {
    const user = new UserEntity();
    user.firstName = input.firstName;
    user.lastName = input.lastName;
    const result = await this.userRepository.save(user);
    return {
      id: result.id,
      firstName: result.firstName,
      lastName: result.lastName,
      createdAt: result.createdAt,
    };
  }
}
