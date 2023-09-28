import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ProductService } from '../services';
import { CreateProductDto } from '../dtos';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  async create(@Body() product: CreateProductDto) {
    console.log(product)
    return this.productService.create(product);
  }
  @Get("/:id/categories")
  async findOneProductsJoinCategorie(@Param("id",ParseIntPipe) id: number) {
    return this.productService.findOneProductsJoinCategorie(id);
  }
  @Get("/categories")
  async findAllProductsCategories() {
    return this.productService.findAllProductsCategories();
  }

  @Get()
  async findAll() {
    return this.productService.findAll();
  }
}
