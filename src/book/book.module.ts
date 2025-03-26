import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from 'src/entities/Book.entities';
import { Author } from 'src/entities/Author.entities';

@Module({
  imports: [TypeOrmModule.forFeature([Book, Author])],
  controllers: [BookController],
  providers: [BookService],
})

export class BookModule {}