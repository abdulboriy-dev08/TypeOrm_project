import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateAuthorDto } from './create-author.dto';

export class UpdateAuthorDto extends PartialType(CreateAuthorDto) {
  @ApiProperty({ example: 'Tohir Malik' })
  fullName: string;

  @ApiProperty({ example: '1946-12-27' })
  birth_date: Date;

  @ApiProperty({ example: '1742982326454.webp' })
  avatar: string;
}
