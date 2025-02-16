import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CustomerEntity } from './customer.entity';
import { OrderDetailEntity } from './order-detail.entity';

@Entity('order', { schema: 'app' })
export class OrderEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'total_amount', type: 'decimal', precision: 10, scale: 2 })
  totalAmount: number;

  @Column({ name: 'shipping_address' })
  shippingAddress: string;

  @Column({ name: 'status' })
  status: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @ManyToOne(() => CustomerEntity, (entity) => entity.orders)
  @JoinColumn({ name: 'customer_id' })
  customer: CustomerEntity;

  @OneToMany(() => OrderDetailEntity, (orderDetail) => orderDetail.order)
  details: OrderDetailEntity[];
}
