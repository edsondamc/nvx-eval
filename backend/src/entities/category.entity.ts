import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ProductEntity } from './product.entity';

@Entity('category', { schema: 'app' })
export class CategoryEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'description' })
  description: string;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @OneToMany(() => ProductEntity, (product) => product.category)
  products: ProductEntity[];
}
