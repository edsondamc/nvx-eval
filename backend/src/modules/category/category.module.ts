import { Logger, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryEntity } from '../../entities/category.entity';
import { CategoryService } from './category.service';
import { CategoryResolver } from './category.resolver';

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([CategoryEntity])],
  controllers: [],
  providers: [Logger, CategoryService, CategoryResolver],
})
export class CategoryModule {}
