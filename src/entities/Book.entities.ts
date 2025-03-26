import { ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Column } from 'typeorm';
import { Entity } from 'typeorm';
import { Author } from './Author.entities';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'int' })
  year: number;

  @ManyToOne(() => Author, (author) => author.books)
  author: Author;
}
