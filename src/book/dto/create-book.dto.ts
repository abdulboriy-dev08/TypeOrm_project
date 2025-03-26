import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  @ApiProperty({ example: 'Harry Potter 1' })
  name: string;

  @ApiProperty({ example: '2001' })
  year: number;
}
