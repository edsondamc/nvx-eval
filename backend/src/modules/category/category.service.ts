import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryEntity } from '../../entities/category.entity';
import { Category } from '@dto/category';
import { User } from '@dto/user';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private categoryRepository: Repository<CategoryEntity>,
  ) {}

  async findAll(): Promise<Category[]> {
    const result: CategoryEntity[] = await this.categoryRepository.find();
    return result.map<Category>((entity) => {
      return {
        id: entity.id,
        name: entity.name,
        description: entity.description,
        createdAt: entity.createdAt,
      };
    });
  }

  async findOne(id: number): Promise<Category> {
    const result = await this.categoryRepository.findOneByOrFail({ id: id });
    return {
      id: result.id,
      name: result.name,
      description: result.description,
      createdAt: new Date(),
    };
  }
}
