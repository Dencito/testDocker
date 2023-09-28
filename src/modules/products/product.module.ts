import { Module } from '@nestjs/common';
import { ProductController } from './controllers';
import { ProductService } from './services';
import { CategoryRepository, ProductRepository } from './respositories';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category, Product } from './entities';

@Module({
    imports: [TypeOrmModule.forFeature([Product, Category])],
  controllers: [ProductController],
  providers: [ProductService, ProductRepository, CategoryRepository]
})
export class ProductModule {}
