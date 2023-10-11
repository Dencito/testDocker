import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from './modules/auth';
import { UserModule } from './modules/user';
import { ProductModule } from './modules/products';
import { User } from './modules/user/entities';
import { Category, Product } from './modules/products/entities';

@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'peanut.db.elephantsql.com',
    port: 5432,
    username: 'aszqcmjw',
    password: 'FpVPerF9q4fyQhFOjbRoyO8Jrlsfagbl',
    database: 'aszqcmjw',
    entities: [User, Product, Category],
    synchronize: true,
  }),AuthModule, UserModule, ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {
}
