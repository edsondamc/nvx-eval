import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderEntity } from '@entities/order.entity';
import { Order } from '@dto/order';
import { OrderDetailEntity } from '@entities/order-detail.entity';
import { CustomerEntity } from '@entities/customer.entity';
import { OrderDetailInput } from '@modules/order/dto/order-detail.input';
import { ProductEntity } from '@entities/product.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(CustomerEntity)
    private customerRepository: Repository<CustomerEntity>,
    @InjectRepository(OrderEntity)
    private orderRepository: Repository<OrderEntity>,
    @InjectRepository(OrderDetailEntity)
    private orderDetailRepository: Repository<OrderDetailEntity>,
    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>,
  ) {}

  async findAll(): Promise<Order[]> {
    const result: OrderEntity[] = await this.orderRepository.find({
      relations: ['customer'],
      select: {
        customer: {
          id: true,
        },
      },
    });

    return result.map<Order>((entity) => {
      return {
        id: entity.id,
        totalAmount: entity.totalAmount,
        status: entity.status,
        shippingAddress: entity.shippingAddress,
        createdAt: entity.createdAt,
        customerId: entity.customer.id,
      };
    });
  }

  async create(
    totalAmount: number,
    shippingAddress: string,
    customerId: number,
    details: OrderDetailInput[],
  ): Promise<Order> {
    const customer = await this.customerRepository.findOne({
      where: { id: customerId },
    });

    if (!customer) throw new Error('Category not found');

    const orderDetails: OrderDetailEntity[] = [];
    for (const detail of details) {
      const product = await this.productRepository.findOne({
        where: { id: detail.productId },
      });

      if (!product) throw new Error('Product not found');

      const detailEntity = new OrderDetailEntity();
      detailEntity.quantity = detail.quantity;
      detailEntity.price = detail.price;
      detailEntity.product = product;
      orderDetails.push(detailEntity);
    }

    const order = new OrderEntity();
    order.totalAmount = totalAmount;
    order.shippingAddress = shippingAddress;
    order.status = 'pending';
    order.customer = customer;
    order.details = orderDetails;

    const resultEntity = await this.orderRepository.save(order);

    return {
      id: resultEntity.id,
      totalAmount: resultEntity.totalAmount,
      shippingAddress: resultEntity.shippingAddress,
      status: resultEntity.status,
      createdAt: resultEntity.createdAt,
      customerId: resultEntity.customer.id,
    };
  }
}
