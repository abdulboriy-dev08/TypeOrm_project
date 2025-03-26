import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from 'src/entities/Book.entities';
import { Author } from 'src/entities/Author.entities';

@Injectable()
export class BookService {
  constructor(@InjectRepository(Book) private books: Repository<Book>) {}

  async create(createBookDto: CreateBookDto) {
    try {
      let data = this.books.create(createBookDto);
      await this.books.save(data);

      return { data };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll() {
    try {
      let books = await this.books.find({ relations: { author: true } });
      if (!books.length) return { message: 'Books table empty' };

      return { books };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findOne(id: number) {
    try {
      let book = await this.books.findBy({ id });
      if (!book.length) throw new NotFoundException('Book not found ❗');

      return { book };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
    try {
      let newBook = await this.books.update({ id }, updateBookDto);

      let findBook = await this.books.findBy(newBook.raw);
      if (!findBook.length) throw new NotFoundException('Book not found ❗');

      return { findBook };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async remove(id: number) {
    try {
      let delBook = await this.books.delete({ id });
      let findBook = await this.books.findBy(delBook.raw);
      if(!findBook.length) throw new NotFoundException('Book not found ❗');

      return { findBook };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}