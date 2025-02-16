import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderDetailEntity } from '../../entities/order-detail.entity';
import { OrderDetail } from '@dto/order-detail';
import { Category } from '@dto/category';

@Injectable()
export class OrderDetailService {
  constructor(
    @InjectRepository(OrderDetailEntity)
    private orderDetailRepository: Repository<OrderDetailEntity>,
  ) {}

  async findAllByOrderId(id: number): Promise<OrderDetail[]> {
    const entities: OrderDetailEntity[] = await this.orderDetailRepository.find(
      {
        where: { order: { id: id } },
        relations: ['order', 'product'],
        select: { order: { id: true }, product: { id: true } },
      },
    );

    return entities.map<OrderDetail>((entity) => {
      return {
        id: entity.id,
        quantity: entity.quantity,
        price: entity.price,
        totalAmount: entity.totalAmount,
        createdAt: entity.createdAt,
        orderId: entity.order.id,
        productId: entity.product.id,
      };
    });
  }
}
