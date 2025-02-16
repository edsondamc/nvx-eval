import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { OrderEntity } from './order.entity';
import { ProductEntity } from './product.entity';

@Entity('order_detail', { schema: 'app' })
export class OrderDetailEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'quantity', type: 'integer' })
  quantity: number;

  @Column({ name: 'price', type: 'decimal', precision: 10, scale: 2 })
  price: string;

  @Column({ name: 'total_amount', type: 'decimal', precision: 10, scale: 2 })
  totalAmount: string;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @ManyToOne(() => OrderEntity, (entity) => entity.details)
  @JoinColumn({ name: 'order_id' })
  order: OrderEntity;

  @ManyToOne(() => ProductEntity, (entity) => entity.details)
  @JoinColumn({ name: 'product_id' })
  product: ProductEntity;
}
