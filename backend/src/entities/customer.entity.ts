import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProductEntity } from './product.entity';
import { OrderEntity } from './order.entity';

@Entity('customer', { schema: 'app' })
export class CustomerEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column({ name: 'email' })
  email: string;

  @Column({ name: 'phone' })
  phone: string;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @OneToMany(() => OrderEntity, (order) => order.customer)
  orders: OrderEntity[];
}
