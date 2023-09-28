import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../entities';
import { Repository } from 'typeorm';

@Injectable()
export class ProductRepository {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  findOneById(id: number) {
    const relations = ['category'];
    const criterialOptions = {
      where: { id },
      relations,
    };
    return this.productRepository.findOne(criterialOptions);
  }

  findAll() {
    const relations = ['category'];
    const criterialOptions = {
      relations,
    };
    return this.productRepository.find(criterialOptions);
  }


  async create(product: any) {
    const data = await this.productRepository.insert(product);
    return this.findOneById(data.identifiers[0].id);
  }
}
