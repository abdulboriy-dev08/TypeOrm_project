import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Book } from './Book.entities';

@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column()
  birth_date: Date;

  @Column()
  avatar: string;

  @OneToMany(() => Book, (book) => book.author)
  books: Book[];
}