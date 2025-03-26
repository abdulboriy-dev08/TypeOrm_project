import { Module } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorController } from './author.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from 'src/entities/Author.entities';
import { AuthorProfile } from 'src/entities/AuthorProfile.entities';
import { Book } from 'src/entities/Book.entities';

@Module({
  imports: [TypeOrmModule.forFeature([Author, AuthorProfile, Book])],
  controllers: [AuthorController],
  providers: [AuthorService],
})

export class AuthorModule {}