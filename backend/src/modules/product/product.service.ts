import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductEntity } from '../../entities/product.entity';
import { Product } from '@dto/product';
import { CategoryEntity } from '../../entities/category.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(CategoryEntity)
    private categoryRepository: Repository<CategoryEntity>,
    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>,
  ) {}

  async findAll(): Promise<Product[]> {
    const result: ProductEntity[] = await this.productRepository.find({
      relations: ['category'],
      select: {
        category: { id: true },
      },
    });
    return result.map<Product>((entity) => {
      return {
        id: entity.id,
        name: entity.name,
        description: entity.description,
        price: entity.price,
        stock: entity.stock,
        createdAt: entity.createdAt,
        categoryId: entity.category.id,
      };
    });
  }

  async findOne(id: number): Promise<Product> {
    const entity = await this.productRepository.findOneOrFail({
      where: { id: id },
      relations: ['category'],
      select: { category: { id: true } },
    });
    return {
      id: entity.id,
      name: entity.name,
      description: entity.description,
      price: entity.price,
      stock: entity.stock,
      createdAt: entity.createdAt,
      categoryId: entity.category.id,
    };
  }

  async create(
    name: string,
    description: string,
    price: string,
    categoryId: number,
  ): Promise<Product> {
    const category = await this.categoryRepository.findOne({
      where: { id: categoryId },
    });

    if (!category) {
      throw new Error('Category not found');
    }

    const product = new ProductEntity();
    product.name = name;
    product.description = description;
    product.price = price;
    product.category = category;

    const resultEntity = await this.productRepository.save(product);

    return {
      id: resultEntity.id,
      name: resultEntity.name,
      description: resultEntity.description,
      price: resultEntity.price,
      stock: resultEntity.stock,
      createdAt: resultEntity.createdAt,
      categoryId: resultEntity.category.id,
    };
  }
}
