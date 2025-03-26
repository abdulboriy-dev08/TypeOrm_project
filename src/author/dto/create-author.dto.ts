import { ApiProperty } from '@nestjs/swagger';

export class CreateAuthorDto {
  @ApiProperty({ example: 'Abdulla Qodiriy' })
  fullName: string;

  @ApiProperty({ example: '1894-10-10' })
  birth_date: Date;

  @ApiProperty({ example: '1742982326454.webp' })
  avatar: string;
}
