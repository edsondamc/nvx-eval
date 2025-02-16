import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
  CreateDateColumn,
} from 'typeorm';
import { CategoryEntity } from './category.entity';
import { OrderDetailEntity } from './order-detail.entity';

@Entity('product', { schema: 'app' })
export class ProductEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'description' })
  description: string;

  @Column({ name: 'price', type: 'decimal', precision: 10, scale: 2 })
  price: string;

  @Column({ name: 'stock', type: 'integer' })
  stock: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @ManyToOne(() => CategoryEntity, (entity) => entity.products)
  @JoinColumn({ name: 'category_id' })
  category: CategoryEntity;

  @OneToMany(() => OrderDetailEntity, (orderDetail) => orderDetail.product)
  details: OrderDetailEntity[];
}
