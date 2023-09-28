import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Category } from './category.entity';

@Entity({ name: 'products' })
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255, type: 'varchar', nullable: false })
  title: string;
  
  @Column({ type: "text", nullable: false })
  description: string;
  
  @Column({ type: "integer", nullable: false })
  price: number;

  @Column({ length: 255, type: 'varchar', nullable: false })
  type: string;

  @ManyToOne(() => Category, (category) => category.products)
  category: Category;
}




