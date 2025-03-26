import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateBookDto } from './create-book.dto';

export class UpdateBookDto extends PartialType(CreateBookDto) {
  @ApiProperty({ example: 'Harry Potter 2' })
  name: string;

  @ApiProperty({ example: "I'd like to read this book" })
  description: string;

  @ApiProperty({ example: '3' })
  authorId: number;
}