import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from '../entities';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryRepository {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  findOneProductsJoinCategorie(id: number) {
    const relations = ['products'];
    const criterialOptions = {
      where: { id },
      relations,
    };
    return this.categoryRepository.find(criterialOptions);
  }
  findAllProductsCategories() {
    const relations = ['products'];
    const criterialOptions = {
      relations,
    };
    return this.categoryRepository.find(criterialOptions);
  }

  async findOne(options: any) {
    return this.categoryRepository.findOne(options);
  }
}
