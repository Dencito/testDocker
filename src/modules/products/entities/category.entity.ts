import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";

@Entity({ name: 'categories' })
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255, type: 'varchar', nullable: false })
  title: string;

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
}