import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  @ApiProperty({ example: 'Harry Potter 1' })
  name: string;

  @ApiProperty({ example: 'This book is very interesting and amazing' })
  description: string;

  @ApiProperty({ example: '1' })
  authorId: number;
}
