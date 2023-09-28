import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category, Product } from '../entities';
import { CategoryRepository, ProductRepository } from '../respositories';

@Injectable()
export class ProductService {
  constructor(
    private readonly productRepository: ProductRepository,
    private readonly categoryRepository: CategoryRepository,
  ) {}


  async findAll () {
    return this.productRepository.findAll()
  }

  async findOneProductsJoinCategorie(id: number) {
    const data = await this.categoryRepository.findOneProductsJoinCategorie(id)
    if (!data.length) {
      throw new HttpException(
        { message: 'Categoria no encontrada', error: '6' },
        404,
      );
    }
    return data
  }
  async findAllProductsCategories() {
    return this.categoryRepository.findAllProductsCategories()
  }

  async create(product: any) {
    const { categoryId, title, description, price, type } = product;
    const criterialOptions = {
      where: { id: categoryId },
    };
    const category: any = await this.categoryRepository.findOne(
      criterialOptions,
    );
    console.log(category);
    if (!category) {
      throw new HttpException(
        { message: 'Categoria no encontrada', error: '4' },
        404,
      );
    }
    const newProduct = {
      title,
      description,
      price,
      type,
      category: categoryId,
    };
    console.log(newProduct);

    return this.productRepository.create(newProduct);
  }
}
