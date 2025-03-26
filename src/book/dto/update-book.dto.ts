import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateBookDto } from './create-book.dto';

export class UpdateBookDto extends PartialType(CreateBookDto) {
  @ApiProperty({ example: 'Harry Potter 2' })
  name: string;

  @ApiProperty({ example: '2002' })
  year: number;
}
