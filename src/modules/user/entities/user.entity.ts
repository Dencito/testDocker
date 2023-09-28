import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, length: 255, type: 'varchar', nullable: false })
  email: string;

  @Column({ length: 255, type: 'varchar', nullable: false })
  password: string;

  @Column({ type: 'boolean', nullable: true })
  isActive: boolean;
}
