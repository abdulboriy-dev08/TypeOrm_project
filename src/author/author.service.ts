import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { Repository } from 'typeorm';
import { Author } from 'src/entities/Author.entities';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthorService {
  constructor(@InjectRepository(Author) private authors: Repository<Author>) {}

  async create(createAuthorDto: CreateAuthorDto) {
    try {
      let data = this.authors.create(createAuthorDto);
      await this.authors.save(data);

      return { data };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll() {
    try {
      const authors = await this.authors.find();
      if (!authors.length) return { message: 'Authors table empty' };

      return { authors };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findOne(id: number) {
    try {
      const author = await this.authors.findBy({ id });
      if (!author.length) throw new NotFoundException('Author not found ❗');

      return { author };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async update(id: number, updateAuthorDto: UpdateAuthorDto) {
    try {
      const author = await this.authors.findBy({ id });
      if (!author.length) throw new NotFoundException('Author not found ❗');

      await this.authors.update({ id }, updateAuthorDto);
      
      return { author };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async remove(id: number) {
    try {
      const author = await this.authors.findBy({ id });
      if (!author.length) throw new NotFoundException('Author not found ❗');

      await this.authors.delete({ id });
      return { message: 'Author is successfully deleted ✅' };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
