import { Auth, Column, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Author } from './Author.entities';

export class AuthorProfile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  avatar: string;

  @OneToOne(() => Author, (author) => author.profile)
  author: Author;
}
